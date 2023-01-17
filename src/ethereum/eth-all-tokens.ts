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
  BTRFLY: {
    address: '0xc0d4ceb216b3ba9c3701b291766fdcba977cec3a',
    decimal: 9,
    symbol: 'BTRFLY',
    name: 'BTRFLY',
    whale: '0xbde4dfb0dbb0dd8833efb6c5bd0ce048c852c487',
  },
  xBTRFLY: {
    address: '0xCC94Faf235cC5D3Bf4bEd3a30db5984306c86aBC',
    decimal: 9,
    symbol: 'xBTRFLY',
    name: 'xBTRFLY',
    whale: '0xbde4dfb0dbb0dd8833efb6c5bd0ce048c852c487',
  },
  wxBTRFLY: {
    address: '0x4B16d95dDF1AE4Fe8227ed7B7E80CF13275e61c9',
    decimal: 18,
    symbol: 'wxBTRFLY',
    name: 'wxBTRFLY',
  },
  APE: {
    address: '0x4d224452801ACEd8B2F0aebE155379bb5D594381',
    decimal: 18,
    symbol: 'APE',
    name: 'ApeCoin',
  },
  CRV: {
    address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    decimal: 18,
    symbol: 'CRV',
    name: 'Curve DAO Token'
  },
  CVX: {
    address: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
    decimal: 18,
    symbol: 'CVX',
    name: 'Convex Token'
  },
  FRAX: {
    address: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
    decimal: 18,
    symbol: 'FRAX',
    name: 'Frax'
  },
  LOOKS: {
    address: '0xf4d2888d29D722226FafA5d9B24F9164c092421E',
    decimal: 18,
    symbol: 'LOOKS',
    name: 'LooksRare Token'
  },
  RETH: {
    address: '0xae78736Cd615f374D3085123A210448E74Fc6393',
    decimal: 18,
    symbol: 'rETH',
    name: 'Rocket Pool ETH'
  },
  WETH: {
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    decimal: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether'
  },
  AURA: {
    address: '0xC0c293ce456fF0ED870ADd98a0828Dd4d2903DBF',
    decimal: 18,
    symbol: 'AURA',
    name: 'Aura'
  },
  BAL: {
    address: '0xba100000625a3754423978a60c9317c58a424e3D',
    decimal: 18,
    symbol: 'BAL',
    name: 'Balancer'
  },
  STETH: {
    address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    decimal: 18,
    symbol: 'stETH',
    name: 'Liquid staked Ether 2.0'
  },
  WSTETH: {
    address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
    decimal: 18,
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0'
  },
};
