import { jest } from "@jest/globals";

jest.unstable_mockModule("node:child_process", () => ({
  execSync: jest.fn(() => "some-mocked-value"),
}));

const { execSync } = await import("node:child_process");
const index = await import("./index");

describe("my test", () => {
  it("returns mocked value", async () => {
    console.log("in test, execSync returns", execSync("ls"));
    expect(index.default()).toBe("some-mocked-value");
  });
});
