  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var email, password, nombre, apellido, fechnac, aux, mailPerfil, titulo, titulo2, ano, duracion, sinopsis, netflix, urlimg, pidotitulo, pidotitulo2, pidoano, pidogeneros, pidosinopsis, pidourl, pidoduracion, pidonetflix, bloque;

var sumaVotos = 0;
var cantVotos = 0;
var promedio = 0;
var valoracion = 0;
var resultado = 0;
var estrellas = ['a','b','c','d','e'];

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

var db, refUsuarios, refTiposUsuarios, refSeries, refPeliculas, refSeriesAnime, refAnime;
 

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    /*VARIABLES DE BBDD*/
    $$("#emailL").val("usuario@usuario.com");
  $$("#passwordL").val("usuario");
  db = firebase.firestore();
  refUsuarios = db.collection("USUARIOS");
  refTiposUsuarios= db.collection("TIPOS_USUARIOS");
  refSeries = db.collection("SERIES");
  refPeliculas = db.collection("PELICULAS");
  //refSeriesAnime = db.collection("SERIES_ANIME");
  refAnime = db.collection("ANIME");


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

    $$("#enviarAporte").on("click, agregarPopup");


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
    getAllMovies();
    

$$("#enviarValor").on("click", enviarValor);



})

// Option 3. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="anime"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    getAllAnime();

    


})


// Option 3. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="series"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
   getAllSeries();    




})


// Option 5. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="perfil"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    getInfo();

    $$("#cerrarSesion").on("click", logout);


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

