  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var email, password, nombre, apellido, fechnac, aux, titulo, año, duracion, sinopsis, netflix, urlimg;

var generos = [];

var app = new Framework7({

  /*  navbar: {
      mdCenterTitle: true
    },*/
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      { path: '/about/', url: 'about.html', },
      { path: '/registrate/', url: 'registrate.html', },
      { path: '/olvidemicontraseña/', url: 'olvidemicontraseña.html', },
      { path: '/olvidemicontraseña2/', url: 'olvidemicontraseña2.html', },
      { path: '/index/', url: 'index.html', },
      { path: '/registrate2/', url: 'registrate2.html', },
      { path: '/registrate3/', url: 'registrate3.html', },
      { path: '/peliculas/', url: 'peliculas.html', },
      { path: '/series/', url: 'series.html', },
      { path: '/anime/', url: 'anime.html', },
      { path: '/aportes/', url: 'aportes.html', },
      { path: '/perfil/', url: 'perfil.html', },

    ]
    // ... other parameters
  });


var mainView = app.views.create('.view-main');

var db, refUsuarios, refTiposUsuarios, refSeries, refPeliculas, refSeriesAnime, refPeliculasAnime;
 

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    /*VARIABLES DE BBDD*/

  db = firebase.firestore();
  refUsuarios = db.collection("USUARIOS");
  refTiposUsuarios= db.collection("TIPOS_USUARIOS");
  refSeries = db.collection("SERIES");
  refPeliculas = db.collection("PELICULAS");
  refSeriesAnime = db.collection("SERIES_ANIME");
  refPeliculasAnime = db.collection("PELICULAS_ANIME");


$$("#iniciar").on("click", login);


});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})


// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
})



// Option 3. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    

})


// Option . Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="aportes"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    
    $$(".muestronoanime").hide();

    $$(".muestroanime").hide();

    $$(".esanime").on("click", mostrar1);

    $$(".noesanime").on("click", mostrar2);

    $$("#enviarAporte").on("click", guardarDatosAporte);

    $$(".estaennetflix").on("click", guardarSi);

    $$(".noestaennetflix").on("click", guardarNo);

    $$("#subirImg").on("click", selImage);


   // $$("#enviarAporte").on("click", onSuccess);
    
    






})


// Option 4. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="registrate"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);


    var calendarDefault = app.calendar.create({
          inputEl: '#demo-calendar-default',
        });

    $$("#continuar1").on("click", guardarDatos1);

    $$("#continuar1").on("click", verif);


    

  

})

// Option 5. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="registrate2"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);


    $$("#continuar2").on("click", guardarDatos2);


})


// Option 3. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="peliculas"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    
/*
    var searchbar = app.searchbar.create({
  el: '.searchbar',
  searchContainer: '.list',
  searchIn: '.item-title',
  on: {
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    }
  }
});

*/





})







// Option 6. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="registrate3"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    var a = 0;

    
//LIMITAR LOS CHECKBOX



  $$('.tocaBoton').on('change', function() {

    var limit = 4;

    if($$('.tocaBoton:checked').length >= limit) {

        this.checked = false;
    }
  });


  $$('.tocaBoton1').on('change', function() {

    var limit = 3;

    if($$('.tocaBoton1:checked').length >= limit) {

        this.checked = false;
    }
  });








$$("#continuar3").on("click", function(){



  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});



});



})



/*MIS FUNCIONES*/

function login(){

  var emailL = $$("#emailL").val();
  var passwordL = $$("#passwordL").val();

  var huboError = 0;

  firebase.auth().signInWithEmailAndPassword(emailL, passwordL)
    .catch(function(error){
      huboError = 1;
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);

    })

    .then(function(){


      if(huboError == 0){
        mainView.router.navigate("/peliculas/");
        console.log("Login correcto");

      }
      



    });




}


function guardarDatos1(){

  nombre = $$("#nombre").val();
  apellido = $$("#apellido").val();
  fechnac = $$(".fechnac").val();

  

}



function guardarDatos2(){

      email = $$("#email").val();
      password = $$("#contraseña").val();
      
      var data = {
        nombre: nombre,
        apellido: apellido,
        fechnac: fechnac,
        tipo: "usuario"
      }

      refUsuarios.doc(email).set(data);

}





