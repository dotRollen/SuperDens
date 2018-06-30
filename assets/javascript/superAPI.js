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

                    const ulTag = $("<ul>"),
                        realName = $("<li>").html('Real name:' + superHero.realName),
                        birthplace = $("<li>").html('Birth Place:' + superHero.birthplace),
                        alignment = $("<li>").html('Alignment:' + superHero.alignment),
                        int = $("<li>").html('Intelligent:' + superHero.Int),
                        pwer = $("<li>").html('Power:' + superHero.Pwr),
                        spd = $("<li>").html('Speed:' + superHero.Spd),
                        cbt = $("<li>").html('Combat:' + superHero.Cbt);

                    ulTag.append(realName).append(birthplace).append(alignment).append(int).append(pwer).append(spd).append(cbt);
                    $("#stats-content").html("<h4>Stats</h4>").append(ulTag);

                    if ($("#description").text().trim() == "") {
                        $("#description").text("No data in Marvel API.");
                    }
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
    setHero: function (params) {
        // Minimum to pass name and apikey as parameters
        var directory = 'characters?';
        $.when(this.getData(directory, params))
        .done(function(response){
            var name = response.data.results[0].name;
            var id = response.data.results[0].id;
            var thumbnail = response.data.results[0].thumbnail;
            var photo = thumbnail.path + '.' + thumbnail.extension; 
            var description = response.data.results[0].description;
            
            var heroDiv = $("<div>").addClass("col s6 m6 avatar-stats"),
                card = $("<div>").addClass("card"),
                cardImg = $("<div>").addClass("card-image"),
                picture = $("<img>").attr({
                    src: photo,
                    class: "circle",
                }),
                nameSpan  = $("<span>").attr({
                    "data-value": id,
                    class: "card-title",
                }).html("<h2>" + name + "</h2>"),
                cardContent = $("<div>").addClass("card-content").attr("id", "stats-content");
            
            heroDiv.append(card.append(cardImg.append(picture).append(nameSpan)).append(cardContent));
            $("#hero-den").html(heroDiv);

            var bioDiv = $("<div>").addClass("col s6 m6 avatar-stats"),
                card = $("<div>").addClass("card"),
                cardContent = $("<div>").addClass("card-content"),
                spanTitle = $("<span>").addClass("card-title"),
                bio = $(`<p id="description">`).text(description);

            bioDiv.append(card.append(cardContent.html("<h2>Bio</h2>").append(spanTitle).append(bio)));
            $("#hero-den").append(bioDiv);
            
            $("#hero-den").append(`
            <div class="col s12">
                <ul class="collapsible">
                    <li>
                        <div class="collapsible-header"><i class="material-icons">filter_drama</i>Comic Appearances</div>
                        <div class="collapsible-body"><span>[Marvel API Comics]</span></div>
                    </li>
                </ul>
            </div>
            `);
        });
    },
    postComics: function () {
        
    },
    postSeries: function () {

    }
} 