function logout(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
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
  titulo2 = titulo.trim();
  titulo2 = titulo2.replace(/ /g, "");
  ano = $$("#año").val();
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
    titulo2: titulo2,
    año: ano,
    duracion: duracion,
    sinopsis: sinopsis,
    netflix: netflix,
    generos: generos,
    imagen: direccionImagen,
    valoracion: valoracion
  }



  if( $$(".esanime").is(":checked") ) {

    if( $$(".serie").is(":checked") ){

      refAnime.doc(titulo).set(data);

      //alert("Es una serie de anime");
      console.log("Es una serie de anime");


      refAnime.doc(titulo).get().then(function(doc) {
  if (doc.exists) {
      pidotitulo = doc.data().titulo;
      pidoano = doc.data().ano;
      pidoduracion = doc.data().duracion;
      pidonetflix = doc.data().netflix;
      pidogeneros = doc.data().generos;
      pidosinopsis = doc.data().sinopsis;
      pidourl = doc.data().imagen;
      pidotitulo2 = doc.data().titulo2;
      pidovaloracion = doc.data().valoracion;
      console.log("Titulo pedido: " + pidotitulo2);
      console.log("Año pedido: " + pidoano);
      console.log("Generos pedidos: " + pidogeneros);
      console.log("Sinopsis pedida: " + pidosinopsis);
      console.log("URL pedida: " + pidourl);
      console.log("Duracion pedida: " + pidoduracion);
      console.log("Netflix pedido: " + pidonetflix);
      //bloquePelicula = '<p><a href="#" data-popup=".' + pidotitulo + '" class = "popup-open"><img src="' + pidourl + '" id="myimg" height="100vh" width="70vw"></a></p>'
      //console.log(bloquePelicula);
      
//(acá arriba le digo que si encuentra un documento con esa clave -o sea con ese email- me cargue cada dato en cada variable)//
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error: ", error);
});



    }

  }


  if( $$(".esanime").is(":checked") ) {

    if( $$(".pelicula").is(":checked") ){

      refAnime.doc(titulo).set(data);

      //alert("Es una pelicula de anime");
      console.log("Es una pelicula de anime");



      refAnime.doc(titulo).get().then(function(doc) {
  if (doc.exists) {
      pidotitulo = doc.data().titulo;
      pidoano = doc.data().ano;
      pidoduracion = doc.data().duracion;
      pidonetflix = doc.data().netflix;
      pidogeneros = doc.data().generos;
      pidosinopsis = doc.data().sinopsis;
      pidourl = doc.data().imagen;
      pidotitulo2 = doc.data().titulo2;
      pidovaloracion = doc.data().valoracion;
      console.log("Titulo pedido: " + pidotitulo2);
      console.log("Año pedido: " + pidoano);
      console.log("Generos pedidos: " + pidogeneros);
      console.log("Sinopsis pedida: " + pidosinopsis);
      console.log("URL pedida: " + pidourl);
      console.log("Duracion pedida: " + pidoduracion);
      console.log("Netflix pedido: " + pidonetflix);
      //bloquePelicula = '<p><a href="#" data-popup=".' + pidotitulo + '" class = "popup-open"><img src="' + pidourl + '" id="myimg" height="100vh" width="70vw"></a></p>'
      //console.log(bloquePelicula);
      
//(acá arriba le digo que si encuentra un documento con esa clave -o sea con ese email- me cargue cada dato en cada variable)//
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error: ", error);
});











    }

  }



  if( $$(".noesanime").is(":checked") ) {

    if( $$(".serie").is(":checked") ){

      refSeries.doc(titulo).set(data);

      //alert("Es una serie");
      console.log("Es una serie");



      refSeries.doc(titulo).get().then(function(doc) {
  if (doc.exists) {
      pidotitulo = doc.data().titulo;
      pidoano = doc.data().ano;
      pidoduracion = doc.data().duracion;
      pidonetflix = doc.data().netflix;
      pidogeneros = doc.data().generos;
      pidosinopsis = doc.data().sinopsis;
      pidourl = doc.data().imagen;
      pidotitulo2 = doc.data().titulo2;
      pidovaloracion = doc.data().valoracion;
      console.log("Titulo pedido: " + pidotitulo2);
      console.log("Año pedido: " + pidoano);
      console.log("Generos pedidos: " + pidogeneros);
      console.log("Sinopsis pedida: " + pidosinopsis);
      console.log("URL pedida: " + pidourl);
      console.log("Duracion pedida: " + pidoduracion);
      console.log("Netflix pedido: " + pidonetflix);
      //bloquePelicula = '<p><a href="#" data-popup=".' + pidotitulo + '" class = "popup-open"><img src="' + pidourl + '" id="myimg" height="100vh" width="70vw"></a></p>'
      //console.log(bloquePelicula);
      
//(acá arriba le digo que si encuentra un documento con esa clave -o sea con ese email- me cargue cada dato en cada variable)//
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error: ", error);
});



    }

  }



  if( $$(".noesanime").is(":checked") ) {

    if( $$(".pelicula").is(":checked") ){

      refPeliculas.doc(titulo).set(data);

      //alert("Es una pelicula");
      console.log("Es una pelicula");



      refPeliculas.doc(titulo).get().then(function(doc) {
  if (doc.exists) {
      pidotitulo = doc.data().titulo;
      pidoano = doc.data().ano;
      pidoduracion = doc.data().duracion;
      pidonetflix = doc.data().netflix;
      pidogeneros = doc.data().generos;
      pidosinopsis = doc.data().sinopsis;
      pidourl = doc.data().imagen;
      pidotitulo2 = doc.data().titulo2;
      pidovaloracion = doc.data().valoracion;
      console.log("Titulo pedido: " + pidotitulo2);
      console.log("Año pedido: " + pidoano);
      console.log("Generos pedidos: " + pidogeneros);
      console.log("Sinopsis pedida: " + pidosinopsis);
      console.log("URL pedida: " + pidourl);
      console.log("Duracion pedida: " + pidoduracion);
      console.log("Netflix pedido: " + pidonetflix);
      //bloquePelicula = '<p><a href="#" data-popup=".' + pidotitulo + '" class = "popup-open"><img src="' + pidourl + '" id="myimg" height="100vh" width="70vw"></a></p>'
      //console.log(bloquePelicula);
      
//(acá arriba le digo que si encuentra un documento con esa clave -o sea con ese email- me cargue cada dato en cada variable)//
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error: ", error);
});



  // CON LOS DATOS PEDIDOS ARRIBA, GENERAR EL POPUP EN PELICULAS

 // bloque = '<p><a href="#" data-popup="."' + pidotitulo + 'class="popup-open"><img src="' + pidourl + '" id="myimg" height="100vh" width="70vw"></a></p>'

 // $$(".peli2").append(bloque);
  
  //agregarPopup();

  





    }

  }


generos = [];



};
 function getAllMovies() {
  let arrayOfMovies = [];

  db.collection('PELICULAS').get().then(function(resultMovies) {
    workWithArray(resultMovies, function(listOfMoviesToAppend){
      console.log(listOfMoviesToAppend);
      listOfMoviesToAppend.forEach(movieToAppend => {
        $$("#listaPeliculas").append(
                    `<p><a href="#" data-popup=".${movieToAppend.pidotitulo2}" id="${movieToAppend.pidotitulo}" class="popup-open mipopup"><img src=${movieToAppend.url} height="100vh" class="mipopup" width="70vw"></a></p>
      <div class="popup popup-about ${movieToAppend.pidotitulo2}">
        <div class="page">
        <div class="page-content">
        <div class="block">
          <h3 class="text-align-center letrablanca"> ${movieToAppend.pidotitulo} </h3>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Género/s:
                </div>
                <div class="col letrablanca">
                  ${movieToAppend.pidogeneros}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Año:
                </div>
                <div class="col letrablanca">
                  ${movieToAppend.pidoano}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Duración:
                </div>
                <div class="col letrablanca">
                  ${movieToAppend.pidoduracion}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Netflix: 
                </div>
                <div class="col letrablanca">
                  ${movieToAppend.pidonetflix}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Sinopsis:
                </div>
                <div class="col letrablanca">
                ${movieToAppend.pidosinopsis}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col-50">
              <div class="infoizq letrablanca">Valoración (1-10)</div>
              <div class="letrablanca">

                <div class="botones" id="linea">
                  <input type="text" id="val_${movieToAppend.pidotitulo2}" placeholder="Ingresa tu valoración" required validate pattern="[1-10]*" data-error-message="Only numbers please!">
                
                </div>


              </div>
            </div>

            <div class="col-50">
              <div class="col"><a class="button button-fill popup-close" id="enviarValor" href="#">Enviar</a></div>
            </div>

          </div>
        </div>
          <div class="block">
            <div class="row">
              <div class="col"><a class="button button-fill popup-close" href="#">Volver</a></div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>`
        );
      })
      
    })
  });

    
}

function workWithArray(arrayMovies, callback){
  arrayOfMoviesT = [];
  var storageRef = firebase.storage().ref();
  let count = 0;
  console.log(arrayMovies.docs.length);
  arrayMovies.forEach(doc => {
    getUrlImage(doc.data().imagen, storageRef, function(value){
      arrayOfMoviesT.push({
            pidotitulo : doc.data().titulo,
            pidoano : doc.data().año,
            pidoduracion : doc.data().duracion,
            pidonetflix : doc.data().netflix,
            pidogeneros : doc.data().generos,
            pidosinopsis : doc.data().sinopsis,
            pidourl : doc.data().imagen,
            pidotitulo2 : doc.data().titulo2,
            url: value
      });
      count++;
      if(count == arrayMovies.docs.length){
      callback(arrayOfMoviesT);
    }
    });
    
  })
}

function getUrlImage(urlImg, storageRef, callback){
  storageRef.child(urlImg).getDownloadURL().then(function(url) {
    callback(url);
  });
}



function getAllSeries() {
  let arrayOfSeries = [];

  db.collection('SERIES').get().then(function(resultSeries) {
    workWithArray(resultSeries, function(listOfSeriesToAppend){
      console.log(listOfSeriesToAppend);
      listOfSeriesToAppend.forEach(serieToAppend => {
        $$("#listaSeries").append(
                    `<p><a href="#" data-popup=".${serieToAppend.pidotitulo2}" id="${serieToAppend.pidotitulo}" class="popup-open mipopup"><img src=${serieToAppend.url} height="100vh" class="mipopup" width="70vw"></a></p>
      <div class="popup popup-about ${serieToAppend.pidotitulo2}">
        <div class="page">
        <div class="page-content">
        <div class="block">
          <h3 class="text-align-center letrablanca"> ${serieToAppend.pidotitulo} </h3>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Género/s:
                </div>
                <div class="col letrablanca">
                  ${serieToAppend.pidogeneros}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Año:
                </div>
                <div class="col letrablanca">
                  ${serieToAppend.pidoano}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Duración:
                </div>
                <div class="col letrablanca">
                  ${serieToAppend.pidoduracion}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Netflix: 
                </div>
                <div class="col letrablanca">
                  ${serieToAppend.pidonetflix}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Sinopsis:
                </div>
                <div class="col letrablanca">
                ${serieToAppend.pidosinopsis}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col-50">
              <div class="infoizq letrablanca">Valoración (1-10)</div>
              <div class="letrablanca">

                <div class="botones" id="linea">
                  <input type="text" id="${serieToAppend.pidotitulo2}" placeholder="Ingresa tu valoración" required validate pattern="[1-10]*" data-error-message="Only numbers please!">
                
                </div>


              </div>
            </div>

            <div class="col-50">
              <div class="col"><a class="button button-fill popup-close" id="enviarValor" href="#">Enviar</a></div>
            </div>

          </div>
        </div>
          <div class="block">
            <div class="row">
              <div class="col"><a class="button button-fill popup-close" href="#">Volver</a></div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>`
        );
      })
      
    })
  });

    
}

function workWithArray(arraySeries, callback){
  arrayOfSeriesT = [];
  var storageRef = firebase.storage().ref();
  let count = 0;
  console.log(arraySeries.docs.length);
  arraySeries.forEach(doc => {
    getUrlImage(doc.data().imagen, storageRef, function(value){
      arrayOfSeriesT.push({
            pidotitulo : doc.data().titulo,
            pidoano : doc.data().año,
            pidoduracion : doc.data().duracion,
            pidonetflix : doc.data().netflix,
            pidogeneros : doc.data().generos,
            pidosinopsis : doc.data().sinopsis,
            pidourl : doc.data().imagen,
            pidotitulo2 : doc.data().titulo2,
            url: value
      });
      count++;

      if(count == arraySeries.docs.length){
      console.log(arrayOfSeriesT);
      callback(arrayOfSeriesT);
    }
    });
    
  })
}

function getUrlImage(urlImg, storageRef, callback){
  storageRef.child(urlImg).getDownloadURL().then(function(url) {
    callback(url);
  });
}



















function getAllAnime() {
  let arrayOfAnime = [];

  db.collection('ANIME').get().then(function(resultAnime) {
    workWithArray(resultAnime, function(listOfAnimeToAppend){
      console.log(listOfAnimeToAppend);
      listOfAnimeToAppend.forEach(animeToAppend => {
        $$("#listaAnime").append(
                    `<p><a href="#" data-popup=".${animeToAppend.pidotitulo2}" id="${animeToAppend.pidotitulo}" class="popup-open mipopup"><img src=${animeToAppend.url} height="100vh" class="mipopup" width="70vw"></a></p>
      <div class="popup popup-about ${animeToAppend.pidotitulo2}">
        <div class="page">
        <div class="page-content">
        <div class="block">
          <h3 class="text-align-center letrablanca"> ${animeToAppend.pidotitulo} </h3>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Género/s:
                </div>
                <div class="col letrablanca">
                  ${animeToAppend.pidogeneros}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Año:
                </div>
                <div class="col letrablanca">
                  ${animeToAppend.pidoano}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Duración:
                </div>
                <div class="col letrablanca">
                  ${animeToAppend.pidoduracion}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Netflix: 
                </div>
                <div class="col letrablanca">
                  ${animeToAppend.pidonetflix}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Sinopsis:
                </div>
                <div class="col letrablanca">
                ${animeToAppend.pidosinopsis}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col-50">
              <div class="infoizq letrablanca">Valoración (1-10)</div>
              <div class="letrablanca">

                <div class="botones" id="linea">
                  <input type="text" id="${animeToAppend.pidotitulo2}" placeholder="Ingresa tu valoración" required validate pattern="[1-10]*" data-error-message="Only numbers please!">
                
                </div>


              </div>
            </div>

            <div class="col-50">
              <div class="col"><a class="button button-fill popup-close" id="enviarValor" href="#">Enviar</a></div>
            </div>

          </div>
        </div>
          <div class="block">
            <div class="row">
              <div class="col"><a class="button button-fill popup-close" href="#">Volver</a></div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>`
        );
      })
      
    })
  });

    
}

function workWithArray(arrayAnime, callback){
  arrayOfAnimeT = [];
  var storageRef = firebase.storage().ref();
  let count = 0;
  console.log(arrayAnime.docs.length);
  arrayAnime.forEach(doc => {
    getUrlImage(doc.data().imagen, storageRef, function(value){
      arrayOfAnimeT.push({
            pidotitulo : doc.data().titulo,
            pidoano : doc.data().año,
            pidoduracion : doc.data().duracion,
            pidonetflix : doc.data().netflix,
            pidogeneros : doc.data().generos,
            pidosinopsis : doc.data().sinopsis,
            pidourl : doc.data().imagen,
            pidotitulo2 : doc.data().titulo2,
            url: value
      });
      count++;
      if(count == arrayAnime.docs.length){
      callback(arrayOfAnimeT);
    }
    });
    
  })
}

function getUrlImage(urlImg, storageRef, callback){
  storageRef.child(urlImg).getDownloadURL().then(function(url) {
    callback(url);
  });
}





/*function prepareMovies(arrayOfMovies, callback){
  var storageRef = firebase.storage().ref();
  db.collection('PELICULAS').get().then(function(movies) {
        movies.forEach(doc => {
            pidotitulo = doc.data().titulo;
            pidoano = doc.data().año;
            pidoduracion = doc.data().duracion;
            pidonetflix = doc.data().netflix;
            pidogeneros = doc.data().generos;
            pidosinopsis = doc.data().sinopsis;
            pidourl = doc.data().imagen;
            pidotitulo2 = doc.data().titulo2;
            arrMovie = [pidotitulo, pidotitulo2, pidoaño, pidoduracion, pidonetflix, pidogeneros, pidosinopsis, pidourl];
            storageRef.child(pidourl).getDownloadURL().then(function(url) {
              arrayOfMovies.push({
                titulo: pidotitulo,
                titulo2: pidotitulo2,
                ano: pidoano,
                duracion: pidoduracion,
                netflix: pidonetflix,
                genero: pidogeneros,
                sinopsis: pidosinopsis,
                url: url
              });
            });
        });
        callback();
    });
}*/
/*function getAllMovies() {

    var storageRef = firebase.storage().ref();
    const movies = db.collection('PELICULAS').get().then(function(movies) {
        movies.forEach(doc => {
            pidotitulo = doc.data().titulo;
            pidoaño = doc.data().año;
            pidoduracion = doc.data().duracion;
            pidonetflix = doc.data().netflix;
            pidogeneros = doc.data().generos;
            pidosinopsis = doc.data().sinopsis;
            pidourl = doc.data().imagen;
            pidotitulo2 = doc.data().titulo2;
            arrMovie = [pidotitulo, pidotitulo2, pidoaño, pidoduracion, pidonetflix, pidogeneros, pidosinopsis, pidourl];
            storageRef.child(pidourl).getDownloadURL().then(function(url) {
                $$("#listaPeliculas").append(
                    `<p><a href="#" data-popup=".${pidotitulo2}" class="popup-open"><img src=${url} height="100vh" width="70vw"></a></p>
      <div class="popup popup-about ${pidotitulo2}">
        <div class="page">
        <div class="page-content">
        <div class="block">
          <h3 class="text-align-center letrablanca"> ${pidotitulo} </h3>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Género/s:
                </div>
                <div class="col letrablanca">
                  ${pidogeneros}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Año:
                </div>
                <div class="col letrablanca">
                  ${pidoaño}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Duración:
                </div>
                <div class="col letrablanca">
                  ${pidoduracion}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Netflix: 
                </div>
                <div class="col letrablanca">
                  ${pidonetflix}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col infoizq letrablanca">
                  Sinopsis:
                </div>
                <div class="col letrablanca">
                ${pidosinopsis}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="col-50">
              <div class="infoizq letrablanca">Valoración</div>
              <div class="letrablanca">Valoracion</div>
            </div>

            <div class="col-50">
              <div class="infoizq letrablanca">Valoración por género</div>
              <div class="letrablanca">VALORACION POR GENERO</div>
            </div>
          </div>
        </div>
          <div class="block">
            <div class="row">
              <div class="col"><a class="button button-fill popup-close" href="#">Volver</a></div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>`
                );
            });
        });
    });
}*/
function selImage() {     // SELECCIONA DESDE GALERIA
  navigator.camera.getPicture(onSuccess,onError,
  {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  });
}

function idRandom(){
  var result = "";
  var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var caracteresLength = caracteres.length;
  for(var i = 0; i < 25; i++){
    result += caracteres.charAt(Math.floor(Math.random() * caracteresLength ));
  }
  return result;

}



function onSuccess(imageData) {
    var storageRef = firebase.storage().ref();

    nombreAleatorio = idRandom();

    nombreImagen = nombreAleatorio + '.jpg';

    direccionImagen = 'images/' + nombreImagen;

    console.log("Nombre aleatorio: " + nombreAleatorio);
    console.log("Nombre imagen: " + nombreImagen);
    console.log("Direccion imagen: " + direccionImagen);

    



    var getFileBlob = function(url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
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


    var getFileObject = function(filePathOrUrl, cb) {
        getFileBlob(filePathOrUrl, function(blob) {
            cb(blobToFile(blob, nombreImagen));
        });
    };

    getFileObject(imageData, function(fileObject) {
        var uploadTask = storageRef.child(direccionImagen).put(fileObject);

        uploadTask.on('state_changed', function(snapshot) {
            console.log(snapshot);
        }, function(error) {
            console.log(error);
        }, function() {
            
            storageRef.child(direccionImagen).getDownloadURL().then(function(url) {
              // `url` is the download URL for 'images/stars.jpg'

              // This can be downloaded directly:
              var xhr = new XMLHttpRequest();
              xhr.responseType = 'blob';
              xhr.onload = function(event) {
                var blob = xhr.response;
              };
              xhr.open('GET', url);
              xhr.send();

              // Or inserted into an <img> element:
              var img = document.getElementById('myimg');
              img.src = url;
            }).catch(function(error) {
              // Handle any errors
            });

                });
            });

}

function onError() {
        console.log("error camara");
}

function getInfo(){
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.

   /* $$("#nombrePerfil").val(name);
    $$("#mailPerfil").val(emailVerified);*/

    mailPerfil = email;
    console.log(mailPerfil);
  }


  refUsuarios.doc(mailPerfil).get().then(function(doc) {
  if (doc.exists) {
      nombrePerfil = doc.data().nombre;
      apellidoPerfil = doc.data().apellido;
      nacimientoPerfil = doc.data().fechnac;
      console.log("Nombre en perfil: " + nombrePerfil);
      console.log("Apellido en perfil: " + apellidoPerfil);
      console.log("Fecha de nacimiento en perfil: " + nacimientoPerfil);
      console.log("Mail del perfil: " + mailPerfil);
      $$(".perfil").append('<ul><li>Nombre: '+nombrePerfil+'</li><li>Apellido: '+apellidoPerfil+'</li><li>Dirección de correo electrónico: '+mailPerfil+'</li><li>Fecha de nacimiento: '+nacimientoPerfil+'</li></ul>'+'<div class="col"><a class="button button-fill popup-close toolbar-bottom" id="cerrarSesion" href="#">Cerrar Sesión</a></div>');

  } else {
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error: ", error);
});



}





function enviarValor(){
  valor =  $$("#valor").val();
  sumaVotos = sumaVotos + valor;
  cantVotos = cantVotos + 1;
  promedio = sumaVotos / cantVotos;


}

function obtenerID(){
  alert(this.id);
}