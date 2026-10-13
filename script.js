/* =========================================================
   PLACEHOLDER PRODUCT ART (inline SVG)
   Replace with real photos: set `img:'images/serum.jpg'` in the data below.
   ========================================================= */
const P = {
  pink:'#f2c4c6', pinkD:'#e5a9ae', gold:'#c9955a', goldL:'#e3bd8a', cream:'#fbf0e8', rose:'#c4545f',
  amber:'#9a5a2c', amberL:'#c68544'
};
const label = (x,y,t='LUMORA',s=4.2,c='#a76a5e') => `<text x="${x}" y="${y}" font-size="${s}" font-family="Cormorant Garamond,serif" letter-spacing=".8" text-anchor="middle" fill="${c}">${t}</text>`;
const art = {
  serum:`<svg viewBox="0 0 100 100"><rect x="42" y="6" width="16" height="22" rx="8" fill="${P.gold}"/><rect x="43" y="26" width="14" height="10" fill="${P.goldL}"/><rect x="30" y="36" width="40" height="58" rx="7" fill="${P.pink}"/>${label(50,60)}<rect x="38" y="70" width="24" height="14" rx="2" fill="#fff" opacity=".35"/></svg>`,
  jar:`<svg viewBox="0 0 100 100"><ellipse cx="50" cy="90" rx="34" ry="5" fill="#000" opacity=".06"/><rect x="18" y="50" width="64" height="38" rx="9" fill="${P.pink}"/><rect x="16" y="38" width="68" height="16" rx="5" fill="${P.cream}" stroke="${P.pinkD}" stroke-width=".8"/>${label(50,70)}<rect x="32" y="74" width="36" height="8" rx="1" fill="#fff" opacity=".4"/></svg>`,
  cleanser:`<svg viewBox="0 0 100 100"><rect x="38" y="6" width="24" height="14" rx="3" fill="${P.cream}" stroke="${P.pinkD}" stroke-width=".8"/><path d="M34 20h32l3 72H31z" fill="${P.pink}"/>${label(50,52)}<rect x="40" y="62" width="20" height="14" rx="1" fill="#fff" opacity=".45"/></svg>`,
  lipstick:`<svg viewBox="0 0 100 100"><path d="M40 52V28c0-8 5-14 10-14s10 6 10 14v24z" fill="${P.rose}"/><rect x="38" y="52" width="24" height="10" fill="${P.goldL}"/><rect x="36" y="62" width="28" height="30" rx="2" fill="${P.gold}"/><g opacity=".9"><circle cx="70" cy="86" r="6" fill="#f3a6b0"/><circle cx="64" cy="90" r="5" fill="#e98797"/></g></svg>`,
  lotion:`<svg viewBox="0 0 100 100"><rect x="44" y="4" width="22" height="6" rx="2" fill="${P.gold}"/><rect x="36" y="10" width="8" height="4" fill="${P.gold}"/><rect x="40" y="14" width="14" height="10" fill="${P.goldL}"/><rect x="26" y="24" width="34" height="68" rx="6" fill="${P.pink}"/>${label(43,56,'LUMORA',3.6)}<rect x="62" y="48" width="22" height="44" rx="5" fill="${P.pinkD}" opacity=".85"/></svg>`,
  hair:`<svg viewBox="0 0 100 100"><rect x="20" y="30" width="30" height="62" rx="5" fill="${P.amber}"/><rect x="31" y="14" width="8" height="16" fill="#222"/><rect x="26" y="10" width="20" height="6" rx="2" fill="#222"/><rect x="26" y="52" width="18" height="14" fill="#f3e2cc"/><rect x="56" y="48" width="24" height="44" rx="4" fill="${P.amberL}"/><rect x="62" y="40" width="12" height="8" fill="#222"/><rect x="62" y="64" width="12" height="9" fill="#f3e2cc"/></svg>`,
  body:`<svg viewBox="0 0 100 100"><rect x="38" y="6" width="12" height="8" fill="${P.gold}"/><rect x="26" y="14" width="34" height="8" rx="2" fill="${P.goldL}"/><rect x="24" y="22" width="34" height="70" rx="6" fill="${P.pink}"/>${label(41,58,'LUMORA',3.6)}<rect x="60" y="56" width="26" height="36" rx="5" fill="${P.goldL}"/><rect x="58" y="48" width="30" height="10" rx="3" fill="${P.cream}" stroke="${P.pinkD}" stroke-width=".6"/></svg>`,
  perfume:`<svg viewBox="0 0 100 100"><rect x="42" y="8" width="16" height="22" rx="2" fill="${P.gold}"/><rect x="45" y="30" width="10" height="8" fill="${P.goldL}"/><rect x="24" y="38" width="52" height="54" rx="6" fill="#f6d6d6" stroke="${P.pinkD}" stroke-width="1"/><rect x="30" y="44" width="40" height="42" rx="3" fill="#f9e3e0" opacity=".8"/>${label(50,66,'LUMORA',5)}</svg>`,
  gift:`<svg viewBox="0 0 100 100"><rect x="18" y="38" width="64" height="52" rx="3" fill="#f3b8be"/><rect x="14" y="28" width="72" height="14" rx="3" fill="#f7c8cc"/><rect x="45" y="28" width="10" height="62" fill="${P.goldL}"/><path d="M50 28c-8-14-22-8-14 0Zm0 0c8-14 22-8 14 0Z" fill="${P.gold}"/></svg>`,
  makeup:`<svg viewBox="0 0 100 100"><path d="M20 86 L62 40 l8 8 -34 44z" fill="${P.rose}" transform="translate(-4 0)"/><rect x="28" y="38" width="62" height="46" rx="3" fill="#2f2a2b" transform="rotate(-6 59 61)"/><circle cx="44" cy="54" r="9" fill="#e9a08e"/><circle cx="66" cy="50" r="9" fill="#d98a7d"/><circle cx="46" cy="72" r="8" fill="#e6b09f"/><circle cx="68" cy="68" r="8" fill="#c97a74"/><path d="M16 88c2-12 8-18 12-22l6 6c-4 4-8 10-18 16Z" fill="${P.gold}"/></svg>`,
  haircare:null
};
art.skincare = `<svg viewBox="0 0 100 100"><rect x="14" y="30" width="26" height="62" rx="5" fill="${P.pink}"/><rect x="22" y="14" width="10" height="16" fill="${P.gold}"/><rect x="46" y="62" width="40" height="30" rx="7" fill="${P.pinkD}"/><rect x="44" y="52" width="44" height="12" rx="4" fill="${P.cream}"/><circle cx="50" cy="26" r="0" /></svg>`;

