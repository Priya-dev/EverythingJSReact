const searchInput = document.getElementById("searchInput");
// const listItems = document.querySelectorAll("#list li");

searchInput.oninput = (e) => {
  const value = e.target.value.toLowerCase();
  const articles = document.querySelectorAll("#list li");

  articles.forEach((article, index) => {
    const words = article.innerText.toLowerCase();
    if (!value) {
      article.style.display = "none";
    }
    if (words.includes(value)) {
      article.style.display = "block";
      if (value) {
        const startIndex = words.indexOf(value);
        const endIndex = startIndex + value.length;
        const highlightedText =
          words.substring(0, startIndex) +
          '<span class="highlight">' +
          words.substring(startIndex, endIndex) +
          "</span>" +
          words.substring(endIndex);
        article.innerHTML = highlightedText;
      } else {
        article.innerHTML = words;
      }
    } else {
      article.style.display = "none";
    }
  });
};
