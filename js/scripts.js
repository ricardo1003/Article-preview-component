const shareButton = document.querySelectorAll(".shareButton")
const shareBox = document.getElementById("share-activated")
shareButton[0].addEventListener("click", () =>{
    shareButton[0].classList.toggle("active")
    shareBox.classList.toggle("unactive")
})