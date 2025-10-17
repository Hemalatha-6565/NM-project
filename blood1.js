const captchaText = document.getElementById("captcha-text");
const refreshBtn = document.getElementById("refresh-btn");
const generatedCaptcha = document.getElementById("generatedCaptcha");

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  captchaText.textContent = captcha;
  generatedCaptcha.value = captcha;
}

refreshBtn.addEventListener("click", generateCaptcha);
window.onload = generateCaptcha;
