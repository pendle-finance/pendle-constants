import { TokensConstsType } from '../types';
import { TraderJoeConsts } from './traderjoe-consts';

export const AvaxTokens: TokensConstsType = {
  USDT: {
    address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    decimal: 6,
    source: '0xa66f8Db3B8F1e4c79e52ac89Fec052811F4dbd19',
  },
  NATIVE: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    decimal: 18,
    benqi: '0x5C0401e81Bc07Ca70fAD469b451682c0d747Ef1c',
  },
  WNATIVE: {
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    decimal: 18,
    symbol: 'WAVAX',
  },
  USDC: {
    address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    decimal: 6,
    benqi: '0xBEb5d47A3f720Ec0a390d04b4d41ED7d9688bC7F',
  },
  DAI: {
    address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    decimal: 18,
    symbol: 'DAI',
    benqi: '0x835866d37AFB8CB8F8334dCCdaf66cf01832Ff5D',
    source: '0x20243F4081b0F777166F656871b61c2792FB4124',
  },
  QI: {
    address: '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
    decimal: 18,
    symbol: 'QI',
  },
  JOE: {
    address: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
    decimal: 18,
    symbol: 'JOE',
    source: '0x66Fb02746d72bC640643FdBa3aEFE9C126f0AA4f',
  },
  JOE_WAVAX_DAI_LP: {
    address: '0x87Dee1cC9FFd464B79e058ba20387c1984aed86a',
    pid: 37,
    stakeContractAddr: TraderJoeConsts.MASTERCHEF_V2,
  },
  PENDLE: {
    address: '0xfB98B335551a418cD0737375a2ea0ded62Ea213b',
    symbol: 'PENDLE',
    decimal: 18,
  },
  XJOE: {
    address: '0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33',
    pid: 24,
    stakeContractAddr: TraderJoeConsts.MASTERCHEF_V2,
  },
  JOE_PENDLE_AVAX: {
    address: '0x3acD2FF1c3450bc8a9765AfD8d0DeA8E40822c86',
  },
  JOE_USDC_AVAX: {
    address: '0xa389f9430876455c36478deea9769b7ca4e3ddb1',
  },
  MEMO: {
    address: '0x136acd46c134e8269052c62a67042d6bdedde3c9',
    decimal: 9,
  },
  wMEMO: {
    address: '0x0da67235dd5787d67955420c84ca1cecd4e5bb3b',
    decimal: 18,
  },
  TIME: {
    address: '0xb54f16fb19478766a268f172c9480f8da1a7c9c3',
    decimal: 9,
  },
};