const wrap = (key,src) => src ? `<img src="${src}" alt="" style="height:100%;width:100%;object-fit:cover" loading="lazy">` : art[key];

/* =========================================================
   DATA  — edit freely, add `img:'path.jpg'` for real photos
   ========================================================= */
const categories = [
  {name:'Skincare', sub:'Clear • Healthy • Glowing', art:'skincare', img:'images/cat-skincare.jpg'},
  {name:'Makeup', sub:'Express Your Beauty', art:'makeup', img:'images/cat-makeup.jpg'},
  {name:'Hair Care', sub:'Stronger • Healthier • Shinier', art:'hair', img:'images/cat-hair.jpg'},
  {name:'Body Care', sub:'Soft • Smooth • Nourished', art:'body', img:'images/cat-body.jpg'},
  {name:'Fragrances', sub:'Scents That Stay', art:'perfume', img:'images/cat-fragrance.jpg'},
  {name:'Gift Sets', sub:'Perfect for Every Occasion', art:'gift', img:'images/cat-gift.jpg'}
];
const products = [
  {name:'Radiance Face Serum', sub:'Brighten • Hydrate', rating:5, reviews:124, price:24.99, old:34.99, art:'serum', img:'images/prod-serum.jpg'},
  {name:'Hydrating Moisturizer', sub:'Deep Moisture', rating:5, reviews:98, price:18.99, old:26.99, art:'jar', img:'images/prod-moisturizer.jpg'},
  {name:'Gentle Cleanser', sub:'Daily Face Wash', rating:5, reviews:76, price:14.99, old:19.99, art:'cleanser', img:'images/prod-cleanser.jpg'},
  {name:'Matte Lipstick', sub:'Long Lasting Color', rating:5, reviews:112, price:16.99, old:22.99, art:'lipstick', img:'images/prod-lipstick.jpg'},
  {name:'Velvet Body Lotion', sub:'Nourish & Soften', rating:5, reviews:67, price:19.99, old:27.99, art:'lotion', img:'images/prod-lotion.jpg'}
];

