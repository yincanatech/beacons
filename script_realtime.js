 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAAxsBv6fGKYLxWJAfxka-tsVnzo5M_m74",
    authDomain: "yinkana4.firebaseapp.com",
    databaseURL: "https://yinkana4.firebaseio.com",
    projectId: "yinkana4",
    storageBucket: "yinkana4.appspot.com",
    messagingSenderId: "859903936833",
    appId: "1:859903936833:web:9b5501395691399289f9c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let refRegistros = firebase.database().ref('registrosrt');
console.log(document.getElementById("lista-registros"));
let listaRegistros = document.getElementById("lista-registros");

refRegistros.on('value', function (snapshot) {
    if (snapshot.numChildren() > 0) {
        listaRegistros.innerHTML = "";
    } else {
        listaRegistros.innerHTML = "<li>No tiene actividades registradas aún</li>";
    }
    snapshot.forEach(function (childSnapshot) {
      let value = childSnapshot.val();
      let nodoNuevoRegistro= document.createElement("li");
      nodoNuevoRegistro.innerHTML = "<div class=\" card \" ><h5>"+value.usuario+" está en " + value.sitio+ "</h5> \n(" +value.fecha+") </div>";
      nodoNuevoRegistro.className = "list-group-item";
      listaRegistros.appendChild(nodoNuevoRegistro);
    });
});