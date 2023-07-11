import { expect, test } from "@jest/globals";
import { e, Encodable } from "./index";

test("Encodable", () => {
  const encodable = e.Bytes([65, 66, 67]);
  expect(encodable).toBeInstanceOf(Encodable);
});
