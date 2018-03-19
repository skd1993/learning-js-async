// generators

window.onload = function(){

    /*
    function* gen(){
        // yield pauses
        var x = yield 10;
        console.log(x);
    }

    var myGen = gen();
    // myGen.next(); // starts the gen code
    console.log(myGen.next());
    console.log(myGen.next(5));
    */

    genWrap(function*(){
        var tweets = yield $.get('data/tweets.json');
        console.log(tweets);
        var friends = yield $.get('data/friends.json');
        console.log(friends);
        var places = yield $.get('data/places.json');
        console.log(places);
    });

    function genWrap(generator){
        var gen = generator();

        function handle(yielded){
            if(!yielded.done){
                yielded.value.then(function(data){
                    return handle(gen.next(data));
                })
            }
        }

        return handle(gen.next());
    }

}