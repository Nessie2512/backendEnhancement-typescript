import { v4 } from "uuid";
import valueObject from "./value-object.ts";

export default class Identifier implements valueObject {
    private value: string;

   private constructor(value?: string) {
        this.value = value ?? v4();
    }

    public static create(value?: string): Identifier {
        return new Identifier(value);
    }

    public getIdentifier(): string {
        return this.value;
    }

    static equals(object: any): boolean {
       
        if (!(object instanceof Identifier)) {
            return false;
        }
        return true;
    }
}