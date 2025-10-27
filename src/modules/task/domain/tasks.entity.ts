import Entity from "../../../core/entity.ts";
import Identifier from "../../../core/identifier.vo.ts";
import User from "../../user/domain/user.entity.ts";

export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type phase = {description:string, phaseno:number, completed:boolean}


export interface TasksProps { 
    title: string
    description: string
    dueDate: Date
    User: User
    
}


export default class Task extends Entity<TasksProps> {
    private status: TaskStatus;
    private completed: boolean;
    private phases: phase[];
    private constructor(props: TasksProps, id?: Identifier) {
        super(props, id);
        this.status = 'pending';
        this.completed = false;
        this.phases = [];
    }

    static createTask(props: TasksProps, id?: string) {
        const identifier = Identifier.create(id);
        return new Task(props, identifier);
    }

    addPhase(description: string): void {
        const phase: phase = {description: description, phaseno: this.phases.length + 1, completed: false};
        if(!this.phases.includes(phase))
        this.phases.push(phase);
        this.updateEntity();
    }

    markPhaseAsCompleted(phaseno: number): void {
        const phase = this.phases.find(p => p.phaseno === phaseno);
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
        return this.status;
    }

    getPhases(){
        return this.phases
    }

    getDueDate(): Date {
        return this.Props.dueDate;
    }

    getUser(): User {
        return this.Props.User;
    }

    markAsCompleted(): void {
        const notCompletedPhases = this.phases.filter(phase => phase.completed === false);
        if (notCompletedPhases.length){
        this.status === 'completed'
        this.completed = true;
        this.updateEntity();
        }
    }
    
    isCompleted(): boolean {
        return this.completed;
    }

    markPhaseasCompleted(id:number):void{
        const phaseToMark = this.phases.find(p => p.phaseno == id);
        if(phaseToMark) phaseToMark.completed = true;
    }

    unmarkPhaseAscompleted(id:number):void{
        const phaseToMark = this.phases.find(p => p.phaseno == id);
        if(phaseToMark) phaseToMark.completed = false;
    }


}   