document.getElementById('startBtn').addEventListener('click', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = "next.html";
  }, 500);
});
