import Identifier from "../../../core/identifier.vo.ts";
import User from "../domain/user.entity.ts";
import UserRepository from "../repo/user.repository.ts";

export default class DeleteUserUseCase {
    private UserRepository: UserRepository;
    constructor(Repository: UserRepository) {
        this.UserRepository = Repository;
    }

    execute(): Promise<User[]> {
        return this.UserRepository.findAll();
    }
}