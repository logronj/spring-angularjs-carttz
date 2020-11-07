(function(){
    angular.module('myCartApp').controller('LoginController',['$rootScope','Utilities',function($rootScope, Utilities){
        var self = this;
        self.user = {username: '',password: ''};
        self.showLoginFormErrorMessage = false;
        self.login = () =>{
            if(loginFormValid()){
                Utilities.popSuccess('Login Test Only');
                console.log(self.showLoginFormErrorMessage);
            }else{
                self.showLoginFormErrorMessage = true;
            }
        }

        const loginFormValid = () =>{
            return (!$rootScope.dataIsNullOrEmpty(self.user.username) && !$rootScope.dataIsNullOrEmpty(self.user.password));
        }


    }]);
})();