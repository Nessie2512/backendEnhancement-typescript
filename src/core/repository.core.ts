import Entity from "./entity.ts";
import Identifier from "./identifier.vo.ts";



export default interface RepositoryCore<T extends Entity<any>> {
    save(data: T): Promise<void>;
    findById(id: Identifier): Promise<T | null>;
    findByEmail(email: string): Promise<T | null>;
    delete(id:Identifier): Promise<void>;
    update(id: Identifier, entity: Partial<T>): Promise<void>;
    findAll(): Promise<T[]>;
}