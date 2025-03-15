document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("user"));
    let loginLink = document.getElementById("login-link");
    let userInfo = document.getElementById("user-info");
    let userName = document.getElementById("user-name");
    let logoutBtn = document.getElementById("logout-btn");

    function updateUI() {
        if (user) {
            loginLink.style.display = "none";
            userInfo.style.display = "inline-block";
            userName.textContent = `歡迎, ${user.name}`;
        } else {
            loginLink.style.display = "inline-block";
            userInfo.style.display = "none";
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("user");
            user = null;
            updateUI();
            window.location.href = "index.html"; // 登出後回到首頁
        });
    }

    updateUI();
});
