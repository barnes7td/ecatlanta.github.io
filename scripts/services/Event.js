(function() {
    function Event($firebaseArray) {
        let ref = firebase.database().ref().child("events");
        let events = $firebaseArray(ref);
        
        let Event = {};
        
        Event.all = events;
        
        Event.add = function(event) {
            events.$add(event);
        }
        
        return Event;
    }

    angular
        .module('ECAtlSite')
        .factory('Event', ['$firebaseArray', Event]);
})();
