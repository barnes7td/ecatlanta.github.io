(function() {
    function Attendee($firebaseArray) {
        let ref = firebase.database().ref().child("attendees");
        let attendees = $firebaseArray(ref);
        
        let Attendee = {};
        
        Attendee.users = [];
        Attendee.all = attendees;
        
        Attendee.add = function(user) {
            Attendee.users.push(user);
            attendees.$add(user);
        }
        
        return Attendee;
    }

    angular
        .module('ECAtlSite')
        .factory('Attendee', ['$firebaseArray', Attendee]);
})();
