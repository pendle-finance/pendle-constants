import { utils } from 'ethers';
import { TraderJoeConstsType } from '../types';

export const TraderJoeConsts: TraderJoeConstsType = {
  MASTERCHEF_V2: '0xd6a4F121CA35509aF06A0Be99093d08462f53052',
  ROUTER: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
  FORGE_ID_COMPLEX: utils.formatBytes32String('TraderJoeComplex'),
  FORGE_ID_SIMPLE: utils.formatBytes32String('TraderJoeSimple'),
  CODE_HASH: Array.from(
    utils.arrayify(
      '0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91'
    )
  ),
  PAIR_FACTORY: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
  FORGE_ID_XJOE: utils.formatBytes32String('xJoe'),
};
