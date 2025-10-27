import Identifier from "../../../core/identifier.vo.ts";
import User from "../domain/user.entity.ts";
import RepositoryCore from "../../../core/repository.core.ts";


export default abstract class UserRepository implements RepositoryCore<User> {
    abstract save(data: User): Promise<void> ;
    abstract findById(id: Identifier): Promise<User | null> ;
    abstract findByEmail(email: string): Promise<User | null> ;
    abstract update(id: Identifier, entity: Partial<User>): Promise<User> ;
    abstract delete(id:Identifier): Promise<void> ;
    abstract findAll(): Promise<User[]> ;

}