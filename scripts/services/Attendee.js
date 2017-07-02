(function() {
    function Attendee($firebaseArray) {
        let ref = firebase.database().ref().child("attendees");
        let attendees = $firebaseArray(ref);
        
        let Attendee = {};
        
        Attendee.users = [];
        Attendee.all = attendees;
        
        Attendee.add = function(userName) {
            Attendee.users.push(userName);
            attendees.$add(userName);
        }
        
        return Attendee;
    }

    angular
        .module('ECAtlSite')
        .factory('Attendee', ['$firebaseArray', Attendee]);
})();
