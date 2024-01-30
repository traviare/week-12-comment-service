const findName = document.querySelector("#name");
const findUrl = document.querySelector("#link");
const findComment = document.querySelector("#comment");
const findButton = document.querySelector(".button");
const findAddName = document.querySelector(".add-name");
const findAddImg = document.querySelector(".add-img");
const findAddComment = document.querySelector(".add-comment");

function getName() {
  const a = findName.value.replaceAll(" ", "").toLowerCase();
  const b = a[0].toUpperCase() + a.substring(1);
  return b;
}
function checkSpamOne() {
  let lowerStr = findAddComment.textContent.toLowerCase();
  return lowerStr.includes("viagra");
}

function checkSpamTwo() {
  let lowerStr = findAddComment.textContent.toLowerCase();
  return lowerStr.includes("xxx");
}

function getComment() {
  findAddName.innerHTML = getName();
  findName.value = "";
  findAddImg.src = `${findUrl.value}`;
  findUrl.value = "";
  findAddImg.classList.add("img");
  findAddComment.textContent = findComment.value;
  findComment.value = "";
  if (checkSpamOne()) {
    findAddComment.textContent = findAddComment.textContent.replace(
      /viagra/gi,
      "***"
    );
  } else if (checkSpamTwo()) {
    findAddComment.textContent = findAddComment.textContent.replace(
      /xxx/gi,
      "***"
    );
  } else {
    findAddComment.innerHTML = findComment.value;
  }
}
