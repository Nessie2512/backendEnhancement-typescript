import { Request, Response } from "express";
import FindAllUserUseCase from "../../user/usecase/findAll.usecase.ts";
import FindAllTaskUseCase from "../usecase/findAll.usecase.ts";


export default class FindAll {
    private usecase: FindAllTaskUseCase;
    constructor(usecase: FindAllTaskUseCase) {
        this.usecase = usecase;
    }

    async handle(res:Response) {
        const users = await this.usecase.execute();
        return res.status(200).send(users);
    }
}