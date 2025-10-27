import Identifier from "../../../core/identifier.vo.ts";
import TaskRepository from "../repo/task.repository.ts";

export default class findByIdUsecase {
    private TaskRepository: TaskRepository;
        constructor(Repository: TaskRepository) {
            this.TaskRepository = Repository;
        }

        execute(id:string){
            const idUser = Identifier.create(id);
            return this.TaskRepository.findById(idUser);
        }
}
