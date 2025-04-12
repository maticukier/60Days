// Lista de proyectos (ajusta según tus días completados)
const projects = [
    {
        day: 1,
        title: "Presentation Page",
        description: "A simple page displaying real-time updates.",
        icon: "fas fa-home",
        path: "Day1/index.html"
    },
    {
        day: 2,
        title: "Basic Calculator",
        description: "Perform basic arithmetic operations.",
        icon: "fas fa-calculator",
        path: "Day2/index.html"
    },
    {
        day: 3,
        title: "Random Color Generator",
        description: "Generate and display random colors.",
        icon: "fas fa-palette",
        path: "Day3/index.html"
    },
    {
        day: 4,
        title: "Currency Converter (Static)",
        description: "Convert currency based on predefined exchange rates.",
        icon: "fas fa-money-bill-wave",
        path: "Day4/index.html"
    },
    {
        day: 5,
        title: "To-Do List (LocalStorage)",
        description: "Task management with local storage persistence.",
        icon: "fas fa-tasks",
        path: "Day5/index.html"
    },
    {
        day: 6,
        title: "Form Validation",
        description: "Validate input fields using JavaScript.",
        icon: "fas fa-check-circle",
        path: "Day6/index.html"
    },
    {
        day: 7,
        title: "Rock, Paper, Scissors",
        description: "A simple interactive game.",
        icon: "fas fa-hand-rock",
        path: "Day7/index.html"
    },
    {
        day: 8,
        title: "Image Gallery with Filter",
        description: "Display images with filter options.",
        icon: "fas fa-images",
        path: "Day8/index.html"
    },
    {
        day: 9,
        title: "Carousel Slider",
        description: "A sliding image carousel.",
        icon: "fas fa-sliders-h",
        path: "Day9/index.html"
    },
    {
        day: 10,
        title: "Password Generator",
        description: "Generate secure random passwords.",
        icon: "fas fa-key",
        path: "Day10/index.html"
    },
    {
        day: 11,
        title: "Progress Bar Animation",
        description: "Dynamic progress bar updates.",
        icon: "fas fa-chart-line",
        path: "Day11/index.html"
    },
    {
        day: 12,
        title: "Landing Page Clone",
        description: "Replicate a known landing page.",
        icon: "fas fa-window-maximize",
        path: "Day12/index.html"
    },
    {
        day: 13,
        title: "Weather App (API)",
        description: "Fetch and display weather data.",
        icon: "fas fa-cloud-sun",
        path: "Day13/index.html"
    },
    {
        day: 14,
        title: "Movie App (API)",
        description: "Fetch and display movie details from an API.",
        icon: "fas fa-film",
        path: "Day14/index.html"
    },
    {
        day: 15,
        title: "Pokedex (API)",
        description: "Fetch Pokémon details from an API.",
        icon: "fas fa-dragon",
        path: "Day15/index.html"
    }
];
// Generar tarjetas de días
const daysContainer = document.getElementById('daysContainer');

projects.forEach(project => {
    const dayCard = document.createElement('div');
    dayCard.classList.add('day-card');
    dayCard.innerHTML = `
        <div class="icon"><i class="${project.icon}"></i></div>
        <a href="${project.path}">Día ${project.day}: ${project.title}</a>
        <p>${project.description}</p>
        
    `;
    daysContainer.appendChild(dayCard);
});