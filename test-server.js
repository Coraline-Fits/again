const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
  
  if (req.url === '/api/test') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'API funcionando!', timestamp: new Date().toISOString() }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Servidor Node.js funcionando!</h1>');
  }
});

server.listen(3000, '0.0.0.0', () => {
  console.log('🚀 Servidor de teste rodando na porta 3000');
});
