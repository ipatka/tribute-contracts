---
id: adapters
title: Adapters
---

Once a DAO is created using the core contracts, and extensions, it can be extended and modified with different adapters. Adapters make it easy to assemble a DAO like lego blocks, by adding to a DAO narrowly-defined, tested, and extensible smart contracts created for specific purposes. Adapters and extensions make DAOs more modular, upgradeable, and also enable us to work together to build robust DAO tooling. They can be added to a TributeDAO via a DAO vote process, or during the DAO deployment phase.

An adapter can be defined as Proposal or Generic type:

- `Proposal`: updates the DAO state based on a proposal, and the proposal needs to pass, otherwise the DAO state changes are not applied, e.g: [GuildKick.sol](/docs/adapters/exiting/guild-kick-adapter).
- `Generic`: updates the DAO state without a proposal process, e.g: [Withdraw.sol](/docs/adapters/distribution/withdraw-adapter).

## Existing adapters

TributeDAO Framework provides several types of Adapters that can be used in your DAO. Most of these adapters make it feature compatible with Moloch v2.

:::tip

Adapters do not keep track of the state of the DAO. It might use its own storage to control state, but ideally any DAO state change must be propagated to the **[DAORegistry Core Contract](/docs/core/dao-registry)**.

:::

The range of potential adapters will expand over time and likely will include:

- "Streams" to manage a DAO's treasury in a more agile way;
- Alternative voting structures to layer to improve DAO governance, including quadratic voting, one-member-one-vote voting;
- Swaps of one token for another;
- Streaming payments;
- DAO-to-DAO voting;
- Creating a liquidity pool for a DAO's native asset;
- Staking or depositing assets into existing DeFi projects (like Aave, Compound, or Lido).

:::tip

Adapters just execute smart contract logic that changes the state of the DAO by calling the **[DAORegistry Core Contract](/docs/core/dao-registry)**. They also can compose complex calls that interact with External World, other Adapters or even Extensions, to pull/push additional information.

:::

### Configuration

Adapters that allow the members, individuals, and the DAO owner to perform any sort of configuration in the DAO. Usually the configurations are parameters that can be used by other Adapters, Extensions, and Core Contract. Examples:

- **[Configuration](/docs/adapters/configuration/configuration-adapter)**: manages storing and retrieving per-DAO settings required by shared adapters.
- **[Managing](/docs/adapters/configuration/managing-adapter)**: enhances the DAO capabilities by adding/updating the DAO Adapters through a voting process.

### Distribution

Adapters that allow members to distribute/withdraw funds from the DAO Bank. Examples:

- **[Distribute](/docs/adapters/distribution/distribute-adapter)**: allows the members to distribute funds to one or all members of the DAO.
- **[Withdraw](/docs/adapters/distribution/withdraw-adapter)**: allows the members to withdraw their funds from the DAO bank.

### Exiting

Adapters that allow members to exit the DAO individually or collectively kick a bad actor. Examples:

- **[GuildKick](/docs/adapters/exiting/guild-kick-adapter)**: gives the members the freedom to choose which individuals or organizations should really be part of the DAO.
- **[Ragequit](/docs/adapters/exiting/rage-quit-adapter)**: gives the members the freedom to choose when it is the best time to exit the DAO for any given reason.

### Funding

Adapters that allow any individuals/members to request funds from the DAO Bank to fund external projects through a proposal process. Examples:

- **[Financing](/docs/adapters/funding/financing-adapter)**: allows individuals and/or organizations to request funds to finance their projects, and the members of the DAO have the power to vote and decide which projects should be funded.

### Onboarding

Adapters that allow new individuals to join the DAO by providing some sort of tribute. Examples:

- **[ETH/ERC20 Onboarding](/docs/adapters/onboarding/onboarding-adapter)**: triggers the process of minting internal tokens in exchange of a specific token at a fixed price.
- **[Coupon Onboarding](/docs/adapters/onboarding/coupon-onboarding-adapter)**: triggers the process of minting internal tokens in exchange of a specific token at a fixed price.
- **[Tribute](/docs/adapters/onboarding/tribute-adapter)**: allows potential and existing DAO members to contribute any amount of ERC-20 tokens to the DAO in exchange for any amount of DAO internal tokens.
- **[TributeNFT](/docs/adapters/onboarding/tribute-nft-adapter)**: allows potential DAO members to contribute a registered ERC-721 asset to the DAO in exchange for any amount of DAO units.

### Voting

Adapters that allow different types governance systems within the DAO. Examples:

- **[Batch Voting](/docs/adapters/voting/batch-voting-adapter)**: adds the simple on chain voting governance process to the DAO.
- **[Basic Voting](/docs/adapters/voting/basic-voting-adapter)**: adds the simple on chain voting governance process to the DAO.
- **[OffchainVoting](docs/adapters/voting/offchain-voting-adapter)**: adds the offchain voting governance process to the DAO to support gasless voting.

## Creating an adapter

Creating an adapter is straight forward and should save developers engineering time. Each adapter needs to be configured with the [Access Flags](#access-control-layer) in order to access the [Core Contracts](#core-contracts), and/or [Extensions](#extensions). Otherwise the Adapter will not able to pull/push information to/from the DAO.

Please note:

- The adapter must follow the rules defined by the [Template Adapter](https://github.com/openlawteam/tribute-contracts/blob/master/docs/adapters/Template.md).
- If you want to contribute and create an Adapter, please checkout this: [How to create an Adapter](https://github.com/openlawteam/tribute-contracts/blob/master/docs/adapters/HowToCreate.md).
