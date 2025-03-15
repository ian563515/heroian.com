document.addEventListener("DOMContentLoaded", function () {
    console.log("auth.js 加載完成");

    let user = JSON.parse(localStorage.getItem("user"));
    let loginLink = document.getElementById("login-link");
    let userInfo = document.getElementById("user-info");
    let userName = document.getElementById("user-name");
    let logoutBtn = document.getElementById("logout-btn");

    function updateUI() {
        if (user) {
            console.log("登入用戶:", user);
            loginLink.style.display = "none";  // 隱藏「登入」按鈕
            userInfo.style.display = "inline-block";  // 顯示用戶資訊
            userName.textContent = `歡迎, ${user.name}`;
        } else {
            console.log("未登入");
            loginLink.style.display = "inline-block";  // 顯示「登入」按鈕
            userInfo.style.display = "none";  // 隱藏用戶資訊
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            console.log("登出按鈕被點擊");
            localStorage.removeItem("user");
            user = null;
            updateUI();
            window.location.href = "index.html"; // 登出後重新導向首頁
        });
    } else {
        console.error("❌ 找不到登出按鈕");
    }

    updateUI();
});
