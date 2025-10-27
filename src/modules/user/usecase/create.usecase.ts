import User, { UserProps } from "../domain/user.entity.ts";
import UserRepository from "../repo/user.repository.ts";

export default class CreateUserUseCase {
    private UserRepository: UserRepository;
    constructor(Repository: UserRepository) {
        this.UserRepository = Repository;
    }

    execute(userdata:UserProps){
        const UserCreated = User.createUser(userdata);
        this.UserRepository.save(UserCreated);
    }
}