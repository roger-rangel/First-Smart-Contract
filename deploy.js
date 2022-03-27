// deploy code will go here

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'silent dust quit example fluid lesson produce mandate sell develop dance kangaroo',
    'https://rinkeby.infura.io/v3/e3ccfbb825d049578995b7586c5fecd4'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0]});

    console.log("contract deployed to", result.options.address);
    provider.engine.stop()

}
deploy();