const API_KEY = ""; 
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";


const trendingMoviesContainer = document.getElementById("trendingMovies");
const searchResultsContainer = document.getElementById("searchResults");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResultsSection = document.getElementById("searchResultsSection");
const trendingSection = document.getElementById("trendingSection");
const movieModal = document.getElementById("movieModal");
const closeModal = document.getElementById("closeModal");
const modalBody = document.getElementById("modalBody");
const movieAppBtn = document.getElementById("movieAppBtn"); 


document.addEventListener("DOMContentLoaded", () => {
    fetchTrendingMovies();
    searchResultsSection.style.display = "none"; 
});

async function fetchTrendingMovies() {
    try {
        const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
        const data = await response.json();
        displayMovies(data.results, trendingMoviesContainer);
        trendingSection.style.display = "block"; 
    } catch (error) {
        console.error("Error fetching trending movies:", error);
    }
}

async function searchMovies(query) {
    if (!query) return;

    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
        const data = await response.json();

        searchResultsSection.style.display = "block";
        trendingSection.style.display = "none"; 
        displayMovies(data.results, searchResultsContainer);
    } catch (error) {
        console.error("Error searching movies:", error);
    }
}

function displayMovies(movies, container) {
    container.innerHTML = "";

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
            <img src="${movie.poster_path ? IMG_BASE_URL + movie.poster_path : 'https://via.placeholder.com/200x300?text=No+Poster'}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span>${movie.vote_average.toFixed(1)} <i class="fas fa-star" style="color: gold;"></i></span>
            </div>
        `;
        movieCard.addEventListener("click", () => openMovieModal(movie.id));
        container.appendChild(movieCard);
    });
}

async function openMovieModal(movieId) {
    try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`);
        const movie = await response.json();

        modalBody.innerHTML = `
            <img class="modal-poster" src="${movie.poster_path ? IMG_BASE_URL + movie.poster_path : 'https://via.placeholder.com/500x750?text=No+Poster'}" alt="${movie.title}">
            <div class="modal-details">
                <h2>${movie.title} (${movie.release_date.split("-")[0]})</h2>
                <p><strong>Rating:</strong> ${movie.vote_average.toFixed(1)}/10</p>
                <p><strong>Synopsis:</strong> ${movie.overview || "No overview available."}</p>
                <p><strong>Genres:</strong> ${movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Director:</strong> ${movie.credits.crew.find(person => person.job === "Director")?.name || "Unknown"}</p>
            </div>
        `;
        movieModal.style.display = "block";
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
}

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) searchMovies(query);
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) searchMovies(query);
    }
});

movieAppBtn.addEventListener("click", () => {
    searchResultsSection.style.display = "none"; 
    trendingSection.style.display = "block"; 
    
});

closeModal.addEventListener("click", () => {
    movieModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === movieModal) {
        movieModal.style.display = "none";
    }
});