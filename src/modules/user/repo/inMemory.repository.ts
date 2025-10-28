import Identifier from "../../../core/identifier.vo.ts";
import User from "../domain/entity/user.entity.ts";
import UserRepository from "./user.repository.ts";

export default class InMemoryUserRepository implements UserRepository {
    private Users: User[];
    constructor(users: User[]) {
        this.Users = users;
    }
    save(data: User): Promise<void> {
        this.Users.push(data);
        return Promise.resolve();
    }
    findById(id: Identifier): Promise<User | null> {
        const User = this.Users.find((user) => user.getId().getIdentifier() === id.getIdentifier());
        return Promise.resolve(User || null);
    }
    findByEmail(email: string): Promise<User | null> {
       const user = this.Users.find((user) => user.getEmail() === email);
        return Promise.resolve(user || null);
    }
    update(id: Identifier, entity: Partial<User>): Promise<void> {
       const UserToedit = this.findById(id);
       if(!UserToedit){
        throw new Error("User not found");
       }
       return Promise.resolve();

    }
    delete(id: Identifier): Promise<void> {
        this.Users = this.Users.filter((user) => user.getId().getIdentifier() !== id.getIdentifier());
        return Promise.resolve();
    }
    findAll(): Promise<User[]> {
        const users = this.Users.filter((user) => user);
        return Promise.resolve(users);
    }

}