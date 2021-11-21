import { KyberConsts } from '../avalanche/kyber-consts';
import { MiscConsts } from '../common';
import { CommonConstsType, PendleConstsType } from '../types';
import { AaveConsts } from './aave-consts';
import { CompoundConsts } from './compound-consts';
import { EthTokens } from './eth-all-tokens';
import { SushiswapConsts } from './sushiswap-consts';
import { UniswapConsts } from './uniswap-consts';
import { CommonConsts } from '../common/common-consts';

const GOVERNANCE_MULTISIG = '0x8119ec16f0573b7dac7c0cb94eb504fb32456ee1';
const EthCommonConsts: CommonConstsType = {
  ...CommonConsts,
  GOVERNANCE_MULTISIG,
  TEAM_TOKENS_MULTISIG: '0x8849d0d4c35679aa78df1b5b4ceca358d57635df',
  ECOSYSTEM_FUND_MULTISIG: '0xc21a74c7150fed22c7ca0bf9a15bbe0ddb4977cc',
  SALES_MULTISIG: '0x9b26afff63e4139cb5a3ea9955903ffffcc1d79b',
  LIQUIDITY_INCENTIVES_MULTISIG: '0xe8d28e2ca24bb16fc7e6549ef937e05981d02606',
  FORGE_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG,
  MARKET_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG,
  LIQ_MINING_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG,
  TREASURY_MULTISIG: '0x8270400d528c34e1596ef367eedec99080a1b592',
};

export const EthConsts: PendleConstsType = {
  aave: AaveConsts,
  compound: CompoundConsts,
  sushi: SushiswapConsts,
  uni: UniswapConsts,
  kyber: KyberConsts,
  tokens: EthTokens,
  common: EthCommonConsts,
  misc: MiscConsts,
};
