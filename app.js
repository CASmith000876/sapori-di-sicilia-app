/* Sapori di Sicilia · progressive web app */
(function () {
  'use strict';

  const SHOP = {
    name: 'Sapori di Sicilia',
    address: 'Grote Gracht 13',
    postcode: '6211 SR Maastricht',
    phone: '+31 6 81 97 33 66',
    phoneRaw: '31681973366',
    instagram: 'sapori.di.sicilia.026',
    since: '2026',
    staffCode: '1313'
  };

  const THEMES = [
    { id: 'noir', name: 'Etna Noir', sw1: '#15140f', sw2: '#c9a35a' },
    { id: 'bianco', name: 'Bianco Mediterraneo', sw1: '#fbf8f2', sw2: '#c8411f' },
    { id: 'terra', name: 'Terracotta and Olive', sw1: '#ebdccb', sw2: '#b5563a' },
    { id: 'chalk', name: 'Chalkboard Modern', sw1: '#2e3a35', sw2: '#f2d16b' },
    { id: 'ceramica', name: 'Ceramica Siciliana', sw1: '#f6f1e4', sw2: '#1f4e8c' },
    { id: 'editoriale', name: 'Editoriale', sw1: '#f4f2ee', sw2: '#111111' }
  ];

  const CATS = [['pizza', 'Pizza'], ['sandwiches', 'Sandwiches'], ['snacks', 'Snacks'], ['sweets', 'Sweets'], ['drinks', 'Drinks']];
  const STAMP_ITEMS = ['espresso', 'coffee', 'cappuccino', 'latte', 'icedlatte', 'cornetto', 'cannoli'];

  const ITEMS = [
    { id: 'slice', cat: 'pizza', name: 'Daily pizza slice', desc: 'Ask what is in the oven today', price: 2.5, img: 'img/diavola.jpg' },
    { id: 'margherita', cat: 'pizza', name: 'Margherita', desc: 'Tomato, mozzarella, basil', price: 8.95, img: 'img/margherita.jpg' },
    { id: 'marinara', cat: 'pizza', name: 'Marinara', desc: 'Tomato, garlic, oregano', price: 8.95 },
    { id: 'funghi', cat: 'pizza', name: 'Funghi', desc: 'Mushrooms, mozzarella, thyme', price: 10.95 },
    { id: 'diavola', cat: 'pizza', name: 'Diavola', desc: 'Spicy salami, fior di latte', price: 11.75, img: 'img/diavola.jpg' },
    { id: 'prosciuttopizza', cat: 'pizza', name: 'Prosciutto', desc: 'Parma ham, rocket, parmesan', price: 14.5 },
    { id: 'carpaccio', cat: 'sandwiches', name: 'Carpaccio', desc: 'Beef carpaccio, rocket, parmesan', price: 9.95 },
    { id: 'beef', cat: 'sandwiches', name: 'Italian beef', desc: 'Slow-cooked beef, provolone', price: 13.95 },
    { id: 'caprese', cat: 'sandwiches', name: 'Caprese', desc: 'Mozzarella, tomato, basil', price: 8.95, img: 'img/caprese.jpg' },
    { id: 'prosciutto', cat: 'sandwiches', name: 'Prosciutto', desc: 'Parma ham, mozzarella', price: 11.95 },
    { id: 'chicken', cat: 'sandwiches', name: 'Parmesan chicken', desc: 'Breaded chicken, parmesan, tomato', price: 9.95 },
    { id: 'meatballsand', cat: 'sandwiches', name: 'Italian meatball', desc: 'Meatballs, tomato sauce', price: 9.95 },
    { id: 'arancini', cat: 'snacks', name: 'Arancini', desc: '5 pieces, ragù and peas', price: 4.5, img: 'img/arancini.jpg' },
    { id: 'meatballs', cat: 'snacks', name: 'Italian meatballs', desc: 'In tomato sauce', price: 3.95 },
    { id: 'cannoli', cat: 'sweets', name: 'Cannolo', desc: '1 for € 2 · 3 for € 5,50 · 5 for € 9', price: 2, img: 'img/cannoli.jpg' },
    { id: 'gelato', cat: 'sweets', name: 'Gelato', desc: 'One scoop', price: 1.5 },
    { id: 'cornetto', cat: 'sweets', name: 'Cornetti', desc: 'Mornings 08:00–12:00, ask for flavours', price: null, img: 'img/cornetto.jpg' },
    { id: 'espresso', cat: 'drinks', name: 'Espresso', desc: 'Single shot', price: 1.6, img: 'img/espresso.jpg' },
    { id: 'coffee', cat: 'drinks', name: 'Coffee', desc: 'Lungo', price: 1.8 },
    { id: 'cappuccino', cat: 'drinks', name: 'Cappuccino', desc: 'Espresso, steamed milk', price: 1.95 },
    { id: 'latte', cat: 'drinks', name: 'Latte macchiato', desc: 'Espresso, hot milk', price: 2.1 },
    { id: 'icedlatte', cat: 'drinks', name: 'Iced latte', desc: 'Cold, with ice', price: 3.95 },
    { id: 'lemonade', cat: 'drinks', name: 'Homemade lemonade', desc: 'Fresh lemons, sugar, ice', price: 3.95 },
    { id: 'smoothie', cat: 'drinks', name: 'Strawberry smoothie', desc: 'Also raspberry-mango 4,95, strawberry-banana 5,25', price: 4.95 },
    { id: 'pellegrino', cat: 'drinks', name: 'San Pellegrino lemon', desc: 'Also orange 2,40, blood orange 2,50', price: 2.4 }
  ];

  const VOLCANO = '<path d="M176 88 C 168 76, 186 66, 178 54 C 171 44, 183 36, 180 26"/><path d="M18 176 C 60 170, 96 150, 128 118 C 142 104, 150 96, 158 92"/><path d="M158 92 C 163 90, 168 96, 172 98 C 178 100, 184 94, 190 92"/><path d="M190 92 C 200 96, 214 110, 236 128 C 262 150, 296 168, 342 176"/>';
  const BRANCH = '<path d="M226 130 C 262 108, 300 84, 350 62"/><path d="M262 108 C 270 114, 274 124, 268 132 C 258 128, 256 118, 262 108 Z"/><path d="M282 96 C 276 84, 282 74, 292 72 C 294 82, 290 92, 282 96 Z"/><path d="M300 84 C 308 90, 312 100, 306 108 C 296 104, 294 94, 300 84 Z"/><path d="M320 72 C 316 60, 322 50, 332 48 C 334 58, 330 68, 320 72 Z"/><circle cx="238" cy="146" r="8"/>';

  /* ---------- state ---------- */
  const load = (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } };

  const state = {
    screen: 'home',
    cat: 'pizza',
    theme: load('sapori.theme', 'noir'),
    cart: load('sapori.cart', {}),
    stamps: load('sapori.stamps', 0),
    pickup: 'asap',
    name: load('sapori.name', ''),
    placed: false
  };

  const fmt = (n) => '€ ' + n.toFixed(2).replace('.', ',');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const item = (id) => ITEMS.find((it) => it.id === id);
  const lines = () => Object.keys(state.cart).map((id) => ({ ...item(id), qty: state.cart[id] })).filter((l) => l.qty > 0);
  const cartCount = () => lines().reduce((s, l) => s + l.qty, 0);
  const total = () => lines().reduce((s, l) => s + l.price * l.qty, 0);
  const stampEarn = () => lines().filter((l) => STAMP_ITEMS.includes(l.id)).reduce((s, l) => s + l.qty, 0);
  const stampLine = () => {
    const left = 10 - state.stamps;
    if (left <= 0) return 'Card complete, free cannolo unlocked';
    return left === 1 ? '1 more coffee for a free cannolo' : left + ' more coffees for a free cannolo';
  };

  /* ---------- pieces ---------- */
  const brand = () => `
    <div class="brand">
      <svg viewBox="0 0 360 220" aria-hidden="true">${VOLCANO}${BRANCH}</svg>
      <div><div class="wordmark">Sapori di Sicilia</div><div class="tricolore"><span></span><span></span><span></span></div></div>
    </div>`;

  const cartBtn = () => `
    <button class="iconbtn" data-go="order" aria-label="Open your order">
      <svg viewBox="0 0 24 24"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
      ${cartCount() ? `<span class="badge">${cartCount()}</span>` : ''}
    </button>`;

  const looks = () => `
    <div class="looks" role="group" aria-label="Choose a look">
      <span class="eyebrow">Look</span>
      ${THEMES.map((t) => `<button class="look ${t.id === state.theme ? 'is-active' : ''}" data-theme-pick="${t.id}" aria-label="${t.name}"><i style="background:${t.sw1};border-color:${t.sw2}"></i></button>`).join('')}
    </div>`;

  const itemCard = (it) => {
    const qty = state.cart[it.id] || 0;
    const control = it.price === null ? '' : qty === 0
      ? `<button class="add" data-add="${it.id}" aria-label="Add ${esc(it.name)}">+</button>`
      : `<span class="qty"><button data-remove="${it.id}" aria-label="Remove one ${esc(it.name)}">−</button><b>${qty}</b><button data-add="${it.id}" aria-label="Add one ${esc(it.name)}">+</button></span>`;
    const thumb = it.img ? `<img class="card__thumb" src="${it.img}" alt="${esc(it.name)}" loading="lazy">` : `<span class="card__initial">${esc(it.name.charAt(0))}</span>`;
    return `<div class="card">${thumb}<div class="card__body"><span class="card__name">${esc(it.name)}</span><span class="card__desc">${esc(it.desc)}</span><span class="card__price">${it.price === null ? 'Ask at the counter' : fmt(it.price)}</span></div>${control}</div>`;
  };

  /* ---------- screens ---------- */
  const screens = {
    home: () => `
      <header class="head">
        <div class="head__row">${brand()}${cartBtn()}</div>
        <div><div class="eyebrow">${esc(SHOP.address)} · Maastricht</div><h1>Buonasera,<br><em>what are we eating?</em></h1></div>
      </header>
      <section class="section">
        ${looks()}
        <button class="card stampcard" data-go="stamps">
          <span class="stampcard__n">${state.stamps}</span>
          <span class="card__body"><span class="card__name">${state.stamps} of 10 stamps</span><span class="card__desc">${stampLine()}</span></span>
          <svg class="chev" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
        </button>
        <button class="hero" data-go="menu" data-cat="pizza">
          <img src="img/diavola.jpg" alt="Pizza diavola"><span class="hero__shade"></span>
          <span class="hero__tag">Today's pizza</span>
          <span class="hero__text"><span class="hero__title">Diavola</span><span class="hero__sub">Slice € 2,50 · Whole € 11,75</span></span>
        </button>
        <div class="row"><h2>House favourites</h2><button class="link" data-go="menu">Full menu</button></div>
        <div class="list">${['arancini', 'cannoli'].map((id) => itemCard(item(id))).join('')}</div>
      </section>`,

    menu: () => `
      <header class="head">
        <div class="row"><h1>Menu</h1><span class="eyebrow">Open today 12:00–20:00</span></div>
        <div class="chips">${CATS.map(([id, label]) => `<button class="chip ${id === state.cat ? 'is-active' : ''}" data-cat="${id}">${label}</button>`).join('')}</div>
      </header>
      <section class="section"><div class="list">${ITEMS.filter((it) => it.cat === state.cat).map(itemCard).join('')}</div></section>`,

    order: () => {
      const ls = lines();
      if (state.placed) {
        return `
          <header class="head"><h1>Your order</h1><span class="eyebrow">Pickup at ${esc(SHOP.address)}</span></header>
          <section class="section"><div class="empty">
            <span class="stampcard__n" style="width:72px;height:72px;border-radius:36px"><svg viewBox="0 0 24 24" style="width:34px;stroke:var(--on-accent);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M5 12l5 5 9-10"/></svg></span>
            <h2 style="font-size:28px">Grazie!</h2>
            <p class="muted" style="margin:0;font-size:14px;line-height:1.5">Your order was sent to the shop on WhatsApp. They will confirm the pickup time there. Show this screen at the counter and we stamp your card too.</p>
            <button class="btn btn--ghost" data-go="home" data-reset="1">Back to home</button>
          </div></section>`;
      }
      if (!ls.length) {
        return `
          <header class="head"><h1>Your order</h1><span class="eyebrow">Pickup at ${esc(SHOP.address)}</span></header>
          <section class="section"><div class="empty">
            <svg viewBox="0 0 24 24"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
            <h2>Nothing here yet</h2><p class="muted" style="margin:0;font-size:14px">Add a few things from the menu.</p>
            <button class="btn" data-go="menu" style="width:auto;padding:0 24px;height:44px">Browse the menu</button>
          </div></section>`;
      }
      const pickups = [['asap', 'As soon as possible'], ['30', 'In 30 minutes'], ['60', 'In 1 hour']];
      return `
        <header class="head"><h1>Your order</h1><span class="eyebrow">Pickup at ${esc(SHOP.address)}</span></header>
        <section class="section">
          <div class="list">${ls.map((l) => `<div class="card"><b style="color:var(--accent);min-width:24px">${l.qty}×</b><span class="card__body"><span class="card__name">${esc(l.name)}</span></span><span>${fmt(l.price * l.qty)}</span><button class="add" data-remove="${l.id}" aria-label="Remove one ${esc(l.name)}" style="border-color:var(--border);color:var(--muted);font-size:18px">−</button></div>`).join('')}</div>
          <label class="field">Your name<input class="input" id="nameInput" type="text" autocomplete="name" placeholder="So we know who is picking up" value="${esc(state.name)}"></label>
          <div><div class="eyebrow" style="margin-bottom:8px">Pickup time</div><div class="chips">${pickups.map(([id, label]) => `<button class="chip ${id === state.pickup ? 'is-active' : ''}" data-pickup="${id}">${label}</button>`).join('')}</div></div>
          <div class="row muted" style="font-size:13px"><span>Stamps you will earn</span><span>${stampEarn()}</span></div>
          <div class="total"><span>Total, pay at pickup</span><b>${fmt(total())}</b></div>
          <button class="btn" data-send="1"><svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.5A9 9 0 1 1 21 12z"/></svg>Send order on WhatsApp</button>
          <a class="btn btn--ghost" href="tel:+${SHOP.phoneRaw}"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>Or call ${SHOP.phone}</a>
        </section>`;
    },

    stamps: () => {
      const done = state.stamps >= 10;
      return `
        <header class="head"><h1>Your stamps</h1><span class="eyebrow">${stampLine()}</span></header>
        <section class="section">
          <div class="card" style="flex-direction:column;align-items:stretch;gap:16px;padding:18px 16px">
            <div class="row"><span class="wordmark">Sapori di Sicilia</span><b style="font-family:var(--display);font-size:24px;color:var(--accent)">${state.stamps}<span class="muted" style="font-size:14px"> / 10</span></b></div>
            <div class="stampgrid">${Array.from({ length: 10 }, (_, i) => i < state.stamps ? `<div class="stamp is-filled"><svg viewBox="0 0 360 220">${VOLCANO}</svg></div>` : `<div class="stamp">${i + 1}</div>`).join('')}</div>
            <div class="bar"><i style="width:${state.stamps * 10}%"></i></div>
          </div>
          ${done ? `<button class="btn" data-redeem="1">Redeem free cannolo</button>` : `<button class="btn btn--ghost" data-staff="1"><svg viewBox="0 0 24 24"><path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/><path d="M8 12h8"/></svg>Staff: add a stamp</button>`}
          <div><h2>How it works</h2><p class="muted" style="margin:6px 0 0;font-size:13px;line-height:1.5">One stamp for every coffee, cornetto or cannolo. Hand your phone to the staff at the counter, they enter their code and the stamp lands on your card. Ten stamps, one free cannolo.</p></div>
        </section>`;
    },

    info: () => `
      <div class="infohero"><img src="img/etna.jpg" alt="Mount Etna"><span class="infohero__shade"></span>
        <div class="infohero__text"><span class="wordmark" style="font-size:34px">Sapori di Sicilia</span><span class="eyebrow" style="color:#f0e9dc">Maastricht · since ${SHOP.since}</span></div></div>
      <section class="section">
        <p class="muted" style="margin:0;font-size:14px;line-height:1.55">Sicilian street food from a small kitchen on the Grote Gracht: arancini, panini, cannoli, pizza by the slice and proper espresso. Fresh quality, with love.</p>
        ${looks()}
        <div class="contact">
          <a href="https://maps.google.com/?q=${encodeURIComponent(SHOP.address + ', ' + SHOP.postcode)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><span class="card__body"><span class="card__name">${esc(SHOP.address)}</span><span class="card__desc">${esc(SHOP.postcode)} · directions</span></span></a>
          <a href="tel:+${SHOP.phoneRaw}"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg><span class="card__body"><span class="card__name">${esc(SHOP.phone)}</span><span class="card__desc">Call to order</span></span></a>
          <a href="https://wa.me/${SHOP.phoneRaw}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.5A9 9 0 1 1 21 12z"/></svg><span class="card__body"><span class="card__name">WhatsApp</span><span class="card__desc">Order or ask a question</span></span></a>
          <a href="https://www.instagram.com/${SHOP.instagram}/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8"/></svg><span class="card__body"><span class="card__name">@${SHOP.instagram}</span><span class="card__desc">Daily specials on Instagram</span></span></a>
        </div>
        <div><h2>Opening hours</h2><div class="hours" style="margin-top:6px">
          <div><span>Tuesday, Thursday – Sunday</span><span class="muted">12:00 – 20:00</span></div>
          <div><span>Monday, Wednesday</span><span class="muted">Closed</span></div>
          <div><span>Cornetti</span><span class="muted">08:00 – 12:00</span></div>
        </div></div>
        <p class="muted" style="margin:0;font-size:11px;line-height:1.5">Photos: Wikimedia Commons contributors, CC0 and CC BY licences.</p>
      </section>`
  };

  /* ---------- render ---------- */
  const app = document.getElementById('app');
  const nav = document.getElementById('nav');
  const badge = document.getElementById('cartBadge');

  function render() {
    document.body.dataset.theme = state.theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = getComputedStyle(document.body).getPropertyValue('--head-bg').trim() || '#15140f';
    if (state.theme === 'terra') nav.dataset.pill = '1'; else delete nav.dataset.pill;
    app.innerHTML = screens[state.screen]();
    nav.querySelectorAll('.nav__btn').forEach((b) => b.classList.toggle('is-active', b.dataset.go === state.screen));
    const n = cartCount();
    badge.hidden = n === 0; badge.textContent = n;
    window.scrollTo(0, 0);
  }

  let toastEl;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('is-on');
    clearTimeout(toastEl.t); toastEl.t = setTimeout(() => toastEl.classList.remove('is-on'), 1400);
  }

  function go(screen, cat) {
    state.screen = screen; state.placed = false;
    if (cat) state.cat = cat;
    render();
  }

  function sendOrder() {
    const nameEl = document.getElementById('nameInput');
    if (nameEl) { state.name = nameEl.value.trim(); save('sapori.name', state.name); }
    const when = { asap: 'as soon as possible', '30': 'in about 30 minutes', '60': 'in about 1 hour' }[state.pickup];
    const text = ['Ciao! I would like to order for pickup ' + when + ':', '']
      .concat(lines().map((l) => l.qty + ' × ' + l.name + ' (' + fmt(l.price * l.qty) + ')'))
      .concat(['', 'Total ' + fmt(total()) + ', I will pay at pickup.', state.name ? 'Name: ' + state.name : ''])
      .join('\n');
    window.open('https://wa.me/' + SHOP.phoneRaw + '?text=' + encodeURIComponent(text), '_blank');
    state.stamps = Math.min(10, state.stamps + stampEarn());
    state.cart = {}; state.placed = true;
    save('sapori.cart', state.cart); save('sapori.stamps', state.stamps);
    render();
  }

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-go],[data-cat],[data-add],[data-remove],[data-theme-pick],[data-pickup],[data-send],[data-staff],[data-redeem]');
    if (!t) return;
    const d = t.dataset;
    if (d.themePick) { state.theme = d.themePick; save('sapori.theme', state.theme); render(); return; }
    if (d.add) { state.cart[d.add] = (state.cart[d.add] || 0) + 1; save('sapori.cart', state.cart); toast(item(d.add).name + ' added'); render(); return; }
    if (d.remove) { state.cart[d.remove] = Math.max(0, (state.cart[d.remove] || 0) - 1); if (!state.cart[d.remove]) delete state.cart[d.remove]; save('sapori.cart', state.cart); render(); return; }
    if (d.pickup) { state.pickup = d.pickup; render(); return; }
    if (d.send) { sendOrder(); return; }
    if (d.staff) {
      const code = window.prompt('Staff code');
      if (code === SHOP.staffCode) { state.stamps = Math.min(10, state.stamps + 1); save('sapori.stamps', state.stamps); toast('Stamp added'); render(); }
      else if (code !== null) toast('Wrong code');
      return;
    }
    if (d.redeem) { if (window.confirm('Hand your phone to the staff. Redeem the free cannolo now?')) { state.stamps = 0; save('sapori.stamps', state.stamps); toast('Enjoy your cannolo'); render(); } return; }
    if (d.go) { go(d.go, d.cat); return; }
    if (d.cat) { state.cat = d.cat; render(); }
  });

  render();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
