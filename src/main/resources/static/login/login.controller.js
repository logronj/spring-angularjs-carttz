(function(){
    angular.module('myCartApp').controller('LoginController',['$rootScope',function($rootScope){
        var self = this;
        self.user = {username: '',password: ''};
        self.showLoginFormErrorMessage = false;
        self.login = () =>{
            if(loginFormValid()){
                alert('login test');
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