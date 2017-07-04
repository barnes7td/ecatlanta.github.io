(function() {
    function AdminCtrl(Attendee) {
        let vm = this;
        
        vm.attendees = Attendee.all
        
        vm.attendeesPresent = function(date) {
            let count = 0;
            
            var date = new Date(date)
            vm.attendees.forEach(function(attendee) {
                var arrivalDate = new Date(attendee.arrivalDate)
                var departureDate = new Date(attendee.departureDate)
                if (arrivalDate <= date && departureDate >= date) {
                    count++;
                }
            })
            
            return count;
        }
    }

    angular
        .module('ECAtlSite')
        .controller('AdminCtrl', ['Attendee', AdminCtrl]);
})();
