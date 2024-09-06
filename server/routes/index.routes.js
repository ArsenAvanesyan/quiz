const router = require("express").Router();
const topicRouter = require("./topic.routes");
const questionRouter = require("./question.routes");
// const answerRouter = require("/answer.routes");
const errorRouter = require("./error.routes");

router.use("/topic", topicRouter);
router.use("/question", questionRouter);
// router.use("/answer", answerRouter);

router.use("*", errorRouter);
module.exports = router;
