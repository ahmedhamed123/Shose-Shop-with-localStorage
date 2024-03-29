document.addEventListener("DOMContentLoaded", function(){
    let productsContainer = document.getElementById("products-content");


    
     
    
    // -----------
    let productList = JSON.parse(localStorage.getItem("productList")) || [];

    productList.forEach(product => {
        

        //------------
        let productDiv = document.createElement("div");
        productDiv.classList.add("product-item");

        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "img....";

        let titleElement = document.createElement("h3");
        titleElement.textContent = product.name;

        let priceElement = document.createElement("p");
        priceElement.textContent = "Price: $" + product.price;

        let buyBtn = document.createElement("button");
        buyBtn.textContent = "Add To Cart";
        buyBtn.classList.add("buy-now-btn");

        buyBtn.addEventListener("click", function() {
            addToCart(product);

            
            let badge = document.querySelector(".badge");
            badge.style.display = "block";
            let currentCount = parseInt(badge.textContent) || 0;
            badge.textContent = currentCount + 1;
        });

        productDiv.appendChild(productImage);
        productDiv.appendChild(titleElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(buyBtn);

        productsContainer.appendChild(productDiv);
    });


    function addToCart(product) {
        let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
        cartList.push(product); // Add the product to the cart list
        localStorage.setItem("cartList", JSON.stringify(cartList));
        alert("Item added to cart!");
    }



});





function signOut() {

    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    
    window.location = "register.html"; 
}
let signOutBtn = document.getElementById("signup-btn");
signOutBtn.addEventListener("click", signOut);
