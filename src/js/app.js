var usersApp = angular.module('usersApp', ['ui.router', 'ui.grid', 'ui.grid.autoResize'])


usersApp.config(['$stateProvider', function ($stateProvider) {

    var users = {
        name: 'users',
        url: '/',
        templateUrl: 'views/users.html',
        controller: 'usersController'
    }

    var userDetails = {
        name: 'user-details',
        url: '/user-details/:id',
        templateUrl: 'views/user-details.html',
        controller: function ($scope, $stateParams) {
            console.log($stateParams)

            $scope.id = $stateParams.id
            console.log($scope)
        }
    }

    $stateProvider.state(users);
    $stateProvider.state(userDetails);

}
])

usersApp.service('passingUserService', function ($http) {
   
var something = this

    
      this.userArray = $http({
        method: 'GET',
        url: 'https://randomuser.me/api/?results=10'
    }).then(function (response) {

        let gridData = response.data.results

        let gridInput = gridData.map((el) => {
            let rowObject = {}
            rowObject.thumbnail = el.picture.thumbnail
            rowObject.largePicture = el.picture.large
            rowObject.firstName = el.name.first.charAt(0).toUpperCase() + el.name.first.slice(1)
            rowObject.lastName = el.name.last.charAt(0).toUpperCase() + el.name.last.slice(1)
            rowObject.age = el.dob.age
            rowObject.gender = el.gender
            rowObject.id = el.login.uuid
            return rowObject
        })
       return gridInput
    },
        function (error) {
            console.log('data ' + data)
            console.log('status ' + status)
        })
       
})