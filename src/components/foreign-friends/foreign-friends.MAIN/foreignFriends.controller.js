class ForeignFriendsController {
    constructor(UserListContainerService, $stateParams, Countries, GetForeignFriendsService, RandomCountriesList) {
        this.UserListContainerService = UserListContainerService;
        this.$stateParams = $stateParams;
        this.Countries = Countries;
        this.GetForeignFriendsService = GetForeignFriendsService;
        this.RandomCountriesList = RandomCountriesList;

        this.fetchedUser = {};
        this.getFetchedUser();

    }

    getFetchedUser() {
        const dataToDisplay = () => {
            this.fetchedUser = _.find(this.UserListContainerService.usersList, user => (user.id === this.$stateParams.id));
        };

        if (this.UserListContainerService.usersList.length) {
            dataToDisplay();
        } else {
            this.UserListContainerService.getUsers()
                .then(() => (dataToDisplay()));
        }
    }

}

ForeignFriendsController.$inject = ['UserListContainerService', '$stateParams', 'Countries', 'GetForeignFriendsService', 'RandomCountriesList'];

usersApp.controller('ForeignFriendsController', ForeignFriendsController);  // eslint-disable-line no-undef