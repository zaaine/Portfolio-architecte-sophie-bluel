// import {isconnected} from "..script"

/* ************************************************************ */
// gestion de la boite de dialogue modal 1 (ouvrir et fermer)
/* ************************************************************ */
function modal() {
  const openModal = document.querySelector(".open-modal");
  openModal.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";

    const modalClose = document.querySelector(".modalClose");
    modalClose.addEventListener("click", (event) => {
      const modal = document.querySelector(".modal");
      modal.style.display = "none";
      event.preventDefault();
      // location.reload();
    });
  });

  const modal = document.querySelector(".modal");
  modal.addEventListener("click", () => {
    modal.style.display = "none";
    modalContent.stopPropagation();
  });

  const modalContent = document.querySelector(".modal-content");
  modalContent.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

modal();

// closeModal()
/* ************************************************************ */
// fonction pour insérer les photos dans la gallery-modal
// fontion generer les photos présente dans l'API
/* ************************************************************ */
function createModalGallery() {
  fetch("http://localhost:5678/api/works")
    .then((response) => {
      return response.json();
    })
    .then((mesprojets) => {
      const galleryModal = document.querySelector(".contenairGallery");
      galleryModal.classList.add = "contenairGallery";

      galleryModal.innerHTML = "";

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
          event.target.parentNode.style.display = "none";
          deleteWork(projets.id);
        });
      }
    });
}

createModalGallery();

/* ************************************************************ */
// création d'une fonction pour supprimer des projets de la galerie
/* ************************************************************ */

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
      const openmodal2 = document.querySelector(".openmodal2");
      openmodal2.style.display = "none";

      const modal = document.querySelector(".modal");
      modal.style.display = "block";

      const projetReset = document.querySelector(
        `figure[data-id = "${workId}"]`
      );
      projetReset.style.display = "none";
    } else if (response.status === 401) {
      throw new Error("Unauthorized");
    } else if (response.status === 500) {
      throw new Error("Unexpected Behaviour");
    }
  });
  fetch("http://localhost:5678/api/works")
    .then((response) => {
      return response.json();
    })
    .then((works) => {
      genererGallery(works);
    });

  createModalGallery();
}

/* ************************************************************ */
// Gestion de la modale 2 "Ajout de Travaux"
// navigation entre les modales
/* ************************************************************ */

function navigationModales() {
  const btnAddPhoto = document.querySelector(".btnAddModal");

  btnAddPhoto.addEventListener("click", (event) => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    event.preventDefault();

    const openmodal2 = document.querySelector(".openmodal2");
    openmodal2.style.display = "block";
  });

  const btnReturnGallery = document.querySelector(".returnGallery");
  btnReturnGallery.addEventListener("click", () => {
    const openmodal2 = document.querySelector(".openmodal2");
    openmodal2.style.display = "none";

    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  });

  const modal2 = document.querySelector(".openmodal2");
  modal2.addEventListener("click", () => {
    modal2.style.display = "none";
  });

  const modal2Containt = document.querySelector(".modal2_Containt");
  modal2Containt.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

navigationModales();
/* ************************************************************ */
// La fonction previewImg va afficher l'image selectionner dans
// le formulaire d'ajout et l'afficher en miniature.
/* ************************************************************ */
function previewImg() {
  document.getElementById("input_photo").addEventListener("change", (event) => {
    const btnPicture = document.querySelector(".button_add_picture");
    const imgPreview = document.getElementById("preview-input");
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      imgPreview.style.display = "block";
      imgPreview.src = reader.result;
      btnPicture.style.background = "none";
    });
    if (file) {
      reader.readAsDataURL(file);
    }
  });
}

previewImg();

/* ************************************************************ */
// envois des nouveaux projets
// fonction envoyer "Send a new work"
/* ************************************************************ */

async function sendWork() {
  const form = document.querySelector("#formulaireAddWork");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const image = document.getElementById("input_photo").files[0];
    const title = document.getElementById("title-input").value;
    const selectElmt = document.getElementById("category-input");
    const category = selectElmt.options[selectElmt.selectedIndex].value;

    if (image !== "" && title !== "" && selectElmt.value !== 0) {
      const btnValider = document.querySelector(".button_send_new_work");
      btnValider.style.background = "#1D6154";
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("category", category);

    const token = localStorage.getItem("token");

    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    await fetch("http://localhost:5678/api/works/", {
      method: "POST",
      headers: headers,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Projet non ajouté");
      })
      .then(() => {
        const modal = document.querySelector(".modal");
        modal.style.display = "Block";

        const openmodal2 = document.querySelector(".openmodal2");
        openmodal2.style.display = "none";

        const modalClose = document.querySelector(".modalClose");
        modalClose.addEventListener("click", (event) => {
          const modal = document.querySelector(".modal");
          modal.style.display = "none";
          event.preventDefault();
        });

        fetch("http://localhost:5678/api/works")
          .then((response) => {
            return response.json();
          })
          .then((works) => {
            genererGallery(works);
          });

        createModalGallery();

        document.querySelector(".modal2_formulaire").reset();

        let previewInput = document.getElementById("preview-input");
        previewInput.src = "";
        previewInput.style.display = "contents";

        const btnPicture = document.querySelector(".button_add_picture");
        btnPicture.style.background = "#CBD6DC";
      })

      .catch((error) => console.error(error));
  });
}
sendWork();
