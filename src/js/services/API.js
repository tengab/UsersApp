usersApp.service('APIService', ['$http', function($http) { // eslint-disable-line prefer-arrow-callback, no-undef

    this.apiData = $http.get('https://randomuser.me/api/?results=7&nat=US&seed=b')
        .then((response) => {
            const gridInput = response.data.results.map((el) => {
                const rowObject = {
                    picture: {},
                    name: {},
                    location: { coordinates: {} }
                };
                rowObject.picture.thumbnail = el.picture.thumbnail;
                rowObject.picture.large = el.picture.large;
                rowObject.name.title = el.name.title.charAt(0).toUpperCase() + el.name.title.slice(1);
                rowObject.name.first = el.name.first.charAt(0).toUpperCase() + el.name.first.slice(1);
                rowObject.name.last = el.name.last.charAt(0).toUpperCase() + el.name.last.slice(1);
                rowObject.age = el.dob.age;
                rowObject.gender = el.gender;
                rowObject.id = el.login.uuid;
                rowObject.location.coordinates.latitude = el.location.coordinates.latitude;
                rowObject.location.coordinates.longitude = el.location.coordinates.longitude;
                rowObject.email = el.email;
                return rowObject;
            });
            return gridInput;
        });

    this.usersFromApi = [];

    this.usersAddedManually = [];

    this.apiData.then((data) => {
        this.usersFromApi = data;
    });

    this.usersAddedManually = [];

    this.setUsersAddedManually = (d) => {
        this.usersAddedManually = this.usersAddedManually.concat(d);
    };

    this.getUsersAddedManually = () => this.apiData;

}]);