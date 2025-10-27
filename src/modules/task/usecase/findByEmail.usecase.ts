import TaskRepository from "../repo/task.repository.ts";


export default class findByEmailTaskUsecase {
    private TaskRepository: TaskRepository;
        constructor(Repository: TaskRepository) {
            this.TaskRepository = Repository;
        }

        execute(Email:string){
            return this.TaskRepository.findByEmail(Email);
        }
}