var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var overlay = document.querySelector('.overlay');
var btn = document.querySelector('button');

/* Looping through images */
for (let i = 1; i < 6; i++) {

  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/Pic' + i + '.jpg');
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', setImage);
}

function setImage(e) {
  var imgPath = e.target.getAttribute('src');
  displayedImage.setAttribute('src', imgPath);
}


btn.onclick = function(e) {
  if (e.target.getAttribute("class") === "dark") {
    e.target.setAttribute('class', 'light');
    e.target.textContent = "Light it up";
    overlay.style.backgroundColor = "rgba(0,0,0,.75)";
  } else {
    e.target.setAttribute('class', 'dark');
    e.target.textContent = "Darken it";
    overlay.style.backgroundColor = "rgba(0,0,0,.25)";
  }
}
