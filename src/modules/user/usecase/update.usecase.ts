import Identifier from "../../../core/identifier.vo.ts";
import User from "../domain/user.entity.ts";
import UserRepository from "../repo/user.repository.ts";

export default class UpdateUserUseCase {
    private UserRepository: UserRepository;
    constructor(Repository: UserRepository) {
        this.UserRepository = Repository;
    }

    execute(id:string, data: Partial<User>){
        const idUser = Identifier.create(id);
        return this.UserRepository.update(idUser,data);
    }
}