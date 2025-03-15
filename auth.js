document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("user"));
    let loginLink = document.getElementById("login-link");
    let userInfo = document.getElementById("user-info");
    let userName = document.getElementById("user-name");
    let logoutBtn = document.getElementById("logout-btn");

    function updateUI() {
        if (user) {
            loginLink.style.display = "none";  // 隱藏「登入」按鈕
            userInfo.style.display = "inline-block";  // 顯示用戶資訊
            userName.textContent = `歡迎, ${user.name}`;
        } else {
            loginLink.style.display = "inline-block";  // 顯示「登入」按鈕
            userInfo.style.display = "none";  // 隱藏用戶資訊
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("user");
            user = null;
            updateUI();
            window.location.href = "index.html"; // 登出後重新導向首頁
        });
    }

    updateUI();
});
