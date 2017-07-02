(function() {
    function AdminCtrl(Attendee) {
        let vm = this;
        
        vm.attendees = Attendee.all
    }

    angular
        .module('ECAtlSite')
        .controller('AdminCtrl', ['Attendee', AdminCtrl]);
})();
