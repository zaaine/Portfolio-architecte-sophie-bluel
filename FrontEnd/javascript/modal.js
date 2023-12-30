// gestion de la boite de dialogue modal


function modal (){
    const openModal = document.querySelector(".open-modal")
    openModal.addEventListener("click", ()=> {
    const modal = document.querySelector(".modal")    
    modal.style.display = "block"

})

const modalClose = document.querySelector(".modalClose")
modalClose.addEventListener("click", () => {
    const modal = document.querySelector(".modal")   
    modal.style.display = "none"
})


}

modal ()