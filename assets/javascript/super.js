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

            //for (i = 0; i < response.results.length; i++) {
                if (response.results[0].biography.publisher == "Marvel Comics" || response.results[0].biography.publisher == "Deadpool" || response.results[0].biography.publisher == "Evil Deadpool" || response.results[0].biography.publisher == "Rune King Thor") {
                    console.log(response);
                    var superHero =  {
                        name: response.results[0].name,
                        realName : response.results[0].biography["full-name"],
                        birthplace: response.results[0].biography["place-of-birth"],
                        alignment: response.results[0].biography.alignment,
                        Int : response.results[0].powerstats.intelligence,
                        Pwr: response.results[0].powerstats.power,
                        Spd: response.results[0].powerstats.speed,
                        Cbt: response.results[0].powerstats.combat
                    };
                    
                    console.log(superHero)
                    //if conditionals for each stat starting with power
                    //pwr
                    if (superHero.Pwr == "null") {
                        superHero.Pwr = "Data Unavailable."
                    }
           
                    //speed
                    if (superHero.Spd == "null") {
                        superHero.Spd = "Data Unavailable."
                    }
                        
                    //Intelligence
                    if (superHero.Int == "null") {
                        superHero.Int = "Data Unavailable."
                    }
                
                    //Combat Ability
                    if (superHero.Cbt == "null") {
                        superHero.Cbt = "Data Unavailable."
                    }
                
                    //appends the superhero API data

                    $("#str-number").html(superHero.Pwr);
                    $("#comb-number").html(superHero.Cbt);
                    $("#speed-number").html(superHero.Spd);
                    $("#int-number").html(superHero.Int);
                    $("#name").html(superHero.realName);
                    $("#place").html(superHero.birthplace);
                    $("#result").html(superHero.alignment);
                };
            //};
            //{




        });
    },
};