class APIService {
    constructor($http, User) {
        this.$http = $http;
        this.User = User;
        this.usersList = [];
        this.getUsers();
    }

    getUsers() {
        if (this.usersList.length === 0) {
            return this.$http.get('https://randomuser.me/api/?results=7&seed=a')
                .then((response) => {
                    this.usersList = response.data.results.map(user => this.User.mapUser(user));
                });
        }
    }

}

APIService.$inject = ['$http', 'User'];

usersApp.service('APIService', APIService); // eslint-disable-line no-undef