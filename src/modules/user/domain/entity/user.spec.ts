import { describe,expect,it } from "vitest";
import User from "./user.entity.ts";
import Task from "../../task/domain/tasks.entity.ts";

describe("User", () => {
 
it("should create a user instance", () => {
    const user = User.createUser({lname:"John", fname:"Doe", email:"johndoe@gmail.com",password:"password123"});
    expect(user).toBeInstanceOf(User);
  });

    it("should return full name", () => {
    const user:User = User.createUser({lname:"John", fname:"Doe", email:"johndoe@gmail.com",password:"password123"});
    expect(user.getFullName()).toBe("Doe John");
  });

  it("should validate email format", () => {
    expect(User.isEmailValid("invalid-email")).toBe(false);
   })

    it("should get user email", () => {
    const user:User = User.createUser({lname:"John", fname:"Doe", email:"johndoe@gmail.com",password:"password123"});
    expect(user.getEmail()).toBe("johndoe@gmail.com");
    });

    it("User tasks should return undefined if no tasks are assigned", () => {   
        const user:User = User.createUser({lname:"John", fname:"Doe", email:"johndoe@gmail.com",password:"password123"});
        expect(user.getTasks()).toBeUndefined();
    });

    it("should add new task", ()=>{
        const user:User = User.createUser({lname:"John", fname:"Doe", email:"johndoe@gmail.com",password:"password123"});
        const task = Task.createTask({title: "Test Task",description: "This is a test task",dueDate:new Date(),User:user})
        task.addPhase("1 Phase")
        expect(task.getPhases()[0]?.description).toBe("1 Phase")
    })


    it(" shoult not mark task as completed",()=>{
        const user:User = User.createUser({lname:"John", fname:"Doe", email:"johndoe@gmail.com",password:"password123"});
        const task = Task.createTask({title: "Test Task",description: "This is a test task",dueDate:new Date(),User:user})
        task.addPhase("1 Phase")
        task.markPhaseAsCompleted(1)
        task.markAsCompleted()
        expect(task.isCompleted()).toBe(false)
    })


    it("shoult mark task as completed",()=>{
        const user:User = User.createUser({lname:"John", fname:"Doe", email:"johndoe@gmail.com",password:"password123"});
        const task = Task.createTask({title: "Test Task",description: "This is a test task",dueDate:new Date(),User:user})
        task.addPhase("1 Phase")
        task.markPhaseAsCompleted(0)
        task.markAsCompleted()
        expect(task.isCompleted()).toBe(true)
    })

    



})