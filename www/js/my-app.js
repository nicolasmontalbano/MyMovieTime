  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
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

    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");


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
$$(document).on('page:init', '.page[data-name="registrate"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);


    var calendarDefault = app.calendar.create({
          inputEl: '#demo-calendar-default',
        });



})


// Option 4. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="registrate3"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    var a = 0;

    
//LIMITAR LOS CHECKBOX


  



})





