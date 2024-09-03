import Elysia from "elysia";
import { finappControllers } from "./finappControllers";

export const controllers = new Elysia().use(finappControllers);
