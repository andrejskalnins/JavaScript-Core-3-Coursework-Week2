function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error("Cannot fetch the data!");
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      // Write the code to display the greeting text here

      let ul = document.querySelector("ul");
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = data.message;
      li.append(img);
      ul.appendChild(li);
    })
    .catch((error) => console.log(error));
}

let apiCallBtn = document.querySelector("button");
apiCallBtn.addEventListener("click", fetchDogImage);
