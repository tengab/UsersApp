class UserDetailsController {
    constructor($scope, $location, $stateParams, APIService) {
        this.$scope = $scope;
        this.$location = $location;
        this.$stateParams = $stateParams;
        this.APIService = APIService;

        this.fetchedUser = {};
        this.clickedUsersDetails();
    }

    clickedUsersDetails() {
        const dataToDisplay = () => {
            for (let i = 0; i < this.APIService.usersList.length; i++) {
                if (this.APIService.usersList[i].id === this.$stateParams.id) {
                    this.fetchedUser = this.APIService.usersList[i];
                }
            }
            if ((this.fetchedUser.location.coordinates.latitude || this.fetchedUser.location.coordinates.longitude) !== 'noData') {
                this.$scope.isMapAvailable = true;
            }
        };

        if (this.APIService.usersList.length > 0) {
            dataToDisplay();
        } else if (this.APIService.usersList.length === 0 && this.$stateParams.id.length === 36) {
            this.APIService.getUsers()
                .then(() => {
                    dataToDisplay();
                });
        } else {
            this.$location.path('/');
        }
    }
}

UserDetailsController.$inject = ['$scope', '$location', '$stateParams', 'APIService'];

usersApp.controller('UserDetailsController', UserDetailsController);  // eslint-disable-line no-undef