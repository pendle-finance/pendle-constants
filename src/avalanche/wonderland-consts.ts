import { utils } from 'ethers';
import { WonderlandMoneyConstsType } from '../types';

export const WonderlandMoneyConsts: WonderlandMoneyConstsType = {
  WONDERLAND_STAKING_HELPER: '0x096BBfB78311227b805c968b070a81D358c13379',
  WONDERLAND_TIME_STAKING: '0x4456B87Af11e87E329AB7d7C7A246ed1aC2168B9',
  FORGE_ID: utils.formatBytes32String('WonderlandMoney'),
};
