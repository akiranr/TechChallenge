- The front-end for the online store is a SPA built using the latest Angular (CLI version 10.0.4)
- Once initial load, the UI will fire off an API call to fetch Products
- The images for all products are fetched through https://via.placeholder.com/80
- The user can add products to the cart by clicking on "Add to cart" button. The no of items added is shown beside the "Checkout" link
- The checkout page lists the items added and also makes an API call to calculate the shipping cost.
- Items can be removed - upon which the shipping cost will be recalculated
- Order can be placed by clicking on "Place order" button and a reference number is generated from the back-end and displayed in the final page
