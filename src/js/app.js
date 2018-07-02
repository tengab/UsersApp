angular
    .module('usersApp', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        var users = {
            name: 'hello',
            url: '/',
            templateUrl: 'views/users.html',
            controller: 'usersController'
        }

        var userDetails = {
            name: 'about',
            url: '/user-details',
            templateUrl: 'views/user-details.html',
            controller: 'usersDetailsController'
        }

        $stateProvider.state(users);
        $stateProvider.state(userDetails);

    }
    ])