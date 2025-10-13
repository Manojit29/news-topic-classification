// -----------------------------
// DOM ELEMENTS
// -----------------------------
const form = document.getElementById("predictForm");
const newsText = document.getElementById("newsText");
const resultSection = document.getElementById("result-section");

// Create a dynamic loading spinner
const loader = document.createElement("div");
loader.className = "loader hidden";
loader.innerHTML = `<div class="spinner"></div><p>Predicting...</p>`;
resultSection.parentNode.insertBefore(loader, resultSection);

// -----------------------------
// EVENT HANDLER
// -----------------------------
function handleClick(event) {
    event.preventDefault(); // prevent form reload
    const text = newsText.value.trim();

    // Validation
    if (!text) {
        showResult("❗ Please enter some news text.", "error");
        return;
    }

    // Show loading spinner
    loader.classList.remove("hidden");
    resultSection.innerHTML = "";

    // Send data to Django backend
    fetch("/predict/", {
        method: "POST",
        headers: {
            "X-CSRFToken": getCSRFToken(),
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ news_text: text }),
    })
        .then(async (response) => {
            loader.classList.add("hidden");

            // Safely parse JSON
            const data = await response.json().catch(() => null);

            if (!data) {
                showResult("⚠️ Server error: Invalid JSON response.", "error");
                return;
            }

            if (data.error) {
                showResult(`⚠️ ${data.error}`, "error");
            } else {
                // Build result HTML
                const confText = data.confidence
                    ? `<p class="confidence">Confidence: ${data.confidence}</p>`
                    : "";
                showResult(
                    `<h3 class="result">Predicted Category: <span>${data.prediction}</span></h3>${confText}`,
                    "success"
                );
            }
        })
        .catch((error) => {
            loader.classList.add("hidden");
            showResult(`❌ Error: ${error}`, "error");
        });
}

// -----------------------------
// HELPER FUNCTIONS
// -----------------------------

// Get CSRF token from cookies
function getCSRFToken() {
    const name = "csrftoken=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(";");
    for (let c of cookies) {
        c = c.trim();
        if (c.startsWith(name)) return c.substring(name.length, c.length);
    }
    return "";
}

// Display results dynamically with animation
function showResult(message, type) {
    resultSection.innerHTML = message;
    resultSection.className = "result-section " + type;
    resultSection.classList.add("fade-in");
    setTimeout(() => {
        resultSection.classList.remove("fade-in");
    }, 800);
}

// -----------------------------
// EVENT LISTENER
// -----------------------------
form.addEventListener("submit", handleClick);
