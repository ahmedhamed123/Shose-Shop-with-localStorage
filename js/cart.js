document.addEventListener("DOMContentLoaded", function(){
    let productsContainer = document.getElementById("products-content");


    
     
    
    // -----------
    let productList = JSON.parse(localStorage.getItem("cartList")) || [];

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

        let deleteItem= document.createElement("button");
        deleteItem.textContent = "Delete Item";
        deleteItem.classList.add("buy-now-btn");

        deleteItem.addEventListener("click", function() {
            deleteFromCart(product);

            let cartItems = JSON.parse(localStorage.getItem("cartList")) || [];

            // Find the index of the product in the cart items array
            let index = cartItems.findIndex(item => item.productId === product.productId);
        
            if (index !== -1) {
                // Remove the product from the cart items array
                cartItems.splice(index, 1);
        
                // Update the cart list in local storage with the modified array
                localStorage.setItem("cartList", JSON.stringify(cartItems));
        
                // Optionally, you can update the UI to reflect the changes in the cart
                // For example, you can remove the corresponding product element from the DOM
                // and update the badge count or refresh the cart display
                productsContainer.removeChild(productDiv);
            
            }
        });

        productDiv.appendChild(productImage);
        productDiv.appendChild(titleElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(deleteItem);

        productsContainer.appendChild(productDiv);
    });


    function deleteFromCart(product) {
      
    }



});





function signOut() {

    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    
    window.location = "register.html"; 
}
let signOutBtn = document.getElementById("signup-btn");
signOutBtn.addEventListener("click", signOut);
