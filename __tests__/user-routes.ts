import request from "supertest";

import app from "../server/app";

describe("Server", () => {
  test("Has a / root endpoint", () => {
    return request(app)
      .get("/")
      .expect(200);
  });
});
