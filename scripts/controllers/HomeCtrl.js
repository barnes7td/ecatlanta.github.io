(function() {
    function HomeCtrl(Attendee) {
        let vm = this;
        
        vm.attendees = Attendee.all;
        
        vm.addAttendee = function() {
            console.log("add");
            Attendee.add(vm.newAttendee);
        }
        
    }

    angular
        .module('ECAtlSite')
        .controller('HomeCtrl', ['Attendee', HomeCtrl]);
})();
