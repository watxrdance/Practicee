document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#product-images img");
    let currentIndex = 0;
  
    // Показать первую картинку
    images.forEach((img, i) => {
      img.style.display = i === 0 ? "block" : "none";
    });
  
    // Смена по клику на сам контейнер
    document.getElementById("product-images").addEventListener("click", () => {
      images[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = "block";
    });
  });

  function copyEmail(event) {
    event.preventDefault(); // отменяет переход по mailto:
  
    const email = "selfhate.store@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const toast = document.getElementById("toast");
      toast.style.opacity = "1";
      setTimeout(() => {
        toast.style.opacity = "0";
      }, 2000); // 2 секунды показывается
    });
  }

  // Проверка: есть ли что-то в корзине
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Обновить отображение количества товаров в шапке
function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = cart.length;
  });
}

// Добавление товара в корзину
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  const addToCartBtn = document.querySelector(".add-to-cart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const productName = document.querySelector("h2").textContent;
      const price = parseInt(document.querySelector(".price").textContent);
      const size = document.querySelector("#size-select").value;

      cart.push({ name: productName, price, size });
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert("Товар добавлен в корзину!");
    });
  }

  renderCart();
});

// Отображение товаров в корзине
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  if (!cartItemsContainer || !totalPriceEl) return;

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemEl = document.createElement("div");
    itemEl.classList.add("cart-item");
    itemEl.innerHTML = `
      <p><strong>${item.name}</strong> (${item.size}) — ${item.price} ₽</p>
      <button onclick="removeFromCart(${index})" class="btn small">Удалить</button>
    `;
    cartItemsContainer.appendChild(itemEl);
    total += item.price;
  });

  totalPriceEl.textContent = `Итого: ${total} ₽`;
}

// Удаление товара
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// Оформление покупки
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "buy-now") {
    if (cart.length === 0) {
      alert("Ваша корзина пуста!");
    } else {
      alert("Спасибо за заказ! Мы свяжемся с вами в Telegram.");
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      updateCartCount();
    }
  }
});

function addToCart(name, price, size, image) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, size, image }); // теперь сохраняется и фото
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Товар добавлен в корзину!");
}

function addToCart(name, price, size, image) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, size, image }); // сохраняем фото
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Товар добавлен в корзину!");
}



function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  if (!cartItemsContainer || !totalPriceEl) return;

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemEl = document.createElement("div");
    itemEl.classList.add("cart-item");

    itemEl.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.image || 'fallback.jpg'}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <p><strong>${item.name}</strong> (${item.size}) — ${item.price} ₽</p>
        <button onclick="removeFromCart(${index})" class="btn small">Удалить</button>
      </div>
    `;

    cartItemsContainer.appendChild(itemEl);
    total += parseInt(item.price);
  });

  totalPriceEl.textContent = `Итого: ${total} ₽`;
}







  
  
  