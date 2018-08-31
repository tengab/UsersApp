class UserDetailsController {
    constructor($location, $stateParams, UserListContainerService, FriendsSearchService) {

        this.$location = $location;
        this.$stateParams = $stateParams;
        this.UserListContainerService = UserListContainerService;
        this.FriendsSearchService = FriendsSearchService;

        this.fetchedUser = {};
        this.clickedUsersDetails();
    }

    clickedUsersDetails() {
        this.FriendsSearchService.friendsList = [];

        const dataToDisplay = () => {
            this.fetchedUser = _.find(this.UserListContainerService.usersList, user => (user.id === this.$stateParams.id));
            if (this.fetchedUser) {
                this.fetchedUser.nat !== 'OTHER' ? this.isMapAvailable = true : null;
            }
        };

        if (this.UserListContainerService.usersList.length) {
            dataToDisplay();
        } else {
            this.UserListContainerService.getUsers()
                .then(() => (dataToDisplay()))
                .then(() => (!this.fetchedUser ? this.$location.path('/') : null));
        }
    }

}

UserDetailsController.$inject = ['$location', '$stateParams', 'UserListContainerService', 'FriendsSearchService'];

usersApp.controller('UserDetailsController', UserDetailsController);  // eslint-disable-line no-undef