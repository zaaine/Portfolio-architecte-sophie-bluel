/* ************************************************************ */
// Gestion de la page login.html
// mise en place d'une regle de conformité des champs à remplir puis faire la requête API
/* *********************************************************************************************************** */
// *** Cette fonction valide la présence d'un mail au bon format avant de faire une requête API
/* ********************************************************************************************************** */

function validerEmail() {
  const email = document.getElementById("email");
  const labelEmail = document.querySelector(" label[for=Email] ");

  email.addEventListener("change", (event) => {
    let baliseEmail = email.value;
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if (!emailRegExp.test(baliseEmail)) {
      labelEmail.style.color = "red";
      message = "L'email n'est pas valide.";
      afficherMessageErreur(message);
    } else {
      // labelEmail.style.color = "green";
      EffacerMessageErreur();
    }
  });
}

validerEmail();

/* ********************************************************************************************* */
// cette fonction verifie que le mot de passe contient plus de 4 caractères avant la requête API
/* ********************************************************************************************* */

function validerPassword() {
  const password = document.getElementById("password");
  const labelPassword = document.querySelector(" label[for=password] ");

  if (password !== undefined) {
    password.addEventListener("change", () => {
      let balisePassword = password.value;
      let passwordRegExp = new RegExp("[A-Za-z0-9._-]{6}");

      if (!passwordRegExp.test(balisePassword)) {
        labelPassword.style.color = "red";
        message = "Le mot de passe est erroné";
        afficherMessageErreur(message);
      } else {
        // labelPassword.style.color = "green";
        EffacerMessageErreur();
      }
    });
  }
}

validerPassword();

/* ************************************************************ */
// Cette fonction va afficher un message d'erreur correspondant
/* ************************************************************ */

function afficherMessageErreur() {
  let spanErreurMessage = document.querySelector(".spanErreurMessage");
  let textErreur = document.querySelector(".textErreur");
  spanErreurMessage.append(textErreur);
  textErreur.innerText = message;
  textErreur.style.color = "red";
}

/* ************************************************************************ */
// Cette fonction va masqué le message d'erreur après correction utilisateur
/* ************************************************************************ */

function EffacerMessageErreur(afficherMessageErreur) {
  let spanErreurMessage = document.querySelector(".spanErreurMessage");
  let textErreur = document.querySelector(".textErreur");
  spanErreurMessage.append(textErreur);
  textErreur.innerText = message;
  textErreur.style.color = "white";
}

/* ************************************************************************************************ */
// cette fonction va gerer les informations du formulaire et du submit puis adresser la requête API
/* ************************************************************************************************* */

// Gestion du submit "connection "sur le formulaire
function gestionLogin(validerEmail, validerPassword) {
  let btnConnection = document.querySelector(".input_connection");
  let usersLogin = {
    email: document.getElementById("email"),
    password: document.getElementById("password"),
  };

  btnConnection.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email: usersLogin.email.value,
        password: usersLogin.password.value,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          message = "Not Authorized === erreur 401";
          afficherMessageErreur(message);
          throw new Error("Not Authorized");
        } else if (response.status === 404) {
          message = "User not found = erreur 404";
          afficherMessageErreur(message);
          throw new Error("User not found");
        }
        return false;
      })

      .then((data) => {
        if (data) {
          localStorage.setItem("token", data.token);
          window.location = "index.html";
          
          console.log(data);
        } else {
          throw new Error("l'objet DATA n'a pas été chargé");
        }
      })
      .catch((error) => console.log(error));
  });
}

gestionLogin();
