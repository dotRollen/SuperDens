// CORS redirect to fix SuperHeroAPI CORS issue
jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

const superAPI = {
    callAPI: function (superInput) {
        // function for superheroapi
        var superAPI = 'http://superheroapi.com/api/10160533766455290/search/' + superInput + '/';
        $.getJSON(superAPI).then(function (response) {
            for (i = 0; i < response.results.length; i++) {
                if (response.results[i].biography.publisher == "Marvel Comics") {
                    console.log(response);
                    var superDiv = $("<div>");
                    var superImg = $("<img>");
                    var superBio = $("<p>");
                    superImg.attr("src", response.results[i].image.url);
                    superBio.append(JSON.stringify(response.results[0]));
                    superDiv.attr("class", "super-bio");
                    console.log(superBio);
                    console.log(superDiv);
                    $("#test-print").append(superImg);
                };
            };
            //{



        });
    },
};