const games = [
    {
        id: 1,
        title: "The Legend of Zelda: Breath of the Wild",
        platform: "Nintendo",
        genre: "Adventure",
        price: 59.99,
        rating: 4.9,
        releaseDate: "2017-03-03",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6rN7iJmPfbGmXyMstYPvLHm9ngid6yPt3g&s", // Zelda poster
    },
    {
        id: 2,
        title: "Elden Ring",
        platform: "PC",
        genre: "RPG",
        price: 59.99,
        rating: 4.8,
        releaseDate: "2022-02-25",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg", // Elden Ring poster
    },
    {
        id: 3,
        title: "Call of Duty: Modern Warfare 3",
        platform: "Xbox",
        genre: "Shooter",
        price: 69.99,
        rating: 4.7,
        releaseDate: "2023-11-10",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/42680/header.jpg", // COD poster
    },
    {
        id: 4,
        title: "Grand Theft Auto V",
        platform: "PlayStation",
        genre: "Action-Adventure",
        price: 29.99,
        rating: 4.8,
        releaseDate: "2013-09-17",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg", // GTA V poster
    },
    {
        id: 5,
        title: "FIFA 24",
        platform: "PC",
        genre: "Sports",
        price: 49.99,
        rating: 4.5,
        releaseDate: "2023-09-29",
        image: "https://ansplayer.com/wp-content/uploads/2024/02/fifa-24.jpg", // FIFA 24 poster
    },
    {
        id: 6,
        title: "Minecraft",
        platform: "PC",
        genre: "Sandbox",
        price: 26.95,
        rating: 4.7,
        releaseDate: "2011-11-18",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqoHuYSE2qUrhH_EOGGHprUojLeWj6nNzVA&s", // Minecraft poster
    },
    {
        id: 7,
        title: "Cyberpunk 2077",
        platform: "PC",
        genre: "RPG",
        price: 59.99,
        rating: 4.3,
        releaseDate: "2020-12-10",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg", // Cyberpunk poster
    },
    {
        id: 8,
        title: "Horizon Forbidden West",
        platform: "PlayStation",
        genre: "Action-Adventure",
        price: 69.99,
        rating: 4.6,
        releaseDate: "2022-02-18",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg", // Horizon poster
    },
    {
        id: 9,
        title: "The Witcher 3: Wild Hunt",
        platform: "PC",
        genre: "RPG",
        price: 39.99,
        rating: 4.9,
        releaseDate: "2015-05-19",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg", // Witcher 3 poster
    },
    {
        id: 10,
        title: "Fortnite",
        platform: "PC",
        genre: "Shooter",
        price: 10.00,
        rating: 4.4,
        releaseDate: "2017-07-21",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg", // Fortnite poster
    },
];

// ES6 Function 1: Filter Games by Genre
const filterGamesByGenre = (genre) => {
    return games.filter((game) => game.genre === genre);
};

// ES6 Function 2: Get Average Rating
const getAverageRating = () => {
    const totalRating = games.reduce((sum, game) => sum + game.rating, 0);
    return (totalRating / games.length).toFixed(2); // Return average rating as a string with 2 decimal places
};

// ES6 Function 3: Get Most Expensive Game
const getMostExpensiveGame = () => {
    return games.reduce((mostExpensive, game) => (game.price > mostExpensive.price ? game : mostExpensive));
};

// Example Usage
console.log("Games in Adventure Genre:", filterGamesByGenre("Adventure"));
console.log("Average Rating of All Games:", getAverageRating());
console.log("Most Expensive Game:", getMostExpensiveGame());

export default games;