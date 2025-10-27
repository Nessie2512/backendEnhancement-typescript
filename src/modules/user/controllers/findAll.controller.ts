import { Request, Response } from "express";
import FindAllUserUseCase from "../usecase/findAll.usecase.ts";

export default class FindAll {
    private usecase: FindAllUserUseCase;
    constructor(usecase: FindAllUserUseCase) {
        this.usecase = usecase;
    }

    async handle(res:Response) {
        const users = await this.usecase.execute();
        return res.status(200).send(users);
    }
}