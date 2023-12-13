fetch("http://localhost:5678/api/works")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((works) => {
    console.table(works);

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
const boutonsAction = document.querySelectorAll(".containerBtn button");
console.log(boutonsAction);
boutonsAction.addEventListener("click",  function (){
    for (const button of boutonsAction ){
        button.classlist.add("filtred")
        console.log(button);
    }

});


const btnFiltreObjets = document.querySelector(".btnFiltreObjets");
btnFiltreObjets.addEventListener("click", function (){
    const filtreObjet = objet.filter( function (projets) {
        return projets.category.id === 1
    });
    document.querySelector(".gallery").innerHTML="";
    genererGallery(filtreObjet);
});


const btnFiltreAppartements = document.querySelector(".btnFiltreAppartements")
btnFiltreAppartements.addEventListener("click", function (){
    const filtreAppartement = appartement.filter( function (projets) {
        return projets.category.id === 2
    });
    document.querySelector(".gallery").innerHTML="";
    genererGallery(filtreAppartement);
});


const btnFiltreHotelR = document.querySelector(".btnFiltreHotelR")
btnFiltreHotelR.addEventListener("click", function (){
    const FiltreHotelR = hotelR.filter( function (projets) {
        return projets.category.id === 3
    });
    document.querySelector(".gallery").innerHTML="";
    genererGallery(FiltreHotelR);
});





