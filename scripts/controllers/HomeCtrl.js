(function() {
    function HomeCtrl(Attendee, $cookies, $scope) {
        let vm = this;
        
        vm.attendees = Attendee.all;
        vm.inFormMode = false;
        vm.newAttendee = {};
        
        init();
        
        vm.switchRSVPForm = function() {
            let registered = $cookies.get("ecatlanta2017registered");
            console.log(registered);
            registered ? vm.isRegistered = true : null;
            
            vm.inFormMode = !vm.inFormMode;
        }
        
        vm.addAttendee = function() {
            vm.newAttendee.arrivalDate = vm.newAttendee.arrivalDate.getTime();
            vm.newAttendee.departureDate = vm.newAttendee.departureDate.getTime();
            console.log(vm.newAttendee);
            
            Attendee.add(vm.newAttendee);
            $cookies.put("ecatlanta2017registered", true);
            vm.newAttendee = "";
            vm.inFormMode = false;
            vm.isRegistered = true;
        }
        
        function init() {
            checkCookiesForRSVP();
        }
        
        function checkCookiesForRSVP() {
            let registered = $cookies.get("ecatlanta2017registered");
            registered ? vm.isRegistered = true : vm.isRegistered = false;
            console.log(vm.isRegistered);
            // debugger;
        }
        
    }

    angular
        .module('ECAtlSite')
        .controller('HomeCtrl', ['Attendee', '$cookies', '$scope', HomeCtrl]);
})();
