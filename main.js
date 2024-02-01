
        // Add a click event listener to the "Add to Cart" button
        document.querySelector('.add-to-cart').addEventListener('click', function() {
            // Get the product details
            var productId = this.getAttribute('data-product-id');
            var productName = "Iphone 13 pro"; // You can replace this with the actual product name
            var productPrice = 1000; // You can replace this with the actual product price

            // Create a product object
            var product = {
                id: productId,
                name: productName,
                price: productPrice
            };

            // Retrieve the existing cart items from localStorage
            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product is already in the cart
            var existingProductIndex = cartItems.findIndex(item => item.id === productId);

            if (existingProductIndex !== -1) {
                // If the product is already in the cart, update the quantity or take other actions
                // For simplicity, let's just update the quantity in this example
                cartItems[existingProductIndex].quantity += 1;
            } else {
                // If the product is not in the cart, add it
                product.quantity = 1;
                cartItems.push(product);
            }

            // Save the updated cart items to localStorage
            localStorage.setItem('cart', JSON.stringify(cartItems));

            // You can optionally display a message or update the UI to indicate successful addition to the cart
            alert('Product added to cart!');
        });
    
