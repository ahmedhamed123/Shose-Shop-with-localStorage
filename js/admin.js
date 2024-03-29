document.addEventListener("DOMContentLoaded", function() {
    let inputUploadImg = document.getElementById("input-upload-img");
    let uploadProgress = document.getElementById("upload-progress");
    let imgContainer = document.querySelector(".img");
    let productNameInput = document.getElementById("product-name");
    let productPriceInput = document.getElementById("product-price");
    let resetBtn = document.getElementById("reset");
    let saveBtn = document.getElementById("save-data");

    inputUploadImg.addEventListener("change", function(e) {
        let file = e.target.files[0];

        if (file) {
            if (validateFileType(file)) {
                let reader = new FileReader();

                reader.onloadstart = function() {
                    uploadProgress.value = 0;
                };

                reader.onprogress = function(event) {
                    if (event.lengthComputable) {
                        let percentComplete = (event.loaded / event.total) * 100;
                        uploadProgress.value = percentComplete;
                    }
                };

                reader.onload = function(event) {
                    let imgElement = document.createElement("img");
                    imgElement.src = event.target.result;
                    imgElement.alt = "Uploaded Image";
                    imgElement.classList.add("uploaded-image");
                    imgContainer.innerHTML = ""; // Clear previous image
                    imgContainer.appendChild(imgElement);
                };

                reader.onloadend = function() {
                    uploadProgress.value = 100;
                };

                reader.readAsDataURL(file);
            } else {
                alert("Please select a valid image file (JPEG, PNG, JPG).");
                inputUploadImg.value = "";
            }
        }
    });

    //-------------------------reset data-----------------------
    resetBtn.addEventListener("click", function() {
        productNameInput.value = "";
        productPriceInput.value = "";
        imgContainer.innerHTML = "";
        uploadProgress.value = 0;
        inputUploadImg.value = "";
    });


    //------------------------ Save Data in local storage -----------------------------
    saveBtn.addEventListener("click", function() {
        let productName = productNameInput.value.trim();
        let productPrice = productPriceInput.value.trim();
        let imgSrc = imgContainer.querySelector("img") ? imgContainer.querySelector("img").src : "";

        if (productName === "" || productPrice === "") {
            alert("Please enter both product name and price.");
        } else {
            let productList = JSON.parse(localStorage.getItem("productList")) || [];

            let product = {
                name: productName,
                price: productPrice,
                image: imgSrc
            };

            productList.push(product);

            localStorage.setItem("productList", JSON.stringify(productList));

            productNameInput.value = "";
            productPriceInput.value = "";
            imgContainer.innerHTML = "";
            uploadProgress.value = 0;
            inputUploadImg.value = "";

            alert("Product data saved successfully.");
        }
    });
});

    function validateFileType(file) {
        let allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        return allowedTypes.includes(file.type);
    }

