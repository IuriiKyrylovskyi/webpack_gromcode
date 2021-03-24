import { createLogger } from "../logger";

it("should return stored logs", () => {
  const logger = createLogger("user login");
  expect(logger.getLogs()).toEqual([]);
});

it("should save log message", () => {
  const logger = createLogger("user login");
  logger.log("success");

  expect(logger.getLogs()).toEqual(["log - user login - success"]);
});

it("should save log message", () => {
  const logger = createLogger("user2 login");
  logger.error("failed");

  expect(logger.getLogs()).toEqual(["error - user2 login - failed"]);
});
