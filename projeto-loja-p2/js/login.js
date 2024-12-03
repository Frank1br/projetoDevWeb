const validEmail = "amanda@fatec.com";
      const validPassword = "frank";
      const userName = "Amanda"; // User's name

      document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const error = document.getElementById("loginError");

        if (email === validEmail && password === validPassword) {
          localStorage.setItem("userName", userName); // Store the username in localStorage
          window.location.href = "index.html"; // Redirect to home page
        } else {
          error.classList.remove("d-none"); // Show error message
        }
      });