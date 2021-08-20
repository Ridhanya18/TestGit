var employeeApp = angular.module('employeeApp',[]);
employeeApp.controller('employeeCtrl', function($scope){
    $scope.employeeList = [
        {
            "id" : 1,
            "name" : "Zara",
            "address" : "Dindigul"
        },
        {
            "id" : 2,
            "name" : "zoya",
            "address" : "palani"
        },
        {
            "id" : 3,
            "name" : "dora",
            "address" : "Ottanchanthiram"
        },
        {
            "id" : 4,
            "name" : "bujji",
            "address" : "Udumalaipettai"
        },
        {
            "id" : 5,
            "name" : "Ben",
            "address" : "Pollachi"
        },

    ]

    $scope.addEmployee = function(){
        console.log($scope.emp);
        $scope.employeeList.push($scope.emp);

    }
})