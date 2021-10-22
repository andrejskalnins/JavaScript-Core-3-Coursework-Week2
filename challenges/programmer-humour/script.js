function fetchProgrammerJoke() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error("Cannot fetch the data!");
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      let img = document.createElement("img");
      img.src = data.img;
      document.body.appendChild(img);
    })
    .catch((error) => console.log(error));
}
fetchProgrammerJoke();
