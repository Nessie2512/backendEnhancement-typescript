import type { TasksProps } from "../domain/tasks.entity.ts"
import Task from "../domain/tasks.entity.ts";
import TaskRepository from "../repo/task.repository.ts";


export default class CreateTaskUseCase {
    private TaskRepository: TaskRepository;
    constructor(Repository: TaskRepository) {
        this.TaskRepository = Repository;
    }

    execute(Taskdata:TasksProps){
        const TaskCreated = Task.createTask(Taskdata);
        this.TaskRepository.save(TaskCreated);
    }
}