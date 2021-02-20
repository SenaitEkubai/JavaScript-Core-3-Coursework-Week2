fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.querySelector("img").src = data.img;
  })
  .catch((error) => {
    console.warn("There was an error while loading the page");
  });
