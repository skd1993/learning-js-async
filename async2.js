// JS Promises
window.onload = function(){

    // using jQuery
    $.get('data/tweets.json').then(function(tweets){
        console.log(tweets);
        return $.get('data/friends.json');
    }).then(function(friends){
        console.log(friends);
        return $.get('data/places.json');
    }).then(function(places){
        console.log(places);
    });

    // using native methods
    /*
    function get(url){
        return new Promise(function(resolve, reject){
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);
            xhttp.onload = function(){
                if(xhttp.status == 200){
                    resolve(JSON.parse(xhttp.response));
                }
                else {
                    reject(xhttp.response);
                }
            };
            xhttp.onerror = function(){
                reject(xhttp.statusText);
            };
            xhttp.send();
        })
    }

    var promise = get('data/tweets.json');
    promise.then(function(tweets){
        console.log(tweets);
        return get('data/friends.json');
    }).then(function(friends){
        console.log(friends);
        return get('data/places.json');
    }).then(function(places){
        console.log(places);
    }).catch(function(error){
        console.log(error);
    });
    */
}