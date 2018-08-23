class DeleteUserService {
    constructor(APIService) {
        this.APIService = APIService;
    }

    deleteUser(deletedUserId) {
        for (let i = 0; i < this.APIService.usersList.length; i++) {
            if (deletedUserId === this.APIService.usersList[i].id) {
                this.APIService.usersList.splice(i, 1);
            }
        }
    }
}

DeleteUserService.$inject = ['APIService'];

usersApp.service('DeleteUserService', DeleteUserService); // eslint-disable-line no-undef