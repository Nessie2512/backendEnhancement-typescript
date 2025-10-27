import Identifier from "../../../core/identifier.vo.ts";
import User from "../../user/domain/entity/user.entity.ts";
import RepositoryCore from "../../../core/repository.core.ts";


export default abstract class UserRepository implements RepositoryCore<User> {
    abstract save(data: User): Promise<void> ;
    abstract findById(id: Identifier): Promise<User | null> ;
    abstract findByEmail(email: string): Promise<User | null> ;
    abstract update(id: Identifier, entity: Partial<User>): Promise<void> ;
    abstract delete(id:Identifier): Promise<void> ;
    abstract findAll(): Promise<User[]> ;

}