import { TokensConstsType } from '../types';
import { SushiswapConsts } from './sushiswap-consts';

export const EthTokens: TokensConstsType = {
  USDT: {
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    decimal: 6,
    compound: '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9',
    symbol: 'USDT',
    name: 'Tether USD',
  },
  NATIVE: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    decimal: 18,
    compound: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
    symbol: 'ETH',
    name: 'Ether',
  },
  WNATIVE: {
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    decimal: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  USDC: {
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    decimal: 6,
    compound: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
    whale: '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503',
    symbol: 'USDC',
    name: 'USD Coin',
  },
  DAI: {
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    decimal: 18,
    compound: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    whale: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    symbol: 'DAI',
    name: 'Dai Stablecoin',
  },
  STKAAVE: {
    address: '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
    decimal: 18,
    symbol: 'stkAAVE',
    name: 'Staked Aave',
  },
  COMP: {
    address: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    decimal: 18,
    symbol: 'COMP',
    name: 'Compound',
  },
  SUSHI: {
    address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    decimal: 18,
    symbol: 'SUSHI',
    name: 'SushiToken',
  },
  SUSHI_USDT_WETH_LP: {
    address: '0x06da0fd433c1a5d7a4faa01111c044910a184553',
    pid: 0,
    stakeContractAddr: SushiswapConsts.MASTERCHEF_V1,
    decimal: 18,
    symbol: 'SLP',
    name: 'SushiSwap LP Token',
  },
  UNI_USDT_WETH_LP: {
    address: '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852',
    decimal: 18,
    symbol: 'UNI-V2',
    name: 'Uniswap V2',
  },
  KYBER_USDT_WETH_LP: {
    address: '0xcE9874C42DcE7fffbE5E48B026Ff1182733266Cb',
    decimal: 18,
    symbol: 'DMM-LP WETH-USDT',
    name: 'KyberDMM LP WETH-USDT',
  },
  PENDLE: {
    address: '0x808507121b80c02388fad14726482e061b8da827',
    decimal: 18,
    symbol: 'PENDLE',
    name: 'Pendle',
  },
};
