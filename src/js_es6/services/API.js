class ClassAPIService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;

        this.usersList = [];
        this.getUsers();
    }

    getUsers() {
        // const defer = this.$q.defer();
        if (this.usersList.length === 0) {
            return this.$http.get('https://randomuser.me/api/?results=7&nat=US&seed=b')
                .then((response) => {

                    this.usersList = response.data.results.map(el => ({
                        picture: {
                            thumbnail: el.picture.thumbnail,
                            large: el.picture.large
                        },
                        name: {
                            title: el.name.title.capitalize(),
                            first: el.name.first.capitalize(),
                            last: el.name.last.capitalize()
                        },
                        location: {
                            coordinates: {
                                latitude: el.location.coordinates.latitude,
                                longitude: el.location.coordinates.longitude
                            }
                        },
                        age: el.dob.age,
                        gender: el.gender,
                        id: el.login.uuid,
                        email: el.email
                    }));

                    return this.usersList;

                });
            console.log('dupa',this.usersList)
        }
    }

    addUser(newUser) {
        this.usersList.push(newUser);

    }

    deleteUser(deletedUserId) {
        for (let i = 0; i < this.usersList.length; i++) {
            if (deletedUserId === this.usersList[i].id) {
                this.usersList.splice(i, 1);
            }
        }
    }
}

ClassAPIService.$inject = ['$http', '$q'];

usersApp.service('APIService', ClassAPIService); // eslint-disable-line no-undef