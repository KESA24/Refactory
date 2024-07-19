const source = document.querySelector("div.source");
source.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  //text/plain means the incoming string is just plain text,nothing mpre
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
//  Clears the default value in this space
  event.preventDefault();
});
