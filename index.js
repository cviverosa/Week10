document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("movieTable");
  const addButton = document.getElementById("addButton");
  const movieInput = document.getElementById("movieInput");
  const yearInput = document.getElementById("yearInput");

  let currentRank = 1; // Starting rank for new rows

  addButton.addEventListener("click", function () {
    const movie = movieInput.value;
    const year = yearInput.value;

    if (movie.trim() !== "" && year.trim() !== "") {
      const newRow = table.insertRow();

      const rankCell = newRow.insertCell();
      const titleCell = newRow.insertCell();
      const yearCell = newRow.insertCell();

      rankCell.textContent = currentRank++;
      titleCell.textContent = movie;
      yearCell.textContent = year;

      const inputGroup = document.createElement("div");
      inputGroup.className = "input-group";

      // Clear input fields
      movieInput.value = "";
      yearInput.value = "";
    }
  });
});
