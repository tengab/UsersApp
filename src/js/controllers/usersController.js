usersApp.controller('usersController', ['$scope', 'uiGridConstants', 'APIService', function ($scope, uiGridConstants, APIService) { // eslint-disable-line prefer-arrow-callback, no-undef

    $scope.gridOptions = {
        enableSorting: true,
        rowHeight: 50,
        minRowsToShow: 7,
        showTreeExpandNoChildren: true,
        showHeader: true,
        virtualizationThreshold: '5000',
        enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
        columnDefs: [
            {
                name: 'Thumbnail',
                field: 'picture.thumbnail', cellClass: 'thumbnailCell',
                cellTemplate: '<img ng-src=\'{{grid.getCellValue(row, col)}}\'>'
            },
            {name: 'First name', field: 'name.first', cellClass: 'thumbnailCell'},
            {
                name: 'last name',
                field: 'name.last',
                cellClass: 'thumbnailCell',
                cellTemplate: 'directives/last-name-cell.html'
            },
            {field: 'age', cellClass: 'thumbnailCell'},
            {
                field: 'gender',
                grouping: {groupPriority: 1},
                sort: {priority: 0, direction: 'desc'},
                cellClass: 'thumbnailCell'
            },
            {
                name: 'delete user',
                cellClass: 'thumbnailCell',
                cellTemplate: 'directives/delete-button.html'
            },
        ]
    };

    APIService.apiData.then(() => {
        $scope.gridOptions.data = APIService.usersFromApi.concat(APIService.usersAddedManually);
    });

    $scope.gridOptions.onRegisterApi = (gridApi) => {
        $scope.gridApi = gridApi;

        $scope.gridApi.grid.registerDataChangeCallback(() => {
            $scope.gridApi.treeBase.expandAllRows();
        });
    };

    $scope.userAdd = () => {
        if (($scope.addFirstName && $scope.addLastName && $scope.addTitle && $scope.addGender && $scope.addAge && $scope.addEmail) !== undefined) {
            addUserData();
        } else {
            alert('Fulfill all required fields');
        }
    };

    addUserData = () => {
        const newUserObject = {
            picture: {},
            name: {},
            location: {coordinates: {}}
        };
        newUserObject.status = 'addedManually';
        newUserObject.id = Date.now().toString();
        newUserObject.name.first = $scope.addFirstName;
        newUserObject.name.last = $scope.addLastName;
        newUserObject.name.title = $scope.addTitle;
        newUserObject.email = $scope.addEmail;
        newUserObject.age = $scope.addAge;
        newUserObject.gender = $scope.addGender;
        newUserObject.picture.thumbnail = '/images/nophoto_thumbnail.png';
        newUserObject.picture.large = '/images/nophoto_large.png';
        newUserObject.location.coordinates.latitude = 'noData';
        newUserObject.location.coordinates.longitude = 'noData';

        APIService.setUsersAddedManually(newUserObject);

        $scope.gridOptions.data = $scope.gridOptions.data.concat(APIService.usersAddedManually);
    };

    $scope.cellClicked = (row) => {

        for (let i = 0; i < $scope.gridOptions.data.length; i++) {
            if (row.entity.id === $scope.gridOptions.data[i].id) {
                $scope.gridOptions.data.splice(i, 1)
            }
        }

    };
}]);