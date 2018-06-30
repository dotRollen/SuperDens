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
                if (response.results[i].biography.publisher == "Marvel Comics" || response.results[i].biography.publisher == "Deadpool" || response.results[0].biography.publisher == "Evil Deadpool" || response.results[i].biography.publisher == "Rune King Thor") {
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

                    $("#str-number").append(superHero.Pwr);
                    $("#comb-number").append(superHero.Cbt);
                    $("#speed-number").append(superHero.Spd);
                    $("#int-number").append(superHero.Int);
                };
            //};
            //{




        });
    },
};

const marvelAPI = {
    url: 'https://gateway.marvel.com/v1/public/',
    apikey: 'db60b2d90bd12165a42c7f7d1b0417ec',
    getData: function (directory, params) {
        var url = this.url;
        url += directory + params;
        return $.ajax({
            method: 'GET',
            url: url,
        })
        .fail(function(err) {
            throw err;
        });  
    },
    setName: function (params) {
        // Minimum to pass name and apikey as parameters
        var directory = 'characters?';
        $.when(this.getData(directory, params))
        .done(function(response){
            var name = response.data.results[0].name;
            var id = response.data.results[0].id;
            $("#hero").html('<h1 marvel-id="' + id + '">' + name + '</h1>');
        });
    },
    setAvatar: function (params) {
        var directory = 'characters?';
        $.when(this.getData(directory, params))
        .done(function(response){
            var thumbnail = response.data.results[0].thumbnail;
            var photo = thumbnail.path + '.' + thumbnail.extension; 
            $("#results").html('<img src="' + photo + '">');
        });
    },
    setBio: function (params) {
        var directory = 'characters?';
        $.when(this.getData(directory, params))
        .done(function(response){
            console.log(response);
            var description = response.data.results[0].description;
            $("#results").html('<p>' + description + '</p>');
        });
    },
    postComics: function () {
        
    },
    postSeries: function () {

    }
} 
