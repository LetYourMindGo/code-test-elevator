import * as cors from "kcors";
import * as Koa from "koa";
import * as bodyparser from "koa-bodyparser";
import * as Router from "koa-router";
import { elevatorCall } from "./elevatorCall";
import { elevators } from "./elevators";

const app = new Koa();
const router = new Router();

router.get("/elevators", (context) => {
    context.response.body = elevators;
    context.response.status = 200;
});

router.post("/elevators", (context) => {
    const selectedLevel = parseInt(context.request.body.level);
    context.response.body = elevatorCall(selectedLevel);
    context.response.status = 200;
});

app.use(bodyparser({
    enableTypes: ["json"],
}));
app.use(cors());

app.use(router.routes());

const PORT = "https://stabelo-elevators-server.herokuapp.com/" || 3000;

app.listen(PORT);
