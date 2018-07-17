usersApp.controller('usersController', ['$scope', 'uiGridConstants', 'APIService', function($scope, uiGridConstants, APIService) { // eslint-disable-line prefer-arrow-callback, no-undef

    $scope.gridOptions = {
        enableSorting: true,
        rowHeight: 50,
        minRowsToShow: 7,
        showTreeExpandNoChildren: true,
        showHeader: true,
        columnDefs: [
            {
                name: 'Thumbnail',
                field: 'picture.thumbnail', cellClass: 'thumbnailCell',
                cellTemplate: '<img ng-src=\'{{grid.getCellValue(row, col)}}\'>'
            },
            { name: 'First name', field: 'name.first', cellClass: 'thumbnailCell' },
            {
                name: 'last name',
                field: 'name.last',
                cellClass: 'thumbnailCell',
                cellTemplate: '<a ng-click="grid.appScope.cellClicked(row,col)" ui-sref="user-details({id: row.entity.id })" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</a>'
            },
            { field: 'age', cellClass: 'thumbnailCell' },
            { field: 'gender', grouping: { groupPriority: 1 }, sort: { priority: 0, direction: 'desc' }, cellClass: 'thumbnailCell' }
        ]
    };
    APIService.apiData.then((data) => {
        $scope.gridOptions.data = data.concat(APIService.usersAddedManually);
    });

    $scope.gridOptions.onRegisterApi = (gridApi) => {
        $scope.gridApi = gridApi;

        $scope.gridApi.grid.registerDataChangeCallback(() => {
            $scope.gridApi.treeBase.expandAllRows();
        });
    };

    $scope.gridOptions.virtualizationThreshold = '5000';
    $scope.gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
    $scope.noPhotoThumbnail = '/images/nophoto_thumbnail.png';
    $scope.noPhotoLarge = '/images/nophoto_large.png';


    $scope.userAdd = () => {
        if (($scope.addFirstName && $scope.addLastName && $scope.addTitle && $scope.addGender && $scope.addAge && $scope.addEmail) != undefined) {
            addUserData();
        } else {
            alert('Fulfill all required fields');
        }
    };

    addUserData = () => {
        const newUserObject = {
            picture: {},
            name: {},
            location: { coordinates: {} }
        };
        newUserObject.status = 'addedManually';
        newUserObject.id = Date.now().toString();
        newUserObject.name.first = $scope.addFirstName;
        newUserObject.name.last = $scope.addLastName;
        newUserObject.name.title = $scope.addTitle;
        newUserObject.email = $scope.addEmail;
        newUserObject.age = $scope.addAge;
        newUserObject.gender = $scope.addGender;
        newUserObject.picture.thumbnail = $scope.noPhotoThumbnail;
        newUserObject.picture.large = $scope.noPhotoLarge;
        newUserObject.location.coordinates.latitude = 'noData';
        newUserObject.location.coordinates.longitude = 'noData';

        APIService.setUsersAddedManually(newUserObject);

        $scope.gridOptions.data = APIService.usersFromApi.concat(APIService.usersAddedManually);
    };
}]);