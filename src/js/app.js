const usersApp = angular.module('usersApp', ['ui.router', 'ui.grid', 'ui.grid.autoResize']);

usersApp.config(['$stateProvider', ($stateProvider) => {

    $stateProvider.state({
        name: 'users',
        url: '/',
        templateUrl: 'views/users.html',
        controller: 'usersController'
    })
    .state({
        name: 'user-details',
        url: '/user-details/:id',
        templateUrl: 'views/user-details.html',
        controller: ($scope, $stateParams) => {
            $scope.id = $stateParams.id;
        }
    });
}
]);

usersApp.service('passingUserService', function ($http) { // eslint-disable-line

    this.userArray = $http({
        method: 'GET',
        url: 'https://randomuser.me/api/?results=10'
    }).then((response) => {

        const gridData = response.data.results;

        const gridInput = gridData.map((el) => {
            const rowObject = {};
            rowObject.thumbnail = el.picture.thumbnail;
            rowObject.largePicture = el.picture.large;
            rowObject.firstName = el.name.first.charAt(0).toUpperCase() + el.name.first.slice(1);
            rowObject.lastName = el.name.last.charAt(0).toUpperCase() + el.name.last.slice(1);
            rowObject.age = el.dob.age;
            rowObject.gender = el.gender;
            rowObject.id = el.login.uuid;
            return rowObject;
        });
        return gridInput;
    },
    (error) => {});
});