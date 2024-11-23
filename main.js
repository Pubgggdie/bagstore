// Cart Functionality

const products = [
    { 
        id: 1, 
        name: "Vintage Leather Backpack", 
        price: 129.99, 
        image: "images/bag8.jpg",
        description: "Classic vintage-style leather backpack perfect for daily use"
    },
    { 
        id: 2, 
        name: "Premium Messenger Bag", 
        price: 159.99, 
        image: "images/bag1.jpg",
        description: "Professional messenger bag for business and casual use"
    },
    { 
        id: 3, 
        name: "Luxury Tote Bag", 
        price: 189.99, 
        image: "images/bag2.jpg",
        description: "Spacious tote bag with premium leather finish"
    },
    { 
        id: 4, 
        name: "Travel Duffel Bag", 
        price: 199.99, 
        image: "images/bag3.webp",
        description: "Perfect companion for weekend getaways"
    },
    { 
        id: 5, 
        name: "Mini Crossbody Bag", 
        price: 89.99, 
        image: "images/bag7.jpg",
        description: "Compact and stylish crossbody bag for essentials"
    },
    { 
        id: 6, 
        name: "Business Briefcase", 
        price: 249.99, 
        image: "images/bag6.webp",
        description: "Executive leather briefcase for professionals"
    }
];

let cart = [];

// Cart toggle functionality
document.getElementById('cartBtn').addEventListener('click', function() {
    const navCart = document.querySelector('.nav-cart');
    navCart.classList.toggle('open');
});

function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showPopup('Item quantity updated in cart!');
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
        showPopup('Item added to cart!');
    }
    updateCart();
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
    showPopup('Item removed from cart!');
}

function updateQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(name);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const cartContainer = document.querySelector('.nav-cart');
    const cartCount = document.getElementById('cartCount');
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    let cartHTML = `
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Shopping Cart</h2>
            <button onclick="document.querySelector('.nav-cart').classList.remove('open')" class="text-2xl">&times;</button>
        </div>
    `;
    
    if (cart.length === 0) {
        cartHTML += ' <p class="flex justify-center items-center flex-col w-full h-full  text-gray-500">   <img src="cute.jpg" alt="empty cart" class="h-[5vh]">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item h-10">
                    <img src="${item.image}" alt="${item.name}" class="">
                    <div class="flex-grow">
                        <h3 class="font-semibold">${item.name}</h3>
                        <p>$${item.price}</p>
                        <div class="flex items-center gap-2 mt-2 justify-between">
                            <button onclick="updateQuantity('${item.name}', -1)" class="px-2 py-1 bg-gray-200 rounded">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity('${item.name}', 1)" class="px-2 py-1 bg-gray-200 rounded">+</button>
                            <button onclick="removeFromCart('${item.name}')" class="ml-2 text-red-500">Remove</button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        // Add total and checkout button
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartHTML += `
            <div class="mt-4 border-t pt-4">
                <div class="flex justify-between mb-4">
                    <span class="font-bold">Total:</span>
                    <span class="font-bold">$${total.toFixed(2)}</span>
                </div>
                <button id="checkoutBtn" onclick="checkout()">Proceed to Checkout</button>
            </div>
        `;
    }
    
    cartContainer.innerHTML = cartHTML;
}

function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
    document.body.appendChild(popup);
    
    // Show popup
    popup.style.display = 'block';
    
    // Hide popup after 2 seconds
    setTimeout(() => {
        popup.style.display = 'none';
        popup.remove();
    }, 2000);
}

function checkout() {
if (cart.length === 0) {
        showPopup('Your cart is empty!');
        return;
    }   alert("THANKS FOR YOUR PURCHASE!");
}
// Initialize cart
document.addEventListener('DOMContentLoaded', () => {
    // Add the cart container if it doesn't exist
    if (!document.querySelector('.nav-cart')) {
        const cartContainer = document.createElement('div');
        cartContainer.className = 'nav-cart';
        document.body.appendChild(cartContainer);
    }
    
    updateCart();
});

// Render products
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = products.map(product => `
        <div class="product-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div class="relative h-64 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            </div>
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-3">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold">$${product.price.toFixed(2)}</span>
                    <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')" 
                            class="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Initial render
renderProducts();