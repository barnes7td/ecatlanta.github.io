(function() {
    function Authentication($firebaseArray) {
        let ref = firebase.database().ref().child("authentication");
        let auth = $firebaseArray(ref);
        
        let Authentication = {};
        
        Authentication.set = function(username, password) {
            let encryptPassword = sjcl.encrypt("password", password);
            let user = {username: username, password: encryptPassword};
            auth.$add(user);
        };
        
        Authentication.check = function(username, password) {
            let user = auth[0];
            let existingPassword = sjcl.decrypt("password", user.password);
            
            if (existingPassword === password && user.username === username) {
                return true;
            }
            
            return false;
        };
        
        return Authentication;
    }

    angular
        .module('ECAtlSite')
        .factory('Authentication', ['$firebaseArray', Authentication]);
})();
