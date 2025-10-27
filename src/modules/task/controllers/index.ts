import InMemoryUserRepository from "../repo/inMemory.repository.ts";
const userRepository = new InMemoryUserRepository([]);

import CreateTaskUseCase from "../usecase/create.usecase.ts";
import findByIdTaskcase from "../usecase/findById.usecase.ts";
import findByEmailTaskcase from "../usecase/findByEmail.usecase.ts";
import DeleteTaskUseCase from "../usecase/delete.usecase.ts";
import FindAllTaskUseCase from "../usecase/findAll.usecase.ts";

const createTaskUseCase = new CreateTaskUseCase(userRepository);
const findByIdTaskUseCase = new findByIdTaskcase(userRepository);
const findByEmailTaskUseCase = new findByEmailTaskcase(userRepository);
const deleteTaskUseCase = new DeleteTaskUseCase(userRepository);
const findAllTaskUseCase = new FindAllTaskUseCase(userRepository);

import CreateTask from "./create.controller.ts";
import FindByIdTask from "./findById.controller.ts";
import FindByEmailTask from "./findbyEmail.controller.ts";
import DeleteTask from "./delete.controller.ts";
import FindAllTask from "./findAll.controller.ts";

const createTaskController = new CreateTask(createTaskUseCase);
const findByIdTaskController = new FindByIdTask(findByIdTaskUseCase);
const findByEmailTaskController = new FindByEmailTask(findByEmailTaskUseCase);
const deleteTaskController = new DeleteTask(deleteTaskUseCase);
const findAllTaskController = new FindAllTask(findAllTaskUseCase);

export {
    createTaskController,
    findByIdTaskController,
    findByEmailTaskController,
    deleteTaskController,
    findAllTaskController
};