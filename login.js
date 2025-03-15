document.addEventListener("DOMContentLoaded", function() {
    function updateUserUI() {
        let user = JSON.parse(localStorage.getItem("user"));
        let loginLink = document.getElementById("login-link");
        let userDisplay = document.getElementById("user-display");

        if (user) {
            loginLink.style.display = "none";
            userDisplay.innerHTML = `歡迎, ${user.name}`;
            userDisplay.style.display = "block";
        } else {
            loginLink.style.display = "block";
            userDisplay.style.display = "none";
        }
    }

    // 模擬登入成功後獲取的用戶資料
    function loginSuccess(userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        updateUserUI();
    }

    document.getElementById("logout-btn").addEventListener("click", function() {
        localStorage.removeItem("user");
        updateUserUI();
    });

    updateUserUI();
});
