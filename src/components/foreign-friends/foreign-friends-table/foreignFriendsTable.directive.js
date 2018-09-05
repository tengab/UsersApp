usersApp.directive('foreignFriendsTable', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'E',
        templateUrl: 'foreign-friends/foreign-friends-table/foreign-friends-table.html',
        controller: 'ForeignFriendsTableController',
        controllerAs: '$ctrl',
        scope: {},
        bindToController: {
            fetchedUser: '='
        }
    };
});
