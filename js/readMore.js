// ini fungsi untuk page-9.html yang menampilkan read more
const readMore = () => {
  const readMore = document.getElementById("read-more");
  const textReadMore = document.getElementById("text-read-more");

  readMore.addEventListener("click", () => {
    readMore.style.display = "none";
    textReadMore.style.display = "inline"; // karena display inline adalah display defaul paragraf
  });
};

readMore();
