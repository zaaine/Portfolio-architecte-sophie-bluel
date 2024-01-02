// gestion de la boite de dialogue modal (ouvrir et fermer)

function modal() {
  const openModal = document.querySelector(".open-modal");
  openModal.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
});

    const modalClose = document.querySelector(".modalClose");
    modalClose.addEventListener("click", (event) => {
        const modal = document.querySelector(".modal");
        modal.style.display = "none";
        event.preventDefault();
    });
   
    const modal = document.querySelector(".modal");
        modal.addEventListener("click", (event) => {
        modal.style.display = "none";
        event.preventDefault();
        console.log("window");
    
  });
  
}

//   la modale doit se fermer au click sur l'exterieur de la modal

modal()


// closeModal()

// fonction pour insérer les photos dans la gallery-modal
// fontion generer les photos présente dans l'API

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
        imageElement.className = "photoModal";

        projet.setAttribute("name", projets.title);
        projet.setAttribute("data-id", projets.id);
        projet.setAttribute("category-id", projets.categoryId);

        galleryModal.appendChild(projet);
        projet.appendChild(imageElement);

        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-trash-can icon-delete";
        projet.appendChild(deleteIcon);

        deleteIcon.addEventListener("click", (event) => {
          event.preventDefault();
          deleteWork(projets.id);
        });
      }
    });
}

createModalGallery();

// création d'une fonction pour supprimer des projets de la galerie

function deleteWork(workId) {
  const token = localStorage.getItem("token");

  fetch(`http://localhost:5678/api/works/${workId}`, {
    method: "DELETE",
    headers: {
      accept: "*/*",
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status === 200) {
      const projetReset = document.querySelector(
        `figure[data-id = "${workId}"]`
      );
      projetReset.style.display = "none";
     
    } else if (response.status === 401) {
      throw new Error("Unauthorized");
    } else if (response.status === 500) {
      throw new Error("Unexpected Behaviour");
    }
    return false;
  });
}
