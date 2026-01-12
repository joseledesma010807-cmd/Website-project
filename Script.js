
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function searchSite() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    if (!query) {
        alert("Please enter a meal name to search.");
        return;
    }

    if (query.includes("sisig") || query.includes("chicken") || query.includes("pork") || query.includes("meal") || query.includes("food")) {
        window.location.href = "products.html";
    } else if (query.includes("contact") || query.includes("location") || query.includes("feedback") || query.includes("socials")){
        window.location.href = "contact.html";
    } else if (query.includes("about")) {
        window.location.href = "about.html";
    } else {
        alert("We couldn't find exactly that, but check our Menu page!");
        window.location.href = "products.html";
    }
}

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert("Thanks " + name + "! We received your message. We'll get back to you shortly.");
}