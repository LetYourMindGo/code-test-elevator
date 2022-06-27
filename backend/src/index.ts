import * as cors from "kcors";
import * as Koa from "koa";
import * as bodyparser from "koa-bodyparser";
import * as Router from "koa-router";
import { elevatorCall } from "./elevatorCall";
import { elevators } from "./elevators";

const app = new Koa();
const router = new Router();

// This is just an example route
router.get("/elevators", (context) => {
    context.response.body = elevators;
    context.response.status = 200;
});

router.post("/elevators", (context) => {
    const selectedLevel = parseInt(context.request.body.level);
    context.response.body = elevatorCall(selectedLevel);
    context.response.status = 200;
});

// Add additional routes for implementation here...

app.use(bodyparser({
    enableTypes: ["json"],
}));
app.use(cors());

app.use(router.routes());

app.listen(3000);
