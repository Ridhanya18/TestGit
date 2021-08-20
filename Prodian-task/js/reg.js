var formApp = angular.module('formApp',[]);
formApp.controller('formCtrl', function($scope){
    $scope.sendForm = function(){
        console.log(">>"+$scope.person.firstname);
       

    }
})