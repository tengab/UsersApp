usersApp.directive('userInfo', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'AEC',
        // template: '<h1> template </h1>',
        templateUrl: 'directives/user-info.html',
        replace: false
    };
});

usersApp.directive('userMap', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'AEC',
        // template: '<h1> template </h1>',
        templateUrl: 'directives/user-map.html',
        replace: false
    };
});