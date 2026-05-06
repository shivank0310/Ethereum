# Smart Contracts – Detailed Terminology Documentation

## 1. Smart Contract

A **smart contract** is a self-executing program stored on a blockchain that automatically enforces rules and executes actions when predefined conditions are met.

### Key Points:

* Runs on a blockchain network
* Executes automatically when triggered
* Eliminates intermediaries
* Ensures transparency and trust

---

## 2. Blockchain

A **blockchain** is a distributed ledger that records transactions across multiple nodes in a secure, immutable, and transparent way.

### Features:

* Decentralized storage
* Immutable records
* Cryptographic security
* Consensus-driven validation

---

## 3. Contract Code

The **contract code** is the logic written by developers that defines how the smart contract behaves.

### Includes:

* Business rules
* Conditions
* Functions
* Data structures

### Languages:

* Solidity (Ethereum)
* Go / Node.js (Hyperledger Fabric)

---

## 4. Deployment

**Deployment** is the process of uploading a smart contract to the blockchain network.

### What happens:

* Contract is compiled
* Assigned a unique address
* Stored permanently on blockchain

---

## 5. Contract Address

A **contract address** is a unique identifier assigned to a deployed smart contract.

### Characteristics:

* Used to interact with the contract
* Generated during deployment
* Immutable once created

---

## 6. Transaction

A **transaction** is a request sent to the blockchain to execute a function or transfer value.

### Types:

* Contract creation transaction
* Function execution transaction

### Properties:

* Signed by user
* Verified by nodes
* Recorded permanently

---

## 7. Function

A **function** is a block of code inside a smart contract that performs a specific task.

### Types:

* Read-only (view/pure)
* State-changing

### Example:

* Store data
* Transfer tokens
* Validate conditions

---

## 8. State

The **state** refers to the current data stored in the smart contract.

### Examples:

* Account balances
* Ownership records
* Stored variables

### Important:

* Updated only through transactions
* Stored on blockchain

---

## 9. Gas (Ethereum Context)

**Gas** is the fee required to execute transactions on the blockchain.

### Purpose:

* Prevents abuse of network
* Compensates miners/validators

### Key Concepts:

* Gas limit
* Gas price

---

## 10. Events

**Events** are logs emitted by smart contracts during execution.

### Uses:

* Notify external applications
* Track contract activity
* Debugging and monitoring

---

## 11. Modifiers

**Modifiers** are special functions used to control access and validate conditions before executing a function.

### Example Use:

* Restrict access to owner
* Check conditions before execution

---

## 12. Constructor

A **constructor** is a special function executed only once when the contract is deployed.

### Purpose:

* Initialize variables
* Set initial configuration

---

## 13. ABI (Application Binary Interface)

The **ABI** defines how external applications interact with a smart contract.

### Includes:

* Function names
* Input/output formats
* Encoding rules

---

## 14. Bytecode

**Bytecode** is the compiled version of smart contract code that is executed on the blockchain.

### Flow:

Source Code → Compilation → Bytecode → Deployment

---

## 15. Node

A **node** is a computer that participates in the blockchain network.

### Responsibilities:

* Validate transactions
* Store blockchain data
* Execute smart contracts

---

## 16. Consensus Mechanism

A **consensus mechanism** is a method used by nodes to agree on the validity of transactions.

### Examples:

* Proof of Work (PoW)
* Proof of Stake (PoS)
* Practical Byzantine Fault Tolerance (PBFT)

---

## 17. Immutability

**Immutability** means that once data is written to the blockchain, it cannot be changed.

### Importance:

* Prevents tampering
* Ensures trust

---

## 18. Decentralization

**Decentralization** means control is distributed across multiple nodes instead of a single authority.

### Benefits:

* No single point of failure
* Increased security
* Trustless environment

---

## 19. Oracle

An **oracle** is a service that provides external data to smart contracts.

### Why needed:

* Smart contracts cannot access off-chain data directly

### Examples:

* Weather data
* Stock prices
* API integrations

---

## 20. DApp (Decentralized Application)

A **DApp** is an application that uses smart contracts as its backend.

### Components:

* Frontend (UI)
* Smart contracts (backend)
* Blockchain network

---

## 21. Chaincode (Hyperledger Fabric)

In Hyperledger Fabric, smart contracts are called **Chaincode**.

### Features:

* Written in Go, Node.js, Java
* Runs on permissioned network
* Supports private data

---

## 22. Ledger

A **ledger** is the record of all transactions and states in the blockchain.

### Types (Fabric):

* World State (current state)
* Transaction Log (history)

---

## 23. Endorsement Policy (Fabric)

Defines which nodes must approve a transaction before it is committed.

### Example:

* At least 2 organizations must approve

---

## 24. Channel (Fabric)

A **channel** is a private communication layer between specific participants.

### Purpose:

* Data privacy
* Restricted access

---

## 25. Private Data Collection (Fabric)

Allows sensitive data to be shared only among selected participants.

---

## 26. Access Control

Defines who can execute specific functions in a smart contract.

### Implemented using:

* Roles
* Permissions
* Modifiers

---

## 27. Upgradeability

Refers to the ability to modify a smart contract after deployment.

### Methods:

* Proxy pattern
* Versioning (Fabric chaincode upgrades)

---

## 28. Security

Smart contract **security** ensures protection against vulnerabilities.

### Common Issues:

* Reentrancy attacks
* Integer overflow
* Unauthorized access

---

## 29. Testing

Smart contract **testing** ensures correctness before deployment.

### Types:

* Unit testing
* Integration testing
* Simulation

---

## 30. Final Thoughts

Understanding these terms is essential for:

* Building secure smart contracts
* Designing blockchain systems
* Developing enterprise solutions (like Hyperledger Fabric projects)

Smart contracts are not just code—they represent **trust, automation, and decentralized logic**.

---
