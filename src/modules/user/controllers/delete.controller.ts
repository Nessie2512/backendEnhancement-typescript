import { Request, Response } from "express";
import DeleteUserUseCase from "../usecase/delete.usecase.ts";

export default class DeleteUser{
    private Usecase: DeleteUserUseCase;
    constructor(usecase: DeleteUserUseCase){
        this.Usecase = usecase;
    }
    handle(req:Request,res:Response){
        const {id} = req.params;
        if(id){
            this.Usecase.execute(id);
            return res.status(204).send();
        }
        return res.status(400);
    }
}