import { utils } from 'ethers';
import web3 from 'web3';
import { SushiswapConstsType } from '../types';

export const SushiswapConsts: SushiswapConstsType = {
  MASTERCHEF_V1: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
  MASTERCHEF_V2: '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d',
  ROUTER: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  FORGE_ID_COMPLEX: utils.formatBytes32String('SushiswapComplex'),
  FORGE_ID_SIMPLE: utils.formatBytes32String('SushiswapSimple'),
  CODE_HASH: web3.utils.hexToBytes(
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
  ),
  PAIR_FACTORY: '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac',
};
