class UsersGridController {
    constructor(uiGridConstants, UserListContainerService, $mdDialog, Countries) {
        this.uiGridConstants = uiGridConstants;
        this.UserListContainerService = UserListContainerService;
        this.$mdDialog = $mdDialog;
        this.Countries = Countries;

        this.initGridOptions();
        if (!this.UserListContainerService.usersList.length) {
            this.UserListContainerService.getUsers().then(() => (this.gridOptions.data = this.UserListContainerService.usersList));
        }
        this.isGridHidden = true;
        this.userDataToEdit = null;
    }

    initGridOptions() {
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
                    field: 'gender',
                    // grouping: {groupPriority: 0},
                    sort: {priority: 2, direction: 'desc'}
                },
                {
                    name: 'thumbnail',
                    field: 'picture.thumbnail',
                    cellClass: 'cell-content',
                    cellTemplate: '<img ng-src="{{grid.getCellValue(row, col)}}">'
                },
                {
                    name: 'first name',
                    field: 'name.first'
                },
                {
                    name: 'last name',
                    field: 'name.last',
                    cellTemplate: 'users/directives/users-grid/cell-templates/last-name-cell.html'
                },
                {
                    name: 'nationality',
                    field: 'natFullName'
                },
                {
                    field: 'age'
                },
                {
                    name: 'actions',
                    cellClass: 'cell-content',
                    cellTemplate: 'users/directives/users-grid/cell-templates/action-buttons.html'
                }
            ],
            data: this.UserListContainerService.usersList,
            onRegisterApi: (gridApi) => {
                this.gridApi = gridApi;
                this.gridApi.grid.registerDataChangeCallback(() => {
                    this.gridApi.treeBase.expandAllRows();
                });
            }
        };
    }

    closeDialog() {
        this.$mdDialog.hide();
    }

    deleteUser(row) {
        this.UserListContainerService.deleteUser(row.entity.id);
    }

    // editUser(row) {
    //     // console.log('row', row.entity)
    //     row.entity.name.first = 'Dupek'
    //     row.entity.name.last = 'Słupek'
    //     console.log(this.UserListContainerService.usersList)
    // }

    setCountryFullName(countryCode) {
        return this.Countries.getCountryFullName(countryCode);
    }

    setGender() {
        switch (this.userDataToEdit.name.title) {
            case 'Mr':
            case 'Mister':
                return this.userDataToEdit.gender = 'male';
            case 'Mrs':
            case 'Miss':
                return this.userDataToEdit.gender = 'female';
            default:
                return this.userDataToEdit.gender = null;
        }
    }

    showDialogEditUserData(row) {
        this.userDataToEdit = row.entity;
        this.$mdDialog.show({
            controller: () => this,
            controllerAs: '$ctrl',
            templateUrl: 'users/directives/users-grid/dialog/edit-user-data.html'
        });
    }

}

UsersGridController.$inject = ['uiGridConstants', 'UserListContainerService', '$mdDialog', 'Countries'];

usersApp.controller('UsersGridController', UsersGridController);  // eslint-disable-line no-undef