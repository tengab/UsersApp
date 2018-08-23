class AddUserService {
    constructor(APIService) {
        this.APIService = APIService;
    }

    addUser(newUser) {
        this.APIService.usersList.push(newUser);
    }
}

AddUserService.$inject = ['APIService'];

usersApp.service('AddUserService', AddUserService); // eslint-disable-line no-undef