function verif(){

if ($$("input").is(':empty')){
  alert("Completa todos los campos");
  mainView.router.navigate("/registrate/");
}


 /* if(nombre == "" || nombre == null){
      alert("El nombre es obligatorio");
      mainView.router.navigate("/registrate/");
  }

  if(apellido == "" || apellido == null){
      alert("El apellido es obligatorio");
      mainView.router.navigate("/registrate/");
  }

  if(fechnac == "" || fechnac == null){
      alert("La fecha de nacimiento es obligatoria");
      mainView.router.navigate("/registrate/");
  }*/
}

function mostrar1(){

  console.log("Es anime");

  $$(".muestronoanime").hide();
  $$(".muestroanime").show();
  aux = false;



}


function mostrar2(){

  console.log("No es anime");

  $$(".muestronoanime").show();
  $$(".muestroanime").hide();

  aux = true;
}

function guardarSi(){
  netflix = "Si";
}

function guardarNo(){
  netflix = "No";
}



function guardarDatosAporte(){

  var a;

  titulo = $$("#titulo").val();
  año = $$("#año").val();
  duracion = $$("#duracion").val();
  sinopsis = $$("#sinopsis").val();


for(i = 1; i <= 16; i++){
    if( $$("#genero" + i).is(":checked") ){
      
      a = $$("#genero" + i).val();
      generos.push(a);

    }
  }


  var data = {
    titulo: titulo,
    año: año,
    duracion: duracion,
    sinopsis: sinopsis,
    netflix: netflix,
    generos: generos,
    imagen: urlimg
  }



  if( $$(".esanime").is(":checked") ) {

    if( $$(".serie").is(":checked") ){

      refSeriesAnime.doc(titulo).set(data);

      //alert("Es una serie de anime");
      console.log("Es una serie de anime");



    }

  }


  if( $$(".esanime").is(":checked") ) {

    if( $$(".pelicula").is(":checked") ){

      refPeliculasAnime.doc(titulo).set(data);

      //alert("Es una pelicula de anime");
      console.log("Es una pelicula de anime");

    }

  }



  if( $$(".noesanime").is(":checked") ) {

    if( $$(".serie").is(":checked") ){

      refSeries.doc(titulo).set(data);

      //alert("Es una serie");
      console.log("Es una serie");



    }

  }



  if( $$(".noesanime").is(":checked") ) {

    if( $$(".pelicula").is(":checked") ){

      refPeliculas.doc(titulo).set(data);

      //alert("Es una pelicula");
      console.log("Es una pelicula");

  /*    refPeliculas.doc(titulo).get()
        .then(function(querySnapshot){
          querySnapshot.forEach(function(doc){
            console.log("Titulo: " + doc.data().titulo);
            console.log("Año: " + doc.data().año);
            console.log("Generos: " + doc.data().generos);
          });
        })

        .catch(function(error){
          console.log("Error: " + error);
        });


        REVISAR LA OBTENCION DE DATOS


      */

















    }

  }


generos = [];



};


function selImage() {     // SELECCIONA DESDE GALERIA
  navigator.camera.getPicture(onSuccess,onError,
  {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  });
}





function onSuccess(imageData) {
    var storageRef = firebase.storage().ref();
    var getFileBlob = function(url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        console.log("url de la imagen es: " + url);
        urlimg = url;
        xhr.responseType = "blob";
        xhr.addEventListener('load', function() {
            cb(xhr.response);
        });
        xhr.send();
    };

    var blobToFile = function(blob, name) {
        blob.lastModifiedDate = new Date();
        blob.name = name;
        return blob;
    };

    function idRandom(){
      var result = "";
      var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var caracteresLength = caracteres.length;
      for(var i = 0; i < 25; i++){
        result += caracteres.charAt(Math.floor(Math.random() * caracteresLength ));
      }
      return result;

    }

    var getFileObject = function(filePathOrUrl, cb) {
        getFileBlob(filePathOrUrl, function(blob) {
            cb(blobToFile(blob, idRandom() + '.jpg'));
            console.log("filePathOrUrl es: " + filePathOrUrl);
        });
    };

    getFileObject(imageData, function(fileObject) {
        var uploadTask = storageRef.child('images/' + idRandom() + '.jpg').put(fileObject);

        uploadTask.on('state_changed', function(snapshot) {
            console.log(snapshot);
        }, function(error) {
            console.log(error);
        }, function() {
            var downloadURL = uploadTask.snapshot.downloadURL;
            console.log("downloadURL de la imagen: " + downloadURL);
            // handle image here
        });
    });

}

function onError() {
        console.log("error camara");
}

