import { expect, test } from "@jest/globals";
import { SProxy } from "../proxy";
import { DummySigner } from "./signer";
import { startSimulnet } from "./simulnet";
import { World } from "./world";

test("World.new, World.newWallet, World.newContract", async () => {
  const proxyUrl = await startSimulnet();
  const world = World.new({ proxyUrl, chainId: "F" });
  const wallet = world.newWallet(new DummySigner(new Uint8Array(32)));
  const contract = world.newContract(new Uint8Array(32));
  expect(wallet.toTopBytes()).toEqual(new Uint8Array(32));
  expect(contract.toTopBytes()).toEqual(new Uint8Array(32));
  await SProxy.terminate(proxyUrl);
});
