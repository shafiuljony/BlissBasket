 //Product collection filter
  document.addEventListener("DOMContentLoaded", function () {
    const showAllButton = document.getElementById("showAll");
    const newButton = document.getElementById("new");
    const bestButton = document.getElementById("best");
    const featuredButton = document.getElementById("featured");
    const products = document.querySelectorAll(".product");
    const buttons = document.querySelectorAll(".filter-button-group button");

    function showProducts(category) {
        products.forEach(product => {
            product.style.display = "none";
        });

        buttons.forEach(button => {
          button.classList.remove("active-filter-btn");
        });

        if (category === "all") {
            products.forEach(product => {
                product.style.display = "block";
            });
        } else {
            const filteredProducts = document.querySelectorAll(`.${category}`);
            filteredProducts.forEach(product => {
                product.style.display = "block";
            });
        }
        event.target.classList.add("active-filter-btn");
    }

    buttons.forEach(button => {
      button.addEventListener("click", () => {
          showProducts(button.id);
      });
    });

    showAllButton.addEventListener("click", () => {
        showProducts("all");
    });

    newButton.addEventListener("click", () => {
        showProducts("new");
    });

    bestButton.addEventListener("click", () => {
        showProducts("best");
    });

    featuredButton.addEventListener("click", () => {
        showProducts("featured");
    });

    //mini cart
    const cartToggle = document.getElementById('cart-toggle');
    const quickCart = document.querySelector('.quick-cart');
    const cartClose = document.getElementById('cart-close');

    cartToggle.addEventListener('click', function () {
        quickCart.classList.toggle('active');
    });
    cartClose.addEventListener('click', function () {
        quickCart.classList.remove('active');
    });


    //Search 
    const searchContainer = document.getElementById('search-container');
    const searchToggle = document.getElementById('search-toggle');
    const searchInput = document.getElementById('searchInput');

    // Add a click event listener to toggle the search bar
    searchToggle.addEventListener('click', function () {
        if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
            // Show the search container and focus on the input
            searchContainer.style.display = 'block';
            searchContainer.style.transition = 'all 0.5s ease';
            searchInput.focus();
        } else {
            // Hide the search container and blur the input
            searchContainer.style.display = 'none';
            searchInput.blur();
        }
    });
});
