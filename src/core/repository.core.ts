import Entity from "./entity.ts";
import Identifier from "./identifier.vo.ts";



export default abstract class RepositoryCore<T extends Entity<any>> {
   abstract save(data: T): Promise<void>;
   abstract findById(id: Identifier): Promise<T | null>;
    abstract findByEmail(email: string): Promise<T | null>;
   abstract delete(id:Identifier): Promise<void>;
  abstract  update(id: Identifier, entity: Partial<T>): Promise<void>;
    abstract findAll(): Promise<T[]>;
}