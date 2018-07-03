var usersApp = angular.module('usersApp')


usersApp.controller('usersController', ['$scope', '$http', 'passingUserService', function ($scope, $http, passingUserService) {
    $scope.message = 'Users list'
    $scope.users = []
    $scope.image = ''

    $scope.cellClicked = function (row, col) {
        console.log(row.entity)
    }

    $scope.passingUserService = passingUserService.userArray

    console.log('from service', $scope.passingUserService)

    $scope.gridOptions = {
        enableSorting: true,
        rowHeight: 50,
        columnDefs: [
            { field: 'thumbnail', enableSorting: false, cellClass: 'thumbnailCell', cellTemplate: "<img ng-src=\"{{grid.getCellValue(row, col)}}\">" },
            { field: 'firstName', enableSorting: false, cellClass: 'thumbnailCell' },
            { field: 'lastName', enableSorting: false, cellClass: 'thumbnailCell', cellTemplate: '<div ng-click="grid.appScope.cellClicked(row,col)" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            { field: 'age', enableSorting: false, cellClass: 'thumbnailCell' },
            { field: 'gender', cellClass: 'thumbnailCell' }
        ],

    };



    $http({
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

        $scope.users = gridInput
        $scope.gridOptions = {
            data: gridInput
        };
    },
        function (error) {
            console.log('data ' + data)
            console.log('status ' + status)
        })

}
])



