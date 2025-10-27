import { Request, Response } from "express";
import DeleteTaskUseCase from "../usecase/delete.usecase.ts";


export default class DeleteUser{
    private Usecase: DeleteTaskUseCase;
    constructor(usecase: DeleteTaskUseCase){
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