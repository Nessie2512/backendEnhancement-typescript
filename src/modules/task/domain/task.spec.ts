import {  describe,expect,it } from "vitest";
import  User  from "../../user/domain/user.entity.ts";
import Task from "./tasks.entity.ts";

describe("Test Task entity",()=>{

        const user = User.createUser({
            fname: "Test",
            lname: "User",
            email: "user@gmail.com",
            password: "password123"
        });

        const task = Task.createTask({
            title: "Test Task",
            description: "This is a test task",
            dueDate: new Date(),
            User: user
        });

    

    it("should add a phase to the task",()=>{
        task.addPhase("Phase 1");
        const phases = task.getPhases();
        expect(phases[0]?.description).toBe("Phase 1");
    })


     it("should add new task", ()=>{
            const user:User = User.createUser({lname:"John", fname:"Doe", email:"johndoe@gmail.com",password:"password123"});
            const task = Task.createTask({title: "Test Task",description: "This is a test task",dueDate:new Date(),User:user})
            task.addPhase("1 Phase")
            expect(task.getPhases()[0]?.description).toBe("1 Phase")
        })

        it("should get due date",()=>{
            const dueDate = new Date("2024-12-31");
            const task = Task.createTask({
                title: "Due Date Test",
                description: "Testing due date",
                dueDate: dueDate,
                User: user
            });
            expect(task.getDueDate()).toBe(dueDate);
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