const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// === API Routes (must come before static files and fallback) ===

// Test connection to Mercado Pago
app.get('/api/test-connection', async (req, res) => {
  try {
    const { accessToken } = req.query;

    if (!accessToken) {
      return res.status(400).json({ error: 'Access Token não fornecido' });
    }

    const response = await fetch('https://api.mercadopago.com/v1/payment_methods', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.ok) {
      res.json({ success: true, message: 'Conexão estabelecida com sucesso' });
    } else {
      const error = await response.json();
      res.status(response.status).json({ error: error.message || 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro no proxy:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Create payment preference for checkout redirect
app.post('/api/create-preference', async (req, res) => {
  try {
    const { accessToken, preferenceData } = req.body;

    if (!accessToken) {
      return res.status(400).json({ error: 'Access Token não fornecido' });
    }

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(preferenceData)
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Erro ao criar preferência' });
    }

    res.json(data);
  } catch (error) {
    console.error('Erro no proxy:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Create PIX payment directly
app.post('/api/create-payment', async (req, res) => {
  try {
    const { accessToken, paymentData } = req.body;

    if (!accessToken) {
      return res.status(400).json({ error: 'Access Token não fornecido' });
    }

    const response = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'X-Idempotency-Key': Date.now().toString()
      },
      body: JSON.stringify(paymentData)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Erro na API do MP:', data);
      return res.status(response.status).json({ error: data.message || 'Erro ao criar pagamento' });
    }

    res.json(data);
  } catch (error) {
    console.error('Erro no proxy:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Check payment status
app.get('/api/payment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { accessToken } = req.query;

    if (!accessToken) {
      return res.status(400).json({ error: 'Access Token não fornecido' });
    }

    const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Erro ao buscar pagamento' });
    }

    res.json(data);
  } catch (error) {
    console.error('Erro no proxy:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// === Static files and SPA fallback (must come AFTER API routes) ===
app.use(express.static(path.join(__dirname)));

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando em http://0.0.0.0:${PORT}`);
  console.log(`📦 Servindo arquivos de: ${__dirname}`);
});
