document.addEventListener("DOMContentLoaded", function(){
    let productsContainer = document.getElementById("products-content");


    
     
    
    // -----------
    let productList = JSON.parse(localStorage.getItem("productList")) || [];

    let products = [
        {
            id:1,
            title: "Shoe Sneakers Sportswear Adidas Footwear",
            price: "700",
            imageUrl : "images/pngwing.png"
        },
        {
            id:2,
            title: "Sneakers Basketball shoe Sportswear, nike shoe",
            price: "1000",
            imageUrl : "images/pngwing1.png"
        },
        {
            id:3,
            title: "Air Jordan Shoe Nike Toe Clothing",
            price: "900",
            imageUrl : "images/pngwing2.png"
        },
        {
            id:4,
            title: "Shoe Nike Free Air Force",
            price: "500",
            imageUrl : "images/pngwing3.png"
        },
        {
            id:5,
            title: "unpaired black running shoe",
            price: "800",
            imageUrl : "images/pngwing4.png"
        },
        {
            id:6,
            title: "white-and-black adidas Superstar shoes",
            price: "950",
            imageUrl : "images/pngwing5.png"
        },
    ]

    

    products.forEach(product => {
        

        //------------
        let productDiv = document.createElement("div")
        productDiv.classList.add("product-item")

        const productImage = document.createElement("img")
        productImage.src = product.imageUrl
        productImage.alt = `img(${product.title})`

        let titleElement = document.createElement("h3")
        titleElement.textContent = product.title

        let priceElement = document.createElement("p")
        priceElement.textContent = "Price: $" + product.price

        let buyBtn = document.createElement("button")
        buyBtn.textContent = "Add To Cart"
        buyBtn.classList.add("buy-now-btn")

        buyBtn.addEventListener("click", function() {
            addToCart(product);

            
            let badge = document.querySelector(".badge");
            badge.style.display = "block";
            let currentCount = parseInt(badge.textContent) || 0;
            badge.textContent = currentCount + 1;
        });

        productDiv.appendChild(productImage)
        productDiv.appendChild(titleElement)
        productDiv.appendChild(priceElement)
        productDiv.appendChild(buyBtn)

        productsContainer.appendChild(productDiv)

        
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
