require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind attitude kidney arena outer stove'; 
let testAccounts = [
"0x185497029c0de64a35abd58275ea5e1d558b3587e7d53ece3eb03c605e91d828",
"0xfa8dd4de42ca72d09856b07834f68efec6094d4c195891bb161e495f1f5cbe34",
"0x14e38d5573769631fc84139feb8eecc70813163d29da5a3a6f42c41875edce68",
"0x418701b474a5017a8a3703bd3a76d7c53b78101ae45804f54304cfa51efbbef0",
"0xf960fc7e067c92d87f4f5bcf90f8b32e51e7ff14adc5f7b7ecf2d459cc6e44fb",
"0x96b40a365c9900a245d57f89f31ffbb5de8ee75f90af057947a70878e1614f05",
"0xcf95d5a001f80dfbfc5613fe1b882b543b038ef0bb23e7ba9b326b3b0e47b47e",
"0xf780ca919eb89036bdc0eec5b1334956ac88f69311a9e84ee5a8c9144a3b93cc",
"0x55978d77d623301ea2b8e471ab17faede7d35d08e1cd8d709498ea194973233d",
"0x043ae86c49ce5e5b6c54cb621032169cceabf116ba6395b8eef2b452b419e426"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
