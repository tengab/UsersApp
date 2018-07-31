class AddUserController {
    constructor(APIService) {
        this.APIService = APIService;
    }

    userAddForm() {

        const newUserObject = {
            picture: {
                thumbnail: '/images/nophoto_thumbnail.png',
                large: '/images/nophoto_large.png'
            },
            name: {
                first: this.addFirstName,
                last: this.addLastName,
                title: this.addTitle
            },
            location: {
                coordinates: {
                    latitude: 'noData',
                    longitude: 'noData'
                }
            },
            status: 'addedManually',
            id: Date.now().toString(),
            email: this.addEmail,
            age: this.addAge,
            gender: this.addGender
        };

        if ((this.addFirstName &&
            this.addLastName &&
            this.addTitle &&
            this.addGender &&
            this.addAge &&
            this.addEmail) !== undefined) {

            this.APIService.addUser(newUserObject);
        } else {
            alert('Fulfill all required fields');
        }
    }
}

AddUserController.$inject = ['APIService'];

usersApp.controller('AddUserController', AddUserController);  // eslint-disable-line no-undef