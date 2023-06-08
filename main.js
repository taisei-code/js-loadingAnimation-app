window.onload = function() {
  setTimeout(() => {

    //loaderを消す
    const loader = document.querySelector(".loader");
    loader.classList.add("loaded");
  
    //contentを見せる
    const content = document.querySelector(".content");
    content.style.visibility = "visible";

  }, 1300)
  
}