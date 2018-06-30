// General required Javascript for functionality of the app
// --------------------------------------------------------
$("form").submit(function (event) {
    //When a submits a search with a keyword of a hero. This will request that objects marvelAPI and superAPI return
    // with Hero information and append to DOM.
    event.preventDefault();
    userInput = $("#search").val().trim();

    var params = $.param({
        apikey: marvelAPI.apikey,
        name: userInput,
    });

    var getHero = marvelAPI.setHero.bind(marvelAPI);
    getHero(params);

    superAPI.callAPI(userInput);
});

// Particle JS required Javascript
// ----------------------------------------
particlesJS("particles-js", {
    // Particles JS settings for frontend presentation
    "particles": {
      "number": {
        "value": 82,
        "density": {
          "enable": true,
          "value_area": 641.3648243462092
        }
      },
      "color": {
        "value": "#00cfc3"
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4.008530152163807,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 19.24094473038627,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


// Materialize required Javascript
// --------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    //Materialize sidenav component initializer for proper functionality
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, 'left');
});


$(document).ready(function(){
    //Materialize sidenav component CSS
    $('.sidenav').sidenav();
});
  

$(document).ready(function(){
    //Materialize autocomplete component initializer for proper functionality
    $('input.autocomplete').autocomplete({
    data: {
        "Apple": null,
        "Microsoft": null,
        "Google": null,
        "Gargle":null
        }
    });                
});

$(document).ready(function(){
    //Materialize collapsible  component initializer for proper functionality
    $('.collapsible').collapsible();
});

$(document).ready(function(){
  //Materialize modal  component initializer for proper functionality
  $('.modal').modal();
});
