// Obfuscated credentials (Base64 encoding)
const validUsername = atob("dGVzdA==");  // Base64 encoded 'test'
const validPassword = atob("dGVzdA==");  // Base64 encoded 'test'

// Get elements
const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("loginPage");
const linksPage = document.getElementById("linksPage");
const errorMessage = document.getElementById("errorMessage");

// Handle form submission
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check credentials
    if (username === validUsername && password === validPassword) {
        loginPage.style.display = "none";  // Hide the login page
        linksPage.style.display = "block"; // Show the links page
    } else {
        errorMessage.style.display = "block"; // Show error message
    }
});

// Show specific category
function showCategory(category) {
    const categories = document.querySelectorAll('.categoryLinks');
    categories.forEach(cat => cat.style.display = 'none');
    document.getElementById(category).style.display = 'block';
}

// Filter function
function filterLinks() {
    const filter = document.getElementById("filterInput").value.toUpperCase();
    const rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row => {
        const cells = row.getElementsByTagName("td");
        let match = false;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].textContent.toUpperCase().includes(filter)) {
                match = true;
                break;
            }
        }
        if (match) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
