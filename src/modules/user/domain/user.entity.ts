import AggregateRoot from "../../../core/aggregate-root.ts";
import Entity from "../../../core/entity.ts";
import Identifier from "../../../core/identifier.vo.ts";
import Task from "../../task/domain/tasks.entity.ts";



interface UserProps { 
    fname:string
    lname:string
    email:string
    password:string
    tasks?: Task[]
}

export default class User extends Entity<UserProps> implements AggregateRoot{

    private constructor(props: UserProps, id?: Identifier) {
        super(props, id);
    }

    static createUser(props: UserProps, id?: string) {
        const identifier = Identifier.create(id);
        return new User(props, identifier);
    }

    getFullName(): string {
        return `${this.Props.fname} ${this.Props.lname}`;
    }

    getEmail(): string {
        return this.Props.email;
    }

    getTasks(): Task[] | undefined {
        return this.Props.tasks;
    }
    
    changePassword(newPassword: string): void {
        this.Props.password = newPassword;
        this.updateEntity();
    }

    changeEmail(newEmail: string): void {
        this.Props.email = newEmail;
        this.updateEntity();
    }

    changeFname(newFname: string): void {
        this.Props.fname = newFname;
        this.updateEntity();
    }

    changeLname(newLname: string): void {
        this.Props.lname = newLname;
        this.updateEntity();
    }
    
    static isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    
}