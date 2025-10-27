
import Identifier from "../../../core/identifier.vo.ts";
import UserRepository from "../repo/user.repository.ts";

export default class findByEmailUsecase {
    private UserRepository: UserRepository;
        constructor(Repository: UserRepository) {
            this.UserRepository = Repository;
        }

        execute(Email:string){
            return this.UserRepository.findByEmail(Email);
        }
}