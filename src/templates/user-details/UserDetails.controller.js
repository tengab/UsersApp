class UserDetailsController {
    constructor($location, $stateParams, APIService, FriendsSearchService) {

        this.$location = $location;
        this.$stateParams = $stateParams;
        this.APIService = APIService;
        this.FriendsSearchService = FriendsSearchService;

        this.fetchedUser = {};
        this.clickedUsersDetails();

    }

    clickedUsersDetails() {
        this.FriendsSearchService.friendsList = [];
        const dataToDisplay = () => {

            for (let i = 0; i < this.APIService.usersList.length; i++) {
                if (this.APIService.usersList[i].id === this.$stateParams.id) {
                    this.fetchedUser = this.APIService.usersList[i];
                }
            }
            if ((this.fetchedUser.nat) !== 'OTHER') {
                this.isMapAvailable = true;
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

UserDetailsController.$inject = ['$location', '$stateParams', 'APIService', 'FriendsSearchService'];

usersApp.controller('UserDetailsController', UserDetailsController);  // eslint-disable-line no-undef