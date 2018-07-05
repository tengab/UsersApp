const usersApp = angular.module('usersApp', ['ui.router', 'ui.grid', 'ui.grid.autoResize', 'ngMap']);

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
        controller: 'userDetailsController'
    });
}
]);

usersApp.service('passingUserService', function ($http) { // eslint-disable-line

    this.userArray = $http({
        method: 'GET',
        url: 'https://randomuser.me/api/?results=10&nat=US&seed=abc'
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
            rowObject.id = el.id.value;
            return rowObject;
        });
        return gridInput;
    },
    (error) => {});
});

usersApp.service('idService', function () { // eslint-disable-line
        
      this.gridUpdate = 
    {
        enableSorting: true,
        rowHeight: 50,
        columnDefs: [
            { field: 'thumbnail', enableSorting: false, cellClass: 'thumbnailCell', cellTemplate: '<img ng-src=\'{{grid.getCellValue(row, col)}}\'>' },
            { field: 'firstName', enableSorting: false, cellClass: 'thumbnailCell' },
            { field: 'lastName',
                enableSorting: false,
                cellClass: 'thumbnailCell',
                cellTemplate: '<a ng-click="grid.appScope.cellClicked(row,col)" ui-sref="user-details({id: row.entity.id })" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</a>' },
            { field: 'age', enableSorting: false, cellClass: 'thumbnailCell' },
            { field: 'gender', cellClass: 'thumbnailCell' }
        ]
        
    };
    
  
   
});

// apiKey: ('AIzaSyByYJ0xFVKhi5Ro8jp1600xtlI5bFr8VnE')