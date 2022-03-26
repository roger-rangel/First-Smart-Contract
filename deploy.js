// deploy code will go here

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'silent dust quit example fluid lesson produce mandate sell develop dance kangaroo',
    'https://rinkeby.infura.io/v3/e3ccfbb825d049578995b7586c5fecd4'
);
const web3 = new Web3(provider);