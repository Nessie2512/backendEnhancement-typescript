import Task from "../domain/tasks.entity.ts";
import TaskRepository from "../repo/task.repository.ts";


export default class DeleteUserUseCase {
    private TaskRepository: TaskRepository;
    constructor(Repository: TaskRepository) {
        this.TaskRepository = Repository;
    }

    execute(): Promise<Task[]> {
        return this.TaskRepository.findAll();
    }
}