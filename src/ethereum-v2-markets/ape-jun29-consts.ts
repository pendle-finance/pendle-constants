import { BigNumber as BN } from 'ethers';
import { ApeMarketConstsType } from '../types';

export const ApeJun29Consts: ApeMarketConstsType = {
  name: 'sAPE',
  SY: '0x47BA20283Be4d72D4AFB1862994F4203551539C5',
  YT: '0x9523F7e527f8AE884DFb0a38F611AA7417Fd2845',
  PT: '0x2CF5Eb8dB83C9752125D5d961C4C9DfaA9178d1A',
  underlying: '0x4d224452801ACEd8B2F0aebE155379bb5D594381',
  market: '0x9A76925dD91A7561b58D8353f0bcE4DF1e517aBb',
  expiry: BN.from(1687996800),
  APE_STAKING: '0x5954aB967Bc958940b7EB73ee84797Dc8a2AFbb9',
};
