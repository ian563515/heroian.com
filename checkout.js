document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");

    function updateCart() {
        cartContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let itemDiv = document.createElement("div");
            itemDiv.className = "cart-item";
            itemDiv.innerHTML = `
                <p>${item.name} - $${item.price} x ${item.quantity}</p>
                <button onclick="removeItem(${index})">移除</button>
            `;
            cartContainer.appendChild(itemDiv);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = `$${total}`;
    }

    window.removeItem = function(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    };

    document.getElementById("pay-btn").addEventListener("click", function() {
        alert("付款功能尚未實作！");
    });

    updateCart();
});
