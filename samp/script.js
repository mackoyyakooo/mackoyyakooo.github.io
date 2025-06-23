
document.getElementById("lookupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const filePath = `results/${name}-${password}.pdf`;

  fetch(filePath)
    .then(res => {
      if (res.ok) {
        window.open(filePath, "_blank");
        document.getElementById("message").textContent = "";
      } else {
        throw new Error("File not found");
      }
    })
    .catch(() => {
      document.getElementById("message").textContent = "Result not found. Please check your name and password.";
    });
});
