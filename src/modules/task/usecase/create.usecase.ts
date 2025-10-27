import Task, { TasksProps } from "../domain/tasks.entity.ts";
import TaskRepository from "../repo/task.repository.ts";


export default class CreateUserUseCase {
    private TaskRepository: TaskRepository;
    constructor(Repository: TaskRepository) {
        this.TaskRepository = Repository;
    }

    execute(Taskdata:TasksProps){
        const TaskCreated = Task.createTask(Taskdata);
        this.TaskRepository.save(TaskCreated);
    }
}