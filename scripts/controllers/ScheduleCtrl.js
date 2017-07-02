(function() {
    function ScheduleCtrl(Event) {
        let vm = this;
        
        vm.events = Event.all;
        
        vm.addEvent = function(event) {
            console.log(event);
            Event.add(event);
        }
    }

    angular
        .module('ECAtlSite')
        .controller('ScheduleCtrl', ['Event', ScheduleCtrl]);
})();
