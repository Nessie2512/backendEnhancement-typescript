import User from "../domain/entity/user.entity.ts";
import UserRepository from "../repo/user.repository.ts";

export default class FindAllUserUseCase {
    private UserRepository: UserRepository;
    constructor(Repository: UserRepository) {
        this.UserRepository = Repository;
    }

    execute(): Promise<User[]> {
        return this.UserRepository.findAll();
    }
}