import { Request, Response } from "express";
import findByIdTaskcase from "../usecase/findById.usecase.ts";

export default class findById{
    private usecase: findByIdTaskcase;
    constructor(usecase: findByIdTaskcase){
        this.usecase = usecase;
    }

   async handle(req:Request,res:Response){
        const {id} = req.params;
        if(id){ 
        const userFound = await this.usecase.execute(id);
        return res.status(200).send(userFound);
         }
         return res.status(400).send();
    }
}