class DeleteUserService {
    constructor(APIService) {
        this.APIService = APIService;
    }

    deleteUser(deletedUserId) {

        return this.APIService.usersList.splice(this.APIService.usersList.findIndex(el => el.id === deletedUserId), 1);

    }
}

DeleteUserService.$inject = ['APIService'];

usersApp.service('DeleteUserService', DeleteUserService); // eslint-disable-line no-undef