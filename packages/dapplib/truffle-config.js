require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift regret range prosper harvest infant slot gather'; 
let testAccounts = [
"0x347a1f3429a386c8fa0a61a8a1491d7d2efa912e588d7619a1a15067d035804c",
"0xef09ee01fdc152386aded7c7892ae29a36fe4c80e1c0f08e2c5ac052593001b3",
"0xf163fca205d480bd65414cbbb5cc81e3d387a9b5299bdf908dcecb7542db9c43",
"0x42afef20c420e1df3937d69c1671bbabb00d4dd1924470eb35275031137fdbfc",
"0xb2240557c24807ef109a77819908d1e1b37f64be89e6a648b279307c76b12b6f",
"0x2aea7257a5a3de0eb49e21cadfc6119df35804665e7c973b2f6fe916a6f9d833",
"0x28429f44e09fda585bd8a421eb3045356733b6141746ddd5b3cb33e9605a3371",
"0x0bea961e3f7cb259f5741c7b2c7fb512110674862d24be67aeb7c0f32126e49a",
"0x142e51f9b16a68dad567913a425c73941ee1fe5783fabe5d5a4119b1e567e69d",
"0xd0089ed1677e76df78a68fcff6424fec9d4b2429774f6df9c6ab27bf8afcaa08"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

