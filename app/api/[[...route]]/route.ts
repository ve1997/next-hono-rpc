import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");
const routes = app.get("/", (c) => c.text("Hello, Hono!"));

export type AppType = typeof routes;

export const GET = handle(app);
