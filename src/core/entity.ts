import Identifier from "./identifier.vo.ts";

export default class Entity<props> {
    private _id: Identifier;
    private create_at: Date;
    private last_update_at?: Date;
    private is_active: boolean;
    protected Props: props;

     constructor(entityProps: props, id?: Identifier) {
        this._id = id ?? Identifier.create();
        this.create_at = new Date();
        this.is_active = true;
        this.Props = entityProps;
    }

    public static create<props>(entityProps: props, id?: Identifier): Entity<props> {
        return new Entity<props>(entityProps, id);
    }

     getId(): Identifier {
        return this._id;
    }

    getCreatedAt(): Date {
        return this.create_at;
    }

    getLastUpdateAt(): Date | undefined {
        return this.last_update_at;
    }

    isctive(): boolean {
        return this.is_active;
    }

    protected updateEntity(): void {
        this.last_update_at = new Date();
    }

    switchStatus(): void {
        this.is_active = !this.is_active;
        this.updateEntity();
    }

    
}