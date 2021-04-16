const form1 = document.getElementById("fileUp");
const form2 = document.getElementById("byURL");
const form3 = document.getElementById("byManually");
const url = document.getElementById("url");
const ta = document.getElementById("ta");
const textarea = document.getElementById("textarea");
const copyBtn = document.getElementById("copy");
const file = document.getElementsByTagName("input")[0];
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  const reader = new FileReader();
  reader.onload = function () {
    textarea.value = converter(reader.result);
  }
  reader.readAsText(file.files[0]);
});
form2.addEventListener("submit", function (event) {
  event.preventDefault();
  fetch(url.value)
  .then((res) => res.text())
  .then(function (text) {
    textarea.value = converter(text);
  })
  .catch(function (error) {
    throw error;
  });
});
form3.addEventListener("submit", function (event) {
  event.preventDefault();
  textarea.value = converter(ta.value);
});
copyBtn.addEventListener("click", function () {
  textarea.select();
  document.execCommand("copy");
});
function converter(string) {
  do {
    string = string.replace("\n", "");
  } while (string.includes("\n"));
  return string;
}