/* =========================================================
   RENDER
   ========================================================= */
const arrowSvg = '<svg viewBox="0 0 24 24"><path d="M4 12h16M14 6l6 6-6 6"/></svg>';
document.getElementById('catGrid').innerHTML = categories.map(c => `
  <a href="#" class="cat">
    <div class="img">${wrap(c.art,c.img)}</div>
    <h3>${c.name}</h3><small>${c.sub}</small>
    <span class="go">${arrowSvg}</span>
  </a>`).join('');

const star = '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 7 7 .6-5.300 4.800 1.600 7.100L12 17.800 5.700 21.500l1.600-7.100L2 9.600 9 9z"/></svg>';
document.getElementById('prodGrid').innerHTML = products.map((p,i) => `
  <article class="card">
    <button class="heart" aria-label="Add ${p.name} to wishlist"><svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.4 3.3 5 6.8 5c2 0 3.8 1.1 5.2 3C13.4 6.1 15.2 5 17.2 5c3.5 0 5.6 3.4 4.3 6.8C19.5 16.4 12 21 12 21Z"/></svg></button>
    <div class="img">${wrap(p.art,p.img)}</div>
    <div class="info">
      <h3>${p.name}</h3>
      <div class="sub">${p.sub}</div>
      <div class="stars">${star.repeat(p.rating)}<span class="count">(${p.reviews})</span></div>
      <div class="price">$${p.price.toFixed(2)}<s>$${p.old.toFixed(2)}</s></div>
      <button class="add" data-index="${i}" data-name="${p.name}">
        <svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2"/></svg>Add to Cart
      </button>
    </div>
  </article>`).join('');


/* =========================================================
   HERO SLIDER
   ========================================================= */
(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const dotsEl = document.getElementById('dots');
  let i = 1, timer;
  slides.forEach((_,n) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label',`Go to slide ${n+1}`);
    b.addEventListener('click',()=>{go(n);restart();});
    dotsEl.appendChild(b);
  });
  const dots = [...dotsEl.children];
  function go(n){
    i = (n + slides.length) % slides.length;
    slides.forEach((s,k)=>s.classList.toggle('active',k===i));
    dots.forEach((d,k)=>d.classList.toggle('active',k===i));
  }
  function restart(){
    clearInterval(timer);
    if(!matchMedia('(prefers-reduced-motion:reduce)').matches) timer = setInterval(()=>go(i+1),6000);
  }
  document.querySelector('.arrow.prev').onclick = ()=>{go(i-1);restart();};
  document.querySelector('.arrow.next').onclick = ()=>{go(i+1);restart();};
  go(i); restart();
})();

/* =========================================================
   CART / WISHLIST / TOAST
   ========================================================= */
const toast = document.getElementById('toast');
let toastT;
function showToast(msg){
  toast.textContent = msg; toast.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(()=>toast.classList.remove('show'),2200);
}
let wish = 0;

/* ---------- CART ---------- */
const FREE_SHIP = 50;
let cart = {};                       // { productIndex: quantity }
try { cart = JSON.parse(localStorage.getItem('lumora-cart')) || {}; } catch(e){ cart = {}; }
const byId = id => document.getElementById(id);
const money = n => '$' + n.toFixed(2);
const drawer = byId('cartDrawer'), cartOv = byId('cartOverlay');

function saveCart(){ try{ localStorage.setItem('lumora-cart', JSON.stringify(cart)); }catch(e){} }
function openCart(){ drawer.classList.add('open'); cartOv.classList.add('show'); drawer.setAttribute('aria-hidden','false'); }
function closeCart(){ drawer.classList.remove('open'); cartOv.classList.remove('show'); drawer.setAttribute('aria-hidden','true'); }

