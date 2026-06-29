// === PRODUCT DATA ===
const products = [
  {
    id: 1, name: "Vestido Outro Mundo",
    category: "vestidos", cat: "Vestidos",
    price: 29.90, oldPrice: 39.90,
    tag: "hot", tagLabel: "Popular",
    emoji: "👗",
    desc: "Vestido azul clássico inspirado no vestido da Outra Mãe. Perfeito para aventuras no Outro Lado.",
    features: ["Modelagem exclusiva IMVU", "Textura de tecido com brilho sutil", "Compatível com avatar feminino", "Cores: Azul marinho e amarelo", "Edição limitada"]
  },
  {
    id: 2, name: "Casaco Sombra Noturna",
    category: "casacos", cat: "Casacos",
    price: 34.90, oldPrice: null,
    tag: "new", tagLabel: "Novo",
    emoji: "🧥",
    desc: "Casaco longo escuro com detalhes em costura dourada. Inspirado nos corredores sombrios entre os mundos.",
    features: ["Design gótico-elegante", "Detalhes em dourado", "Capa com movimento animado", "Unisex para avatar", "Partículas de poeira incluídas"]
  },
  {
    id: 3, name: "Botões Olhos Choker",
    category: "acessorios", cat: "Acessórios",
    price: 14.90, oldPrice: 19.90,
    tag: "sale", tagLabel: "Oferta",
    emoji: "🖤",
    desc: "Gargantilha com botões pretos estilo Coraline. O acessório icônico para quem não tem medo do escuro.",
    features: ["Botões de 4 furos detalhados", "Corrente em prata oxidada", "Ajustável ao avatar", "Combo com anel disponível", "Efeito de brilho noturno"]
  },
  {
    id: 4, name: "Tênis Portal Amarelo",
    category: "calcados", cat: "Calçados",
    price: 24.90, oldPrice: null,
    tag: null, tagLabel: null,
    emoji: "👟",
    desc: "Tênis amarelo vibrante inspirado na porta secreta. Para quem caminha entre mundos com estilo.",
    features: ["Modelo unissex", "Sola com efeito luminoso", "Cores vibrantes IMVU", "Compatível com todas as bases", "Animação de caminhada exclusiva"]
  },
  {
    id: 5, name: "Conjunto Gato Preto",
    category: "conjuntos", cat: "Conjuntos",
    price: 49.90, oldPrice: 64.90,
    tag: "hot", tagLabel: "Popular",
    emoji: "🐈‍⬛",
    desc: "Conjunto completo inspirado no Gato de Coraline. Inclui top, saia e orelhas com brilho nos olhos.",
    features: ["Top cropped + mini saia", "Orelhas com animação", "Olhos brilhantes no escuro", "Cauda animada inclusa", "3 variações de cor"]
  },
  {
    id: 6, name: "Vestido Aranha Rainha",
    category: "vestidos", cat: "Vestidos",
    price: 39.90, oldPrice: null,
    tag: "new", tagLabel: "Novo",
    emoji: "🕸️",
    desc: "Vestido longo com teias de aranha em renda. Para a Outra Mãe fashion que existe em você.",
    features: ["Renda com padrão de teia", "Mangas longas transparentes", "Cauda com movimento fluido", "Efeito de teia animada", "Ideal para eventos IMVU"]
  },
  {
    id: 7, name: "Jaqueta Chuva Fantasma",
    category: "casacos", cat: "Casacos",
    price: 27.90, oldPrice: 34.90,
    tag: "sale", tagLabel: "Oferta",
    emoji: "🌧️",
    desc: "Jaqueta amarela transparente com efeito de chuva. Proteção estilosa contra os fantasmas do Outro Lado.",
    features: ["Material transparente com brilho", "Capuz animado com vento", "Efeito de gotas de chuva", "Forro em coral rosa", "Perfeita para clima IMVU"]
  },
  {
    id: 8, name: "Botas Jardim dos Mortos",
    category: "calcados", cat: "Calçados",
    price: 32.90, oldPrice: null,
    tag: null, tagLabel: null,
    emoji: "🥾",
    desc: "Botas cano alto com textura de raízes e flores mortas. Caminhe pelo jardim mais sombrio com elegância.",
    features: ["Cano alto com textura orgânica", "Detalhes de flores e raízes", "Fivela em metal envelhecido", "Sola com efeito de terra", "Combina com vestidos longos"]
  },
  {
    id: 9, name: "Kit Boneca Corajosa",
    category: "acessorios", cat: "Acessórios",
    price: 19.90, oldPrice: null,
    tag: "new", tagLabel: "Novo",
    emoji: "🪆",
    desc: "Kit com mini boneca trapézio, pulseira de botão e tiara de flor branca. O pacote completo da coragem.",
    features: ["Mini boneca animada no ombro", "Pulseira com botão de 4 furos", "Tiara com flor branca", "3 acessórios em 1", "Animação de balanço da boneca"]
  },
  {
    id: 10, name: "Conjunto Estrela Azul",
    category: "conjuntos", cat: "Conjuntos",
    price: 44.90, oldPrice: 54.90,
    tag: "sale", tagLabel: "Oferta",
    emoji: "⭐",
    desc: "Conjunto de moletom e calça com estampa de estrelas azuis brilhantes. Conforto do Outro Mundo.",
    features: ["Moletom oversized", "Calça jogger combinando", "Estrelas com efeito glow", "Bolsos com forro dourado", "Ideal para looks casuais IMVU"]
  },
  {
    id: 11, name: "Vestido Rosa Antigo",
    category: "vestidos", cat: "Vestidos",
    price: 36.90, oldPrice: null,
    tag: null, tagLabel: null,
    emoji: "🌹",
    desc: "Vestido rosa vintage com renda e laços. Inspirado nas rosas do jardim que florescem à noite.",
    features: ["Estilo vitoriano", "Renda delicada nas mangas", "Laços de cetim", "Animação de pétalas caindo", "Cor rosa desbotado elegante"]
  },
  {
    id: 12, name: "Máscara Outra Mãe",
    category: "acessorios", cat: "Acessórios",
    price: 22.90, oldPrice: 29.90,
    tag: "hot", tagLabel: "Popular",
    emoji: "🎭",
    desc: "Máscara facial estilo Outra Mãe com sorriso costurado. Para noites de terror fashion no IMVU.",
    features: ["Máscara 3D detalhada", "Sorriso costurado realista", "Ajuste perfeito ao rosto", "Efeito de sombra no rosto", "Inclui animação de expressão"]
  }
];

