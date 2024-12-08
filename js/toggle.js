document.getElementById("donation-btn").addEventListener("click", function () {
  toggleSectionById("home-section");
});

document.getElementById("history-btn").addEventListener("click", function () {
  toggleSectionById("history-section");
});

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "/blog.html";
});

document.getElementById("home-btn").addEventListener("click", function () {
  window.location.href = "/index.html";
});
