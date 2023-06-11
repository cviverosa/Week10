document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("movieTable");
  const addButton = document.getElementById("addButton");
  const movieInput = document.getElementById("movieInput");
  const yearInput = document.getElementById("yearInput");

  let currentRank = 1; // Starting rank for new rows

  addButton.addEventListener("click", function () {
    const movie = movieInput.value;
    const year = yearInput.value;
    //If the string is empty, no input, addbutton will not do anythin
    if (movie.trim() !== "" && year.trim() !== "") {
      const newRow = table.insertRow();

      const rankCell = newRow.insertCell(); //increases the rank value for each cell added into new row
      const titleCell = newRow.insertCell();
      const yearCell = newRow.insertCell();

      rankCell.textContent = currentRank++;
      titleCell.textContent = movie;
      yearCell.textContent = year;

      // Clear input fields
      movieInput.value = "";
      yearInput.value = "";
    }
  });
});
