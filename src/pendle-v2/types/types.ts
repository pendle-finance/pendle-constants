import { BigNumber as BN } from 'ethers';

// to be imported separately
export interface V2MarketConstsType {
  name: string;
  SY: string;
  YT: string;
  PT: string;
  underlying: string;
  market: string;
  expiry: BN;
  bulkSeller?: string;
  scalarRoot: BN;
  initAnchor: BN;
}

export interface ApeMarketConstsType extends V2MarketConstsType {
  APE_STAKING: string;
}

export interface FraxUSDCCurveLpConvexMarketConstsType
  extends V2MarketConstsType {
  BOOSTER: string;
  CRV_LP: string;
  CRV_POOL: string;
  CVX_REWARD_MANAGER: string;
}

export interface LooksStakingMarketConstsType extends V2MarketConstsType {
  STAKING_CONTRACT: string;
}
export interface BalancerLPAuraMarketConstsType extends V2MarketConstsType {
  AURA_BOOSTER: string;
  AURA_TOKEN: string;
  BALANCER_VAULT: string;
  AURA_REWARD_MANAGER: string;
  BAL_LP: string;
}

export interface GlpMarketConstsType extends V2MarketConstsType {
  GLP: string;
  FEE_STAKING_GLP: string;
  REWARD_ROUTER: string;
  GLP_ROUTER: string;
  VAULT: string;
  STAKED_GLP: string;
}

export interface GDAIMarketConstsType extends V2MarketConstsType {
  GDAI: string;
}

export interface StethMarketConstsType extends V2MarketConstsType {}
