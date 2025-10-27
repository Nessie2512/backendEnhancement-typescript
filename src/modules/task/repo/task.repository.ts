import Identifier from "../../../core/identifier.vo.ts";
import RepositoryCore from "../../../core/repository.core.ts";
import Task from "../domain/tasks.entity.ts";

export default abstract class TaskRepository  implements RepositoryCore<Task>{
    abstract save(entity: Task): Promise<void>;
    abstract findAll(): Promise<Task[]>;
    abstract findById(id: Identifier): Promise<Task | null>;
    abstract findByEmail(email: string): Promise<Task | null> 
    abstract update(id: Identifier, entity: Partial<Task>): Promise<void>;
    abstract delete(id: Identifier): Promise<void>;
}