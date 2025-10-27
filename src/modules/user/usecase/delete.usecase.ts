
import Identifier from "../../../core/identifier.vo.ts";
import UserRepository from "../repo/user.repository.ts";

export default class DeleteUserUseCase {
    private UserRepository: UserRepository;
    constructor(Repository: UserRepository) {
        this.UserRepository = Repository;
    }

    execute(id:string){
        const idUser = Identifier.create(id);
        this.UserRepository.delete(idUser);
    }
}