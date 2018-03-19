window.onload = function () {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        // console.log(http);
        // outputs the 4 ready states

        if (http.readyState == 4 && http.status == 200) {
            // console.log(JSON.parse(http.response));
        }
    }

    http.open("GET", "data/tweets.json", true); // true for async
    http.send(); // go and grab the data
    // console.log("test"); // first this will be logged due to async

    // jquery method
    $.get("data/tweets.json", function (data) {
        // console.log(data);
    });

    function handleError(jqxhr, textStatus, err){
        console.log(err);
    }

    // AJAX - callback hell pfft! Triangle!!
    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: callbackTweets,
        error: handleError
    });

    function callbackTweets(data){
        console.log(data);
        $.ajax({
            type: "GET",
            url: "data/friends.json",
            success: callbackFriends,
            error: handleError
        });
    }

    function callbackFriends(data){
        console.log(data);
        $.ajax({
            type: "GET",
            url: "data/places.json",
            success: function(data) {
                console.log(data);
            },
            error: handleError
        });
    }
};

// http object has many states
/* REQUEST's READY STATES

0 - not initialized
1 - has been set up
2 - has been sent
3 - is in progress
4 - completed

*/
