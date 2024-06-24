const shareButton = document.querySelectorAll(".shareButton")
const shareBox = document.getElementById("share-activated")
const shareBoxMobile = document.getElementById("shareButton")
const profileElement = document.getElementById("activeMobile")
const mainArticleElement = document.getElementById("mainArticle")

console.log(shareBoxMobile[0])

shareButton[0].addEventListener("click", () =>{
    shareButton[0].classList.toggle("active")
    shareBox.classList.toggle("unactive")
    shareBoxMobile.classList.toggle("shareButtonMobileActive")
    mainArticleElement.classList.toggle("mobileActiveMargin")
    if (profileElement.id === "activeMobile"){
        profileElement.id = "unactiveMobile"
    }else{
        profileElement.id = "activeMobile"
    }
})
