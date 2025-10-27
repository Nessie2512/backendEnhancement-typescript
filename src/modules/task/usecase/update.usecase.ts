import Identifier from "../../../core/identifier.vo.ts";
import Task from "../domain/tasks.entity.ts";
import TaskRepository from "../repo/task.repository.ts";


export default class UpdateTaskUseCase {
    private TaskRepository: TaskRepository;
    constructor(Repository: TaskRepository) {
        this.TaskRepository = Repository;
    }

    execute(id:string, data: Partial<Task>){
        const idUser = Identifier.create(id);
        return this.TaskRepository.update(idUser,data);
    }
}