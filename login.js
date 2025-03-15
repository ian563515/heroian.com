function loginSuccess(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
    window.location.href = "index.html"; // 登入成功後回到首頁
}

// Google 登入成功後執行
function onGoogleLoginSuccess(googleUser) {
    let profile = googleUser.getBasicProfile();
    let userData = {
        name: profile.getName(),
        email: profile.getEmail(),
    };
    loginSuccess(userData);
}

// Discord 登入成功後執行
function onDiscordLoginSuccess(userData) {
    loginSuccess(userData);
}
