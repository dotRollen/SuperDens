// CORS redirect to fix SuperHeroAPI CORS issue
jQuery.ajaxPrefilter(function (options)  {
    if  (options.crossDomain  &&  jQuery.support.cors)  {
        options.url  =  'https://cors-anywhere.herokuapp.com/'  +  options.url;
    }
});

const superAPI = {
    callAPI: function (superInput) {
        // function for superheroapi
        var superAPI = 'http://superheroapi.com/api/10160533766455290/search/' + superInput + '/';
        $.getJSON(superAPI).then(function (response) {
            if (response.results[0].biography.publisher ==  "Marvel Comics");