const shareButton = document.getElementById("share-button");
document.getElementById("demo").innerHTML = 

shareButton.addEventListener("click", (event) => {
  if ("share" in navigator) {
    navigator
      .share({
        title: "Sharing: " + document.title,
        url: window.location.href,
      })
      .then(() => {
        console.log("Callback after sharing");
      })
      .catch(console.error);
  } else {
    alert(`Sorry! Your Browser Doesn't Support Sharing this. Please Try Using Chrome, Edge, Safari, or Samsung Internet.`)
  }
});