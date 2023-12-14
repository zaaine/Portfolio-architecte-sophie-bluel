fetch("http://localhost:5678/api/works")
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((works) => {
    // console.table(works);

    genererGallery(works);
  });

function genererGallery(works) {
  // récupération de l'élément du DOM pour accueillir les travaux
  const portfolio = document.querySelector("#portfolio");
  const gallery = document.querySelector(".gallery");
  portfolio.appendChild(gallery);

  //   création d'une boucle pour recupérer l'objet travaux et l'afficher dans la galerie

  for (const projets of works) {
    // console.log( projets);
    const projet = document.createElement("figure");

    const imageElement = document.createElement("img");
    imageElement.src = projets.imageUrl;

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = projets.title;

    gallery.appendChild(projet);
    projet.appendChild(imageElement);
    projet.appendChild(titleElement);
  }
}

// Gestion des boutons Gallery pour filtrage des projets

// le boutons clické va afficher la class filtred
 const boutonsAtion = document
.querySelectorAll(".containerBtn button");
for (i=0 ; i < boutonsAtion.length ; i++ ){

    boutonsAtion[i].addEventListener("click", (event) => {

        const filtresHS = document.querySelectorAll(".containerBtn button.filtred")
        for (j=0; j<filtresHS.length ; j++){
            
            filtresHS[j].classList.remove("filtred")
        }

        event.target.classList.add( "filtred")


        console.log(event.target);
    })
    
}






// // Les boutons vont appliqués un filtre de la gallery
// const btn1 = document.querySelector(".btnFiltreTous");

//   btn1.addEventListener("click", (event) => {
//     event.target.classList.add("filtred");
//     btn1.classList.remove("filtersColor");
//     console.log(btn1);
//   });

const btn2 = document
  .querySelector(".btnFiltreObjets")
  .addEventListener("click", mapObjet);
const btn3 = document
  .querySelector(".btnFiltreAppartements")
  .addEventListener("click", mapAppartement);
const btn4 = document
  .querySelector(".btnFiltreHotelR")
  .addEventListener("click", mapHotel);

// console.log(boutonsAction)

// btns = {btn1, btn2,btn3,btn4}

// function filtred () {
//     boutonsAction.children.classList.remove("filtersColor");
//     boutonsAction.children.classList.add("filtred");
// }

// filtred()



// const btnFiltreObjets = document.querySelector(".btnFiltreObjets");
// btnFiltreObjets.addEventListener("click", function () {
//   const filtreObjet = objet.filter(function (projets) {
//     return projets.categoryId === 1;
//   });
//   document.querySelector(".gallery").innerHTML = "";
//   genererGallery(filtreObjet);
// });

// const btnFiltreAppartements = document.querySelector(".btnFiltreAppartements");
// btnFiltreAppartements.addEventListener("click", function () {
//   const filtreAppartement = appartement.filter(function (projets) {
//     return projets.categoryId === 2;
//   });
//   document.querySelector(".gallery").innerHTML = "";
//   genererGallery(filtreAppartement);
// });

// const btnFiltreHotelR = document.querySelector(".btnFiltreHotelR");
// btnFiltreHotelR.addEventListener("click", function () {
//   const FiltreHotelR = hotelR.filter(function (projets) {
//     return projets.categoryId === 3;
//   });
//   document.querySelector(".gallery").innerHTML = "";
//   genererGallery(FiltreHotelR);
// });


