import { BigNumber as BN } from 'ethers';
import { LooksStakingMarketConstsType } from '../types';

export const LooksStakingMar30Consts: LooksStakingMarketConstsType = {
  name: 'SY LOOKS Staking',
  SY: '0x35C16314D6Ee4753289E5cC15A5C5E1Dd4eaD345',
  YT: '0xC20dc81e8844F8fF154A67003849cEA8e951dEdc',
  PT: '0x293811f161fBFea8f417e222B226BB821548Ba63',
  market: '0x44474D98d1484C26E8d296a43a721998731Cf775',
  underlying: '0xf4d2888d29D722226FafA5d9B24F9164c092421E',
  expiry: BN.from(1680134400),
  scalarRoot: BN.from(2200000000000000000),
  initAnchor: BN.from(1151500000000000000),
  STAKING_CONTRACT: '0x3ab16Af1315dc6C95F83Cbf522fecF98D00fd9ba',
};
