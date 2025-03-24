import games from "./games.js"; // Import the game data

let cart = []; // Initialize an empty cart

// Function to display games
const displayGames = (gameList) => {
    const gameContainer = document.getElementById("games-container");
    gameContainer.innerHTML = ""; // Clear previous content

    gameList.forEach((game) => {
        const gameCard = `
            <div class="game p-4">
                <img src="${game.image}" alt="${game.title}" class="game-image w-full h-40 object-cover rounded">
                <h2 class="text-lg font-bold mt-2">${game.title}</h2>
                <p>Genre: ${game.genre}</p>
                <p>Platform: ${game.platform}</p>
                <p>Price: $${game.price}</p>
                <button class="btn mt-2" data-id="${game.id}">
                    Add to Cart
                </button>
            </div>
        `;
        gameContainer.innerHTML += gameCard;
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", () => addToCart(parseInt(button.dataset.id)));
    });
};

// Function to update cart count
const updateCartCount = () => {
    document.getElementById("cart-count").innerText = cart.length;
};

// Function to update the total cart price
const updateTotalCartPrice = () => {
    const totalPrice = getTotalCartPrice();
    document.getElementById("total-cart-price").innerText = totalPrice;
};

// Function to add a game to the cart
const addToCart = (gameId) => {
    const game = games.find((g) => g.id === gameId);
    if (game) {
        cart.push(game);
        updateCartCount();
        updateTotalCartPrice();
        alert(`${game.title} has been added to your cart!`);
    }
};

// Function to filter games by genre and platform
const filterGames = () => {
    const genre = document.getElementById("genre").value;
    const platform = document.getElementById("platform").value;

    let filteredGames = games;

    if (genre) {
        filteredGames = filteredGames.filter((game) => game.genre === genre);
    }
    if (platform) {
        filteredGames = filteredGames.filter((game) => game.platform === platform);
    }

    displayGames(filteredGames);
};

// ES6 Function 1: Get total price of items in the cart
const getTotalCartPrice = () => {
    const totalPrice = cart.reduce((sum, game) => sum + game.price, 0);
    return totalPrice.toFixed(2); // Return total price as a string with 2 decimal places
};

// ES6 Function 2: Get games sorted by rating
const getGamesSortedByRating = () => {
    return [...games].sort((a, b) => b.rating - a.rating); // Sort games in descending order of rating
};

// ES6 Function 3: Get games by platform
const getGamesByPlatform = (platform) => {
    return games.filter((game) => game.platform === platform);
};

// Function to update the average rating on the webpage
const updateAverageRating = () => {
    const totalRating = games.reduce((sum, game) => sum + game.rating, 0);
    const averageRating = (totalRating / games.length).toFixed(2);
    document.getElementById("average-rating").innerText = averageRating;
};

// Example usage of ES6 functions
console.log("Total Cart Price:", getTotalCartPrice());
console.log("Games Sorted by Rating:", getGamesSortedByRating());
console.log("Games for PC:", getGamesByPlatform("PC"));

// Event listeners for filters
document.getElementById("genre").addEventListener("change", filterGames);
document.getElementById("platform").addEventListener("change", filterGames);

// Event listener for "Sort by Rating" button
document.getElementById("sort-rating").addEventListener("click", () => {
    const sortedGames = getGamesSortedByRating();
    displayGames(sortedGames);
});

// Call function to display games initially
document.addEventListener("DOMContentLoaded", () => {
    displayGames(games);
    updateCartCount();
    updateTotalCartPrice();
    updateAverageRating();
});

// Expose addToCart globally
window.addToCart = addToCart;