// === STATE ===
let cart = JSON.parse(localStorage.getItem('cf_cart') || '[]');
let paymentMethod = 'pix';
let pixTimerInterval = null;

// === SAVE CART ===
function saveCart() {
  localStorage.setItem('cf_cart', JSON.stringify(cart));
}

// === RENDER PRODUCTS ===
function renderProducts(container, filter) {
  const grid = document.getElementById(container);
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-secondary);grid-column:1/-1;padding:60px 20px;">Nenhum produto nesta categoria ainda.</p>';
    return;
  }
  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}" onclick="openDetail(${p.id})">
      <div class="product-img">
        <span class="placeholder-art">${p.emoji}</span>
        ${p.tag ? `<span class="product-tag tag-${p.tag}">${p.tagLabel}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc.substring(0, 80)}...</div>
        <div class="product-bottom">
          <div class="product-price">
            R$ ${p.price.toFixed(2).replace('.', ',')}
            ${p.oldPrice ? `<small>R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</small>` : ''}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id}, this)" title="Adicionar ao carrinho">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

// === CART ===
function addToCart(id, btnEl) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCart();
  showToast(`${product.name} adicionado ao carrinho!`);

  if (btnEl) {
    btnEl.classList.add('added');
    btnEl.textContent = '✓';
    setTimeout(() => { btnEl.classList.remove('added'); btnEl.textContent = '+'; }, 1200);
  }

  const countEl = document.getElementById('cartCount');
  if (countEl) {
    countEl.classList.remove('bump');
    void countEl.offsetWidth;
    countEl.classList.add('bump');
  }
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCart();
}

function updateCart() {
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const totalPrice = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (countEl) countEl.textContent = totalItems;
  if (totalEl) totalEl.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;

  const container = document.getElementById('cartItems');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="empty-icon">🕷️</div><p>Seu carrinho está vazio...</p><p style="font-size:0.8rem;margin-top:6px;">Adicione peças incríveis!</p></div>`;
    return;
  }

  container.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-img">${c.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-cat">${c.cat}</div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">R$ ${(c.price * c.qty).toFixed(2).replace('.', ',')}</span>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${c.id}, -1)">−</button>
            <span class="qty-val">${c.qty}</span>
            <button class="qty-btn" onclick="changeQty(${c.id}, 1)">+</button>
            <button class="cart-item-remove" onclick="removeFromCart(${c.id})">🗑</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleCart() {
  document.getElementById('cartOverlay')?.classList.toggle('open');
  document.getElementById('cartSidebar')?.classList.toggle('open');
}

// === DETAIL MODAL ===
function openDetail(id) {
  const p = products.find(pr => pr.id === id);
  const dc = document.getElementById('detailContent');
  if (!dc) return;
  dc.innerHTML = `
    <div class="detail-img">${p.emoji}</div>
    <div class="detail-info">
      <div class="detail-cat">${p.cat}</div>
      <div class="detail-name">${p.name}</div>
      <div class="detail-desc">${p.desc}</div>
      <ul class="detail-features">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="detail-price">
        R$ ${p.price.toFixed(2).replace('.', ',')}
        ${p.oldPrice ? `<small style="font-size:0.9rem;color:var(--text-secondary);text-decoration:line-through;margin-left:8px;">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</small>` : ''}
      </div>
      <button class="detail-add-btn" onclick="addToCart(${p.id}); closeDetail();">Adicionar ao Carrinho</button>
    </div>
  `;
  document.getElementById('detailModal')?.classList.add('open');
}

