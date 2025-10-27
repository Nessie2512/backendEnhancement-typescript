import Identifier from "../../../core/identifier.vo.ts";
import UserRepository from "../repo/user.repository.ts";

export default class findByIdUsecase {
    private UserRepository: UserRepository;
        constructor(Repository: UserRepository) {
            this.UserRepository = Repository;
        }

        execute(id:string){
            const idUser = Identifier.create(id);
            return this.UserRepository.findById(idUser);
        }
}
