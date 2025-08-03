document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const video = document.querySelector("video");
if (video) {
  video.addEventListener("ended", () => {
    alert("Terima kasih telah menonton video profil saya!");
  });
}