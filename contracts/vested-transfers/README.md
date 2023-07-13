# 'vested-transfers' contract

A contract for vested transfers, with following endpoints and views:

- `create_transfer(receiver: Address, release_schedule: ReleaseSchedule)`: endpoint to create a vested transfer,
- `execute_transfer(index: u64)`: endpoint to execute a specific vested transfer,
- `cancel_transfer(index: u64)`: endpoint to cancel a specific vested transfer when caller is sender,
- `claim_balances(tokens: MultiValueEncoded<(EgldOrEsdtTokenIdentifier, u64)>)`: endpoint to claim token balances,
- `get_transfers()`: view to list all transfers,
- `get_address_balances(address: Address)`: view to list all token balances of an address.

To create a copy of the 'vested-contracts' contract on your computer:

```
xsuite new --contract vested-contracts --dir my-contract
cd my-contract
```

Note that `xsuite-cli` must be installed on your computer. To install, run:

```
npm install -g xsuite-cli
```

## Build contract

```
npm run build
```

## Test contract

```
npm run test
```

## Interact with contract

- On devnet:

  ```
  npm run interact:devnet [command]
  ```

- On testnet:

  ```
  npm run interact:testnet [command]
  ```

- On mainnet:

  ```
  npm run interact:mainnet [command]
  ```

To list all available commands:

```
npm run interact:devnet --help
```

For example, if you want to deploy the contract on devnet:

```
npm run interact:devnet deploy
```

## Wallet & Funding

To create a new keystore wallet at path `wallet.json`:

```
xsuite new-wallet --wallet wallet.json
```

To fund this wallet with 30 xEGLD:

```
xsuite request-xegld --wallet wallet.json
```