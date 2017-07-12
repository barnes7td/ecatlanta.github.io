(function() {
    function AdminCtrl($cookies, Authentication, Attendee) {
        let vm = this;
        
        vm.authenticated = false;
        vm.session = {};
        vm.session.error = false;
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
        
        vm.authenticate = function() {
            if (Authentication.check(vm.session.username, vm.session.password)) {
                vm.authenticated = true;
            } else {
                vm.session.error = true;
            }
        }
    }

    angular
        .module('ECAtlSite')
        .controller('AdminCtrl', ['$cookies', 'Authentication', 'Attendee', AdminCtrl]);
})();
