class APIService {
    constructor($http, UserService) {
        this.$http = $http;
        this.UserService = UserService;
        this.usersList = [];
        this.getUsers();
    }

    getUsers() {
        if (this.usersList.length === 0) {
            return this.$http.get('https://randomuser.me/api/?results=7&seed=a')
                .then((response) => {
                    this.usersList = response.data.results.map(user => this.UserService.mapUser(user));
                });
        }
    }

}

APIService.$inject = ['$http', 'UserService'];

usersApp.service('APIService', APIService); // eslint-disable-line no-undef