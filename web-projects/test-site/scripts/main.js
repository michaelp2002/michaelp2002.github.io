const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/liked-songs.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else { 
    myImage.setAttribute("src", "images/liked-songs.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");$
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome back, ${myName}`;
    }
  }
  

  myButton.onclick = () => {
    setUserName();
  };
    