/*Let's make a randomized dog photo gallery!

Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

- Create an `index.html` file that will display your random image
- Add 2 `<button>` and 1 `<ul>` element, either in the HTML or through JavaScript
- When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
- After receiving the data, append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
- Incorporate error handling */

// fetch api data function

function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let ul = document.querySelector("ul");
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.classList = "img";
      img.src = data.message;
      li.appendChild(img);
      ul.appendChild(li);
    })
    .catch(function () {
      console.error("There was an error when loading the page");
    });
}

// add event listener

let button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
  fetchDogImage();
});
