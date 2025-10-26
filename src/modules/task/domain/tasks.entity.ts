import Entity from "../../../core/entity.ts";
import Identifier from "../../../core/identifier.vo.ts";
import User from "../../user/domain/user.entity.ts";

export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type phase = {description:string, phaseno:number, completed:boolean}


interface TasksProps { 
    title: string
    description: string
    status: TaskStatus 
    completed: boolean
    dueDate: Date
    User: User
    phases: phase[]
}


export default class Task extends Entity<TasksProps> {

    private constructor(props: TasksProps, id?: Identifier) {
        super(props, id);
    }

    static createTask(props: TasksProps, id?: string) {
        const identifier = Identifier.create(id);
        return new Task(props, identifier);
    }

    addPhase(description: string): void {
        const phase: phase = {description: description, phaseno: this.Props.phases.length + 1, completed: false};
        if(!this.Props.phases.includes(phase))
        this.Props.phases.push(phase);
        this.updateEntity();
    }

    markPhaseAsCompleted(phaseno: number): void {
        const phase = this.Props.phases.find(p => p.phaseno === phaseno);
        if (phase) {
            phase.completed = true;
            this.updateEntity();
        }
    }
    
    getTitle(): string {
        return this.Props.title;
    }   

    getDescription(): string {
        return this.Props.description;
    }

    getStatus(): TaskStatus {
        return this.Props.status;
    }

    markAsCompleted(): void {
        const notCompletedPhases = this.Props.phases.filter(phase => !phase.completed);
        if (notCompletedPhases.length < 0)
        this.Props.status === 'completed'
        this.Props.completed = true;
        this.updateEntity();
    }
    
    isCompleted(): boolean {
        return this.Props.completed;
    }


}   