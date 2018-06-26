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
                if (response.results[i].biography.publisher == "Marvel Comics" || response.results[i].biography.publisher == "Deadpool" || response.results[i].biography.publisher == "Evil Deadpool" || response.results[i].biography.publisher == "Rune King Thor") {
                    console.log(response);
                    var superHero =  {
                        name: response.results[i].name,
                        realName : response.results[i].biography["full-name"],
                        Int : response.results[i].powerstats.intelligence,
                        Pwr: response.results[i].powerstats.power,
                        Spd: response.results[i].powerstats.speed,
                        Cbt: response.results[i].powerstats.combat
                    };
                    console.log(superHero.Int)
                    var superDiv = $("<div>");
                    var superImg = $("<img>");
                    var superBio = $("<p>");
                    superImg.attr("src", response.results[i].image.url);
                    superBio.append("Name: " + superHero.name + "<br>" + "Real Name: " + superHero.realName)
                    //if conditionals for each stat starting with power
                    if (superHero.Int == "null") {
                        superBio.append("<br> Power: Data Unavailable.")
                    } else {
                        superBio.append("<br> Power: " + superHero.Pwr)
                    };
                    //speed
                    if (superHero.Spd == "null") {
                        superBio.append("<br> Speed: Data Unavailable.")
                    } else {
                        superBio.append("<br> Speed: " + superHero.Spd)
                    };
                    //Intelligence
                    if (superHero.Int == "null") {
                        superBio.append("<br> Intelligence: Data Unavailable.")
                    } else {
                        superBio.append("<br> Intelligence: " + superHero.Int)
                    };
                    //Combat Ability
                    if (superHero.Int == "null") {
                        superBio.append("<br> Combat Ability: Data Unavailable.")
                    } else {
                        superBio.append("<br> Combat Ability: " + superHero.Cbt)
                    };
                    
                    //appends the superhero API data
                                 
                    superDiv.attr("class", "super-bio");
                    superDiv.append(superImg);
                    superDiv.append(superBio);
                    console.log(superBio);
                    console.log(superDiv);
                    $("#test-print").append(superDiv);
                };
            };
            //{



        });
    },
};