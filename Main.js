const btn = document.getElementById("btn");
const user = document.getElementById("username");
const pass = document.getElementById("passcode");

btn.addEventListener("click", () => {
  const name = user.value.trim();
  const code = pass.value.trim();
  
  const box = document.querySelector(".box");
  
  if (name === "ojas-rex-assistance" && code === "09122010") {
    box.classList.add("success");
    box.innerHTML = `
      <h2 style="color:#00ff9d;">✅ Welcome back, ${name.split('-')[0].toUpperCase()}!</h2>
      <p>Redirecting...</p>
    `;
    setTimeout(() => window.location.href = "Homepage.html", 2000);
  } else {
    box.classList.add("error");
    box.innerHTML = `
      <h2 style="color:#ff0052;">❌ Wrong credentials!</h2>
      <button onclick="location.reload()">Try Again</button>
    `;
  }
});