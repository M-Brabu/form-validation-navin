const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let valid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Invalid email";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        valid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    // If all valid
    if (valid) {
        alert("Form submitted successfully!");
    }
});
