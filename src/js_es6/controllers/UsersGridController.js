class UsersGridController {
    constructor(uiGridConstants, APIService) {


        this.uiGridConstants = uiGridConstants;
        this.APIService = APIService;

        this.gridDataDisplay();
    }

    gridDataDisplay() {
        this.gridOptions = {
            enableSorting: true,
            rowHeight: 50,
            minRowsToShow: 7,
            showTreeExpandNoChildren: true,
            showHeader: true,
            virtualizationThreshold: '5000',
            enableHorizontalScrollbar: this.uiGridConstants.scrollbars.NEVER,
            columnDefs: [
                {
                    name: 'Thumbnail',
                    field: 'picture.thumbnail', cellClass: 'thumbnailCell',
                    cellTemplate: `<img ng-src='{{grid.getCellValue(row, col)}}'>`
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
                }
            ]
        };
        if (this.APIService.usersList.length === 0) {
            this.APIService.getUsers().then(() => {
                this.gridOptions.data = this.APIService.usersList;
            });
        } else {
            this.gridOptions.data = this.APIService.usersList;
        }

        this.gridOptions.onRegisterApi = (gridApi) => {
            this.gridApi = gridApi;

            this.gridApi.grid.registerDataChangeCallback(() => {
                this.gridApi.treeBase.expandAllRows();
            });
        };
    }

    deleteUser(row) {
        this.APIService.deleteUser(row.entity.id);
    }
}

UsersGridController.$inject = ['uiGridConstants', 'APIService'];

usersApp.controller('UsersGridController', UsersGridController);  // eslint-disable-line no-undef