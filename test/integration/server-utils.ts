import * as pino from "pino";
import { createContainer } from "../../src/container";
import { createServer } from "../../src/server";

const logger = pino({ name: "test", level: "silent" });
const container = createContainer(logger);
const port = Number(process.env.PORT) || 8080;

export const appServer = createServer(container);
export const testServer = appServer.listen(port);
//
// export async function createUserTest(user: CreateUser): Promise<UserModel> {
//   const res = await supertest(testServer)
//     .post("/api/v1/users")
//     .send(user)
//     .expect(201);
//
//   return res.body;
// }
//
// export function shuttingDown(): void {
//   container.health.shuttingDown();
// }
//
// export async function createTaskTest(
//   task: CreateTask,
//   token: string
// ): Promise<TaskModel> {
//   const res = await supertest(testServer)
//     .post("/api/v1/tasks")
//     .set("Authorization", token)
//     .send(task)
//     .expect(201);
//
//   return res.body;
// }
//
// export async function getLoginToken(
//   email: string,
//   password: string
// ): Promise<string> {
//   const res = await supertest(testServer)
//     .post("/api/v1/users/login")
//     .send({ email, password })
//     .expect(200);
//
//   return res.body.accessToken;
// }
