$(function (){
   
    var marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
    $.getJSON( marvelAPI, {
        apikey: 'db60b2d90bd12165a42c7f7d1b0417ec'
      })
        .done(function( response ) {
          var results = response.data.results;
          var resultsLen = results.length;
          var output = '<ul>'; 
          
          for(var i=0; i<resultsLen; i++){
            if(results[i].images.length > 0) {
              var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
              output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
            }
          }  
          output += '</ul>'
          $('#results').append(output);
    }).fail(function(err) {
        throw err;
    });
})

// CORS redirect to fix SuperHeroAPI CORS issue
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
    
// function for superheroapi
var heroSearch = "Batman"; //just an exampe search
var superAPI = 'http://superheroapi.com/api/10160533766455290/search/' + heroSearch  + '/';
$.getJSON(superAPI).then(function(response) {
    console.log(response);
});