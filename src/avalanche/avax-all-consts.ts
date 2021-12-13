import { MiscConsts } from '../common';
import { CommonConsts } from '../common/common-consts';
import { CommonConstsType, PendleConstsType } from '../types';
import { AvaxTokens } from './avax-all-tokens';
import { BenQiConsts } from './benqi-consts';
import { KyberConsts } from './kyber-consts';
import { TraderJoeConsts } from './traderjoe-consts';
import { WonderlandConsts } from './wonderland-consts';

let GOVERNANCE_MULTISIG = '0x2116Ca021e0deB3065946dDE33e6Cb2E783Dc161';

const AvaxCommonConsts: CommonConstsType = {
  ...CommonConsts,
  GOVERNANCE_MULTISIG,
  FORGE_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG,
  MARKET_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG,
  LIQ_MINING_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG,
  TREASURY_MULTISIG: '0xA605617511d2A540f418BFBc1CECafB15582B77A',
  CHAIN_ID: 43114,
};

export const AvaxConsts: PendleConstsType = {
  benqi: BenQiConsts,
  joe: TraderJoeConsts,
  kyber: KyberConsts,
  wonderland: WonderlandConsts,
  tokens: AvaxTokens,
  common: AvaxCommonConsts,
  misc: MiscConsts,
};