function renderCart(){
  const ids = Object.keys(cart).filter(k => cart[k] > 0 && products[k]);
  const count = ids.reduce((n,k)=>n+cart[k],0);
  const sub = ids.reduce((n,k)=>n+cart[k]*products[k].price,0);
  byId('cartCount').textContent = count;
  byId('cdCount').textContent = count ? `(${count} ${count===1?'item':'items'})` : '';
  drawer.dataset.empty = ids.length ? 'false' : 'true';
  byId('cdSub').textContent = money(sub);

  const left = FREE_SHIP - sub;
  byId('cdShip').innerHTML = !ids.length ? 'Free shipping on orders over $' + FREE_SHIP
    : left > 0 ? `Add <b>${money(left)}</b> more for free shipping<div class="cd-bar"><i style="width:${Math.min(100,sub/FREE_SHIP*100)}%"></i></div>`
    : `You've unlocked <b>free shipping</b> 🎉<div class="cd-bar"><i style="width:100%"></i></div>`;
  byId('cdShipCost').textContent = ids.length && left <= 0 ? 'Free' : 'Calculated at checkout';

  byId('cdBody').innerHTML = ids.length ? ids.map(k => {
    const p = products[k];
    return `<div class="cd-item">
      <img src="${p.img}" alt="${p.name}">
      <div>
        <h3>${p.name}</h3><small>${p.sub}</small>
        <div class="qty"><button data-act="dec" data-id="${k}" aria-label="Decrease quantity">−</button><span>${cart[k]}</span><button data-act="inc" data-id="${k}" aria-label="Increase quantity">+</button></div>
      </div>
      <div><div class="cd-price">${money(p.price*cart[k])}</div><button class="cd-remove" data-act="rm" data-id="${k}">Remove</button></div>
    </div>`;
  }).join('') : `<div class="cd-empty">
      <svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2"/></svg>
      Your cart is empty.<br>Find something that makes you glow.
      <button class="btn" onclick="closeCart();location.hash='#shop'">Start shopping</button></div>`;
  saveCart();
}

document.querySelectorAll('.add').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const k = btn.dataset.index;
    cart[k] = (cart[k]||0) + 1;
    renderCart();
    showToast(`${btn.dataset.name} added to cart`);
    const html = btn.innerHTML; btn.classList.add('done'); btn.textContent = '✓ Added';
    setTimeout(()=>{btn.classList.remove('done'); btn.innerHTML = html;},1200);
  });
});
byId('cdBody').addEventListener('click',e=>{
  const b = e.target.closest('[data-act]'); if(!b) return;
  const k = b.dataset.id;
  if(b.dataset.act==='inc') cart[k]++;
  if(b.dataset.act==='dec') cart[k] = Math.max(0,cart[k]-1);
  if(b.dataset.act==='rm' || cart[k]===0) delete cart[k];
  renderCart();
});
byId('cartBtn').addEventListener('click',openCart);
byId('cdClose').addEventListener('click',closeCart);
cartOv.addEventListener('click',closeCart);
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeCart(); });
byId('cdClear').addEventListener('click',()=>{ cart = {}; renderCart(); });
byId('cdCheckout').addEventListener('click',()=>showToast('Checkout is a demo – connect your payment provider here'));
renderCart();

document.querySelectorAll('.heart').forEach(h=>{
  h.addEventListener('click',()=>{
    h.classList.toggle('on');
    wish += h.classList.contains('on') ? 1 : -1;
    document.getElementById('wishCount').textContent = wish;
  });
});

/* =========================================================
   NEWSLETTER
   ========================================================= */
document.getElementById('nlForm').addEventListener('submit',e=>{
  e.preventDefault();
  const v = document.getElementById('nlEmail').value.trim();
  const msg = document.getElementById('nlMsg');
  if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){
    msg.style.color = '#8fd3a8'; msg.textContent = 'Thanks! You\'re subscribed.';
    e.target.reset();
  } else {
    msg.style.color = '#f1a3ad'; msg.textContent = 'Please enter a valid email address.';
  }
});

/* =========================================================
   HEADER SHADOW + MOBILE MENU
   ========================================================= */
const header = document.getElementById('header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>10),{passive:true});
const nav = document.getElementById('nav'), overlay = document.getElementById('overlay');
const toggleMenu = open => { nav.classList.toggle('open',open); overlay.classList.toggle('show',open); };
document.getElementById('menuBtn').onclick = ()=>toggleMenu(true);
overlay.onclick = ()=>toggleMenu(false);
document.querySelectorAll('.nav>li').forEach(li=>{
  if(li.querySelector('.dropdown')){
    li.querySelector('a').addEventListener('click',e=>{
      if(innerWidth<=820){e.preventDefault();li.classList.toggle('open-sub');}
    });
  }
});
