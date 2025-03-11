import request from "supertest";
import { prisma } from "@/database/prisma";
import { app } from "@/app";
import { after } from "node:test";
describe("UsersController", () => {
  let user_id: string
  afterAll(async()=> {
    await prisma.user.delete({
      where: {
        id: user_id
      }
    })
  })
  it("should create a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "John Doe",
      email: "testUser@exec.com",
      password: "1234578"
    })

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("John Doe");
    user_id = response.body.id
  });

  it("should return 400 if email already exists", async () => {
    const response = await request(app).post("/users").send({
      name: "Duplicate User",
      email: "testUser@exec.com",
      password: "1234578"
    })
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Email already in use")
  })

  it("should throw a validation error if email is invalid", async () => {
    const response = await request(app).post("/users").send({
      name: "John Doe",
      email: "invalid",
      password: "1234578"
    })

    expect(response.status).toBe(400)
    expect(response.body.message).toBe("validation error")
  })
})