function closeDetail() {
  document.getElementById('detailModal')?.classList.remove('open');
}

// === CHECKOUT ===
function openCheckout() {
  toggleCart();
  setTimeout(() => {
    renderOrderSummary();
    generateQR();
    startPixTimer();
    renderInstallments();
    document.getElementById('checkoutModal')?.classList.add('open');
  }, 300);
}

function closeCheckout() {
  document.getElementById('checkoutModal')?.classList.remove('open');
  if (pixTimerInterval) clearInterval(pixTimerInterval);
}

function renderOrderSummary() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const el = document.getElementById('orderSummary');
  if (!el) return;
  el.innerHTML = `
    <h4>Resumo do Pedido</h4>
    ${cart.map(c => `
      <div class="order-line">
        <span>${c.emoji} ${c.name} × ${c.qty}</span>
        <span>R$ ${(c.price * c.qty).toFixed(2).replace('.', ',')}</span>
      </div>
    `).join('')}
    <div class="order-line total">
      <span>Total</span>
      <span>R$ ${total.toFixed(2).replace('.', ',')}</span>
    </div>
  `;
}

function switchPayment(method) {
  paymentMethod = method;
  document.getElementById('tabPix')?.classList.toggle('active', method === 'pix');
  document.getElementById('tabCard')?.classList.toggle('active', method === 'card');
  const pix = document.getElementById('pixPayment');
  const card = document.getElementById('cardPayment');
  if (pix) pix.style.display = method === 'pix' ? 'block' : 'none';
  if (card) card.style.display = method === 'card' ? 'block' : 'none';
  const btn = document.getElementById('payBtn');
  if (btn) btn.textContent = method === 'pix' ? 'Confirmar Pagamento via PIX' : 'Confirmar Pagamento';
}

function generateQR() {
  const pattern = document.getElementById('qrPattern');
  if (!pattern) return;
  let html = '';
  for (let i = 0; i < 225; i++) {
    const filled = Math.random() > 0.45;
    html += `<span style="background:${filled ? '#1a1a2e' : 'transparent'}"></span>`;
  }
  pattern.innerHTML = html;
}

function startPixTimer() {
  if (pixTimerInterval) clearInterval(pixTimerInterval);
  let seconds = 900;
  const timerEl = document.getElementById('pixTimer');
  pixTimerInterval = setInterval(() => {
    seconds--;
    if (seconds <= 0) { clearInterval(pixTimerInterval); if (timerEl) timerEl.textContent = 'Expirado'; return; }
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (timerEl) timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }, 1000);
}

function copyPix() {
  const code = document.getElementById('pixCode')?.textContent;
  if (code) navigator.clipboard.writeText(code).then(() => showToast('Código PIX copiado!'));
}

function renderInstallments() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const sel = document.getElementById('cardInstallments');
  if (!sel) return;
  sel.innerHTML = '';
  for (let i = 1; i <= 6; i++) {
    const val = total / i;
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${i}x de R$ ${val.toFixed(2).replace('.', ',')}${i === 1 ? ' à vista' : ' sem juros'}`;
    sel.appendChild(opt);
  }
}

// Card formatting
document.addEventListener('input', e => {
  if (e.target.id === 'cardNumber') {
    let v = e.target.value.replace(/\D/g, '').substring(0, 16);
    e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
  }
  if (e.target.id === 'cardExpiry') {
    let v = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
    e.target.value = v;
  }
});

function processPayment() {
  if (paymentMethod === 'card') {
    const name = document.getElementById('cardName')?.value.trim();
    const num = document.getElementById('cardNumber')?.value.trim();
    const exp = document.getElementById('cardExpiry')?.value.trim();
    const cvv = document.getElementById('cardCvv')?.value.trim();
    if (!name || !num || !exp || !cvv) {
      showToast('Preencha todos os campos do cartão');
      return;
    }
  }

  const btn = document.getElementById('payBtn');
  if (btn) { btn.textContent = 'Processando...'; btn.disabled = true; }

  setTimeout(() => {
    const body = document.getElementById('checkoutBody');
    if (body) {
      body.innerHTML = `
        <div class="success-state">
          <div class="success-icon">✨</div>
          <h3>Pagamento Confirmado!</h3>
          <p>Suas roupas de Coraline foram enviadas para seu inventário IMVU.</p>
          <p style="margin-top:12px;font-size:0.85rem;">Verifique seu e-mail para os códigos de resgate.</p>
          <button class="hero-cta" style="margin-top:24px;" onclick="location.reload()">Continuar Comprando</button>
        </div>
      `;
    }
    cart = [];
    saveCart();
    updateCart();
    if (pixTimerInterval) clearInterval(pixTimerInterval);
  }, 2000);
}

// === TOAST ===
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// === NAV SCROLL ===
window.addEventListener('scroll', () => {
  document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 50);
});

// === CLOSE MODALS ON OVERLAY ===
document.addEventListener('click', e => {
  if (e.target.id === 'checkoutModal') closeCheckout();
  if (e.target.id === 'detailModal') closeDetail();
});

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  updateCart();
});
