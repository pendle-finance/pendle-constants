import { TokensConstsType } from '../types';
import { TraderJoeConsts } from './traderjoe-consts';

export const AvaxTokens: TokensConstsType = {
  USDT: {
    address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    decimal: 6,
    whale: '0x532e6537fea298397212f09a61e03311686f548e',
    symbol: 'USDT.e',
    name: 'Tether USD',
  },
  NATIVE: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    decimal: 18,
    benqi: '0x5C0401e81Bc07Ca70fAD469b451682c0d747Ef1c',
    symbol: 'AVAX',
    name: 'AVAX',
  },
  WNATIVE: {
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    decimal: 18,
    symbol: 'WAVAX',
    name: 'Wrapped AVAX',
  },
  USDC: {
    address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    decimal: 6,
    benqi: '0xBEb5d47A3f720Ec0a390d04b4d41ED7d9688bC7F',
    whale: '0x46a51127c3ce23fb7ab1de06226147f446e4a857',
    symbol: 'USDC.e',
    name: 'USD Coin',
  },
  DAI: {
    address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    decimal: 18,
    symbol: 'DAI.e',
    benqi: '0x835866d37AFB8CB8F8334dCCdaf66cf01832Ff5D',
    whale: '0x47afa96cdc9fab46904a55a6ad4bf6660b53c38a',
    name: 'Dai Stablecoin',
  },
  QI: {
    address: '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
    decimal: 18,
    symbol: 'QI',
    whale: '0x23a0620035012a5d31c82c3be824c49c2bbbc21a',
    name: 'BENQI',
  },
  JOE: {
    address: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
    decimal: 18,
    symbol: 'JOE',
    whale: '0x66fb02746d72bc640643fdba3aefe9c126f0aa4f',
    name: 'JoeToken',
  },
  JOE_WAVAX_DAI_LP: {
    address: '0x87Dee1cC9FFd464B79e058ba20387c1984aed86a',
    pid: 37,
    stakeContractAddr: TraderJoeConsts.MASTERCHEF_V2,
    decimal: 18,
    symbol: 'JLP',
    name: 'Joe LP Token',
  },
  PENDLE: {
    address: '0xfB98B335551a418cD0737375a2ea0ded62Ea213b',
    symbol: 'PENDLE',
    decimal: 18,
    name: 'Pendle',
    whale: '0x5fa58f29c6138c07c2f9e9d0066f774a7ca3b7df' // PENDLE's multisig
  },
  XJOE: {
    address: '0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33',
    pid: 24,
    stakeContractAddr: TraderJoeConsts.MASTERCHEF_V2,
    decimal: 18,
    symbol: 'xJOE',
    name: 'JoeBar',
  },
  JOE_PENDLE_AVAX: {
    address: '0x3acD2FF1c3450bc8a9765AfD8d0DeA8E40822c86',
    decimal: 18,
    symbol: 'Joe LP Token',
    name: 'JLP',
  },
  JOE_USDC_AVAX: {
    address: '0xa389f9430876455c36478deea9769b7ca4e3ddb1',
    decimal: 18,
    symbol: 'Joe LP Token',
    name: 'JLP',
  },
  MEMO: {
    address: '0x136acd46c134e8269052c62a67042d6bdedde3c9',
    decimal: 9,
    symbol: 'MEMO',
    name: 'MEMOries',
    whale: '0x4456b87af11e87e329ab7d7c7a246ed1ac2168b9'
  },
  wMEMO: {
    address: '0x0da67235dd5787d67955420c84ca1cecd4e5bb3b',
    decimal: 18,
    symbol: 'wMEMO',
    name: 'Wrapped MEMO',
  },
  TIME: {
    address: '0xb54f16fb19478766a268f172c9480f8da1a7c9c3',
    decimal: 9,
    symbol: 'TIME',
    name: 'Time',
    whale: '0x4456b87af11e87e329ab7d7c7a246ed1ac2168b9'
  },
  MIM: {
    address: '0x130966628846bfd36ff31a822705796e8cb8c18d',
    decimal: 18,
    symbol: 'MIM',
    name: 'Magic Internet Money',
    whale: '0x113f413371fc4cc4c9d6416cf1de9dfd7bf747df'
  }
};
