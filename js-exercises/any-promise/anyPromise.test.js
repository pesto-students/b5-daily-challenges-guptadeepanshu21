import { anyPromise } from "./anyPromise";

describe("anyPromise", () => {
  it("should resolve with the value of first resolved promise", async () => {
    const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
    const promise2 = new Promise((resolve) => setTimeout(resolve, 300, "fast"));
    const promises = [promise1, promise2];
    const result = await anyPromise(promises);
    expect(result).toBe("fast");
  });
  it("should return aggregate error if all promises are rejected", async () => {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(reject, 100, new Error("first error"));
    });
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(reject, 200, new Error("second error"));
    });
    const promises = [promise1, promise2];
    try {
      await anyPromise(promises);
    } catch (err) {
      expect(err instanceof AggregateError).toBe(true);
    }
  });
});
