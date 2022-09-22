import { jest } from "@jest/globals";

// this has to be above the `await import`s
jest.unstable_mockModule("node:child_process", () => ({
  execSync: jest.fn(() => "some-mocked-value"),
}));

const index = await import("./index");
const { execSync } = await import("node:child_process");

describe("my test", () => {
  it("returns mocked value", async () => {
    console.log("in test, execSync returns", execSync("ls"));
    expect(index.default()).toBe("some-mocked-value");
  });
});
