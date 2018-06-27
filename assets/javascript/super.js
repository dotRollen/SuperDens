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
                        birthplace: response.results[i].biography["place-of-birth"],
                        alignment: response.results[i].biography.alignment,
                        Int : response.results[i].powerstats.intelligence,
                        Pwr: response.results[i].powerstats.power,
                        Spd: response.results[i].powerstats.speed,
                        Cbt: response.results[i].powerstats.combat
                    };
                    
                    console.log(superHero)
                    var superDiv = $("<div>");
                    var superImg = $("<img>");
                    var superBio = $("<p>");
                    superBio.append("Name: " + superHero.name + "<br>Real Name: " + superHero.realName + "<br> Alignment: " + superHero.alignment + "<br> Stats: ")
                    //if conditionals for each stat starting with power
                    if (superHero.Int == "null") {
                        superBio.append("Power = Data Unavailable")
                    } else {
                        superBio.append("Power = " + superHero.Pwr)
                    };
                    //speed
                    if (superHero.Spd == "null") {
                        superBio.append(", Speed = Data Unavailable.")
                    } else {
                        superBio.append(", Speed = " + superHero.Spd)
                    };
                    //Intelligence
                    if (superHero.Int == "null") {
                        superBio.append(", Intelligence = Data Unavailable.")
                    } else {
                        superBio.append(", Intelligence = " + superHero.Int)
                    };
                    //Combat Ability
                    if (superHero.Int == "null") {
                        superBio.append(", Combat Ability = Data Unavailable.")
                    } else {
                        superBio.append(", Combat Ability = " + superHero.Cbt)
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