// Function to store product data in localStorage


function storeProductData(title, description, price, imageUrl) {
    localStorage.setItem("productTitle", title);
    localStorage.setItem("productDescription", description);
    localStorage.setItem("productPrice", price);
    localStorage.setItem("productImage", imageUrl);
}


// Function to load product data from localStorage


function loadProductData() {
    const productTitle = localStorage.getItem("productTitle");
    const productDescription = localStorage.getItem("productDescription");
    const productPrice = localStorage.getItem("productPrice");
    const productImage = localStorage.getItem("productImage");
    if (productTitle && productDescription && productPrice && productImage) {
        document.getElementById("product-title").innerText = productTitle;
        document.getElementById("product-description").innerText = productDescription;
        document.getElementById("product-price").innerText = productPrice;
        document.querySelector(".product-image img").src = productImage;
    }
}

if (document.getElementById("product-title")) {
    // Call the function to load product data
    loadProductData();
}


// Function to show that the order is successful


function buyNow() {
    alert("Your order is successful! Thank you for shopping with us.");
}


// Function to show that the msg has been sent successfully


function sendMessageAlert() {
    alert("Your message has been sent successfully!");
}


// Function to show that the user has successfully signed up


function signIn() {
    alert("You have successfully signed in!");
}


// Function to toggle between Sign-Up and Sign-In forms


function toggleForms() {
    const container = document.getElementById("container");
    if (container.classList.contains("show-sign-in")) {
        container.classList.remove("show-sign-in");
        container.classList.add("show-sign-up");
    } else {
        container.classList.remove("show-sign-up");
        container.classList.add("show-sign-in");
    }
}


// Set the initial state of the container to show the Sign-Up form


document.getElementById("container").classList.add("show-sign-up");
