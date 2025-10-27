import Identifier from "../../../core/identifier.vo.ts";
import Task from "../domain/tasks.entity.ts";
import TaskRepository from "./task.repository.ts";


export default class InMemoryUserRepository implements TaskRepository {
    private Tasks: Task[];
    constructor(Tasks: Task[]) {
        this.Tasks = Tasks;
    }
    save(data: Task): Promise<void> {
        this.Tasks.push(data);
        return Promise.resolve();
    }
    findById(id: Identifier): Promise<Task | null> {
        const Task = this.Tasks.find((Task) => Task.getId().getIdentifier() === id.getIdentifier());
        return Promise.resolve(Task || null);
    }

    //*TO FIX*
    
    findByEmail(email: string): Promise<Task | null> {
    //    const Task = this.Tasks.find((Task) => Task.getEmail() === email);
        return Promise.resolve(null);
    }

    update(id: Identifier, entity: Partial<Task>): Promise<void> {
       const TaskToedit = this.findById(id);
       if(!TaskToedit){
        throw new Error("Task not found");
       }
       return Promise.resolve();

    }
    delete(id: Identifier): Promise<void> {
        this.Tasks = this.Tasks.filter((Task) => Task.getId().getIdentifier() !== id.getIdentifier());
        return Promise.resolve();
    }
    findAll(): Promise<Task[]> {
        const Tasks = this.Tasks.filter((Task) => Task);
        return Promise.resolve(Tasks);
    }

}