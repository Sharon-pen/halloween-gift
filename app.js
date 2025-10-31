document.getElementById("confirm-btn").addEventListener("click", function() {
  document.getElementById("start-backdrop").style.display = "none";
  const popup = document.getElementById("popup-layer");
  const bgMusic = document.getElementById("bgMusic");

  bgMusic.play();
  popup.innerHTML = `
    <div class="gift-popup">
      <h1>🎉 惊喜开启！</h1>
      <p>张欣怡，这是你的专属礼物 💝</p>
      <img src="https://i.imgur.com/z8h1QwZ.png" alt="gift" style="width:200px;margin-top:10px;">
    </div>
  `;
});
