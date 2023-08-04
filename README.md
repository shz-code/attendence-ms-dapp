# Blockchain Attendance Management Application using Remix, Ganache-cli, Web3, and Bootstrap

# Introduction:
This is a simple blockchain application developed using Remix, Ganache-cli, Web3, and Bootstrap. The application allows the contract owner to create a new student on the blockchain and view students and operate other functionalities that have taken place on the blockchain.

# Installation:

- Install `Node.js` on your computer.
- Install Ganache-cli by running the following command:
```bash  
npm install -g ganache-cli
```
- Clone the repository to your local machine.
- Navigate to the project directory and install the required packages by running the following command:
```bash
npm install
```

# Usage:

- Start Ganache-cli by running the following command:
```bash 
ganache-cli
```
- Deploy the solidity contract in `Remix` using the **Dev - Ganache** environment. Set the `Ganache JSON-RPC Endpoint:` to `http://127.0.0.1:8545`.

- Copy the `abi` from **Remix** and set it as the `abi` in the `app.js` file.
- Copy the deployed contract address from **Remix** and set it as the `contractAddress` in the `app.js` file.

# Features:

- Create new students. (Student id has to be unique)
- Search for the particular student using the student id.
- Increment attendance of a student using the student id.
- Get all the student ids.
- Set the new instructor's name and age.

# Tools used:
- [Remix](https://remix.ethereum.org/) - a web browser-based IDE for writing and testing smart contracts.
- [Ganache-cli](https://www.npmjs.com/package/ganache-cli) - a command-line tool for running a personal Ethereum blockchain for development purposes.
- [Web3](https://web3js.org/) - a JavaScript library for interacting with the Ethereum blockchain.
- [Bootstrap](https://getbootstrap.com/) - a CSS library for building responsive and mobile-first websites.

# License:
This project is licensed under the MIT License. See the LICENSE file for more information.