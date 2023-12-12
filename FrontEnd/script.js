
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
  const gallery = document.querySelector(".gallery")
  portfolio.appendChild(gallery)
  

  //   création d'une boucle pour recupérer l'objet travaux et l'afficher dans la galerie

    for (const projets of works){
    // console.log( projets);
        const projet = document.createElement('figure')

        const imageElement = document.createElement("img")
        imageElement.src= projets.imageUrl

        const titleElement = document.createElement("figcaption")
        titleElement.innerText=projets.title

        gallery.appendChild(projet)
        projet.appendChild(imageElement)
        projet.appendChild(titleElement)
  }



}


