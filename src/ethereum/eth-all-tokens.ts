import { TokensConstsType } from '../types';
import { SushiswapConsts } from './sushiswap-consts';

export const EthTokens: TokensConstsType = {
  USDT: {
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    decimal: 6,
    compound: '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9',
  },
  NATIVE: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    decimal: 18,
    compound: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
  },
  WNATIVE: {
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    decimal: 18,
  },
  USDC: {
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    decimal: 6,
    compound: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
    source: '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503',
  },
  DAI: {
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    decimal: 18,
    compound: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    source: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    symbol: 'DAI',
  },
  STKAAVE: {
    address: '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
    decimal: 18,
  },
  COMP: {
    address: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    decimal: 18,
  },
  SUSHI: {
    address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    decimal: 18,
  },
  SUSHI_USDT_WETH_LP: {
    address: '0x06da0fd433c1a5d7a4faa01111c044910a184553',
    pid: 0,
    stakeContractAddr: SushiswapConsts.MASTERCHEF_V1,
  },
  UNI_USDT_WETH_LP: {
    address: '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852',
  },
  KYBER_USDT_WETH_LP: {
    address: '0xcE9874C42DcE7fffbE5E48B026Ff1182733266Cb',
  },
  PENDLE: {
    address: '0x808507121b80c02388fad14726482e061b8da827',
    decimal: 18,
    symbol: 'PENDLE',
  },
};