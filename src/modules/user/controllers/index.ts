import InMemoryUserRepository from "../repo/inMemory.repository.ts";
const userRepository = new InMemoryUserRepository([]);

import createUserUseCase from "../usecase/create.usecase.ts";
import findAllUserUseCase from "../usecase/findAll.usecase.ts";
import findByEmailUsecase from "../usecase/findByEmail.usecase.ts";
import findByIdUsecase from "../usecase/findById.usecase.ts";
import DeleteUserUseCase from "../usecase/delete.usecase.ts";
import updateUserUseCase from "../usecase/update.usecase.ts";

import CreateUser from "./create.controller.ts";
import FindAllUser from "./findAll.controller.ts";
import FindByEmailUser from "./findbyEmail.controller.ts";
import FindByIdUser from "./findById.controller.ts";
import DeleteUser from "./delete.controller.ts";
import UpdateUser from "./update.controller.ts";

const createUserUsecase = new createUserUseCase(userRepository);
const findAllUserUsecase = new findAllUserUseCase(userRepository);
const findByEmailUserUsecase = new findByEmailUsecase(userRepository);
const findByIdUserUsecase = new findByIdUsecase(userRepository);
const deleteUserUsecase = new DeleteUserUseCase(userRepository);
const updateUserUsecase = new updateUserUseCase(userRepository);

export const createUserController = new CreateUser(createUserUsecase);
export const findAllUserController = new FindAllUser(findAllUserUsecase);
export const findByEmailUserController = new FindByEmailUser(findByEmailUserUsecase);
export const findByIdUserController = new FindByIdUser(findByIdUserUsecase);
export const deleteUserController = new DeleteUser(deleteUserUsecase);
export const updateUserController = new UpdateUser(updateUserUsecase);
