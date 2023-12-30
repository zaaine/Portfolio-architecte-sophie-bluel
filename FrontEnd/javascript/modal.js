// gestion de la boite de dialogue modal (ouvrir et fermer)

function modal() {
  const openModal = document.querySelector(".open-modal");
  openModal.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  });

  const modalClose = document.querySelector(".modalClose");
  modalClose.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  });

  // rajouter un code pour fermer la modal lorsqu'on click à l'exterieur
}

modal();

// fonction pour insérer les photos dans la gallery-modal

function createModalGallery() {
    fetch("http://localhost:5678/api/works")
    .then((response) => {
      return response.json();
    })
    .then((mesprojets) => {

      const galleryModal = document.querySelector(".contenairGallery");
      galleryModal.classList.add = "contenairGallery";
    

      for (const projets of mesprojets) {
        const projet = document.createElement("figure");
        
        const imageElement = document.createElement("img");
        imageElement.src = projets.imageUrl;
        
        projet.setAttribute("data-id", projets.id);
        projet.setAttribute("category-id", projets.categoryId);
        
        galleryModal.appendChild(projet);
        projet.appendChild(imageElement);
        imageElement.classList.toggle = ("photoModal");
    }

 
        
    });
      
}

createModalGallery();
