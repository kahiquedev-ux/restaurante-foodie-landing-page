var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: "#next",
        prevEl: "#prev",
    },
});

const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const cartList = document.querySelector('.cart-list');
const totalPriceElement = document.querySelector('.total-price');
const cartTotal = document.querySelector('.cart-total');
const cartValue = document.querySelector('.cart-value');
const cartCount = document.querySelector('.cart-count');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const bars = document.querySelector('.fa-bars');

cartIcon.addEventListener('click', () => {
    cartTab.classList.add('cart-tab-active');
});

closeBtn.addEventListener('click', () => {
    cartTab.classList.remove('cart-tab-active');
});

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-active');
    bars.classList.toggle('fa-xmark');
});

let productList = [];
let cartProduct = [];

const normalizePrice = (price) => {
    return parseFloat(
        price.toString()
            .replace("R$", "")
            .replace(",", ".")
            .trim()
    );
};

const updateTotal = () => {
    let total = 0;
    let totalQuantity = 0;

    cartProduct.forEach(item => {
        total += item.price * item.quantity;
        totalQuantity += item.quantity;
    });

    const formatted = `R$ ${total.toFixed(2).replace(".", ",")}`;

    cartValue.textContent = totalQuantity;
    if (totalPriceElement) totalPriceElement.textContent = formatted;
    if (cartTotal) cartTotal.textContent = formatted;

    if (cartCount) {
        cartCount.textContent = totalQuantity;
        cartCount.style.display = totalQuantity > 0 ? "block" : "none";
    }
};

const showCards = () => {
    productList.forEach(product => {
        const orderCard = document.createElement('div');
        orderCard.classList.add('order-card');

        orderCard.innerHTML = `
            <div class="card-image">
                <img src="${product.image}">
            </div>
            <h4>${product.name}</h4>
            <h4 class="price">${product.price}</h4>
            <a href="#" class="btn card-btn">Adicionar ao Carrinho</a>
        `;

        cardList.appendChild(orderCard);

        const cardBtn = orderCard.querySelector('.card-btn');
        cardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addToCart(product);
        });
    });
};

const addToCart = (product) => {
    let existingProduct = cartProduct.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;
        const cartItem = document.querySelector(`#item-${product.id}`);
        const quantityValue = cartItem.querySelector('.quantity-value');
        const itemTotal = cartItem.querySelector('.item-total');

        quantityValue.textContent = existingProduct.quantity;
        itemTotal.textContent = `R$ ${(existingProduct.price * existingProduct.quantity).toFixed(2).replace(".", ",")}`;
    } else {
        let price = normalizePrice(product.price);
        let newProduct = { ...product, price: price, quantity: 1 };
        cartProduct.push(newProduct);

        const cartItem = document.createElement('div');
        cartItem.classList.add('item');
        cartItem.id = `item-${product.id}`;

        cartItem.innerHTML = `
            <div class="item-image">
                <img src="${product.image}">
            </div>
            <div class="detail">
                <h4>${product.name}</h4>
                <h4 class="item-total">R$ ${price.toFixed(2).replace(".", ",")}</h4>
            </div>
            <div class="flex">
                <a href="#" class="quantity-btn minus">
                    <i class="fa-solid fa-minus"></i>
                </a>
                <h4 class="quantity-value">1</h4>
                <a href="#" class="quantity-btn plus">
                    <i class="fa-solid fa-plus"></i>
                </a>
            </div>
        `;

        cartList.appendChild(cartItem);

        const plusBtn = cartItem.querySelector('.plus');
        const minusBtn = cartItem.querySelector('.minus');
        const quantityValue = cartItem.querySelector('.quantity-value');
        const itemTotal = cartItem.querySelector('.item-total');

        plusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            newProduct.quantity++;
            quantityValue.textContent = newProduct.quantity;
            itemTotal.textContent = `R$ ${(newProduct.price * newProduct.quantity).toFixed(2).replace(".", ",")}`;
            updateTotal();
        });

        minusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            newProduct.quantity--;

            if (newProduct.quantity <= 0) {
                cartItem.classList.add('slide-out');

                setTimeout(() => {
                    cartItem.remove();
                    cartProduct = cartProduct.filter(item => item.id != product.id);
                    updateTotal();
                }, 300);
            } else {
                quantityValue.textContent = newProduct.quantity;
                itemTotal.textContent = `R$ ${(newProduct.price * newProduct.quantity).toFixed(2).replace(".", ",")}`;
                updateTotal();
            }
        });
    }

    updateTotal();
};

const initApp = () => {
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            productList = data;
            showCards();
        });
};
 
initApp();
