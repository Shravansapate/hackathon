// This file contains JavaScript functionality for the index page, including event handling, dynamic content loading, and interactive features.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple event listener for a button click
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = document.getElementById('search-input').value;
            alert('Searching for: ' + searchInput);
            // Here you would typically call a function to load search results
        });
    }

    // Function to dynamically load products (placeholder example)
    function loadProducts() {
        const productsContainer = document.getElementById('products');
        // Simulated product data
        const products = [
            { id: 1, name: 'Product 1', price: '₹999' },
            { id: 2, name: 'Product 2', price: '₹1999' },
            { id: 3, name: 'Product 3', price: '₹2999' }
        ];

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
            productsContainer.appendChild(productElement);
        });
    }

    loadProducts();
});