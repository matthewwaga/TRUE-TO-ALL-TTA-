/* TRUE TO ALL — Cart logic
   Stored in localStorage under "tta_cart" as an array of:
   { id, name, price, size, qty, art, sku } */

const TTA_CART_KEY = "tta_cart";

function ttaGetCart(){
  try{
    return JSON.parse(localStorage.getItem(TTA_CART_KEY)) || [];
  }catch(e){
    return [];
  }
}

function ttaSaveCart(cart){
  localStorage.setItem(TTA_CART_KEY, JSON.stringify(cart));
  ttaUpdateCartCount();
}

function ttaAddToCart(product, size, qty){
  const cart = ttaGetCart();
  const existing = cart.find(item => item.id === product.id && item.size === size);
  if(existing){
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      size: size,
      qty: qty,
      art: product.art,
      sku: product.sku
    });
  }
  ttaSaveCart(cart);
}

function ttaRemoveFromCart(id, size){
  let cart = ttaGetCart();
  cart = cart.filter(item => !(item.id === id && item.size === size));
  ttaSaveCart(cart);
}

function ttaUpdateQty(id, size, delta){
  const cart = ttaGetCart();
  const item = cart.find(i => i.id === id && i.size === size);
  if(item){
    item.qty += delta;
    if(item.qty <= 0){
      ttaRemoveFromCart(id, size);
      return;
    }
  }
  ttaSaveCart(cart);
}

function ttaCartTotals(){
  const cart = ttaGetCart();
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = cart.length === 0 ? 0 : (subtotal >= 8000 ? 0 : 300);
  const total = subtotal + shipping;
  return { subtotal, shipping, total, count: cart.reduce((n,i)=>n+i.qty,0) };
}

function ttaUpdateCartCount(){
  const el = document.getElementById("cart-count");
  if(el){
    el.textContent = ttaCartTotals().count;
  }
}

function ttaShowToast(message){
  let toast = document.querySelector(".toast");
  if(!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window._ttaToastTimer);
  window._ttaToastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

document.addEventListener("DOMContentLoaded", ttaUpdateCartCount);
