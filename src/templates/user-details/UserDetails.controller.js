class UserDetailsController {
    constructor($location, $stateParams, APIService, FriendsSearch) {

        this.$location = $location;
        this.$stateParams = $stateParams;
        this.APIService = APIService;
        this.FriendsSearch = FriendsSearch;

        this.fetchedUser = {};
        this.clickedUsersDetails();

    }

    clickedUsersDetails() {
        this.FriendsSearch.friendsList = [];
        const dataToDisplay = () => {
            for (let i = 0; i < this.APIService.usersList.length; i++) {
                if (this.APIService.usersList[i].id === this.$stateParams.id) {
                    this.fetchedUser = this.APIService.usersList[i];
                }
            }
            if ((this.fetchedUser.location.coordinates.latitude || this.fetchedUser.location.coordinates.longitude) !== 'noData') {
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

UserDetailsController.$inject = ['$location', '$stateParams', 'APIService', 'FriendsSearch'];

usersApp.controller('UserDetailsController', UserDetailsController);  // eslint-disable-line no-undef