import { BigNumber as BN } from 'ethers';

export type Erc20Token = {
  address: string;
  decimal: number;
  compound?: string;
  benqi?: string;
  whale?: string;
  symbol?: string;
  name?: string;
  marketWithNative?: string;
};

export type LpToken = {
  address: string;
  source?: string;
  pid?: number;
  stakeContractAddr?: string;
  decimal?: number;
  symbol?: string;
  name?: string;
};

export interface PendleConstsType {
  aave?: AaveConstsType;
  compound?: CompoundConstsType;
  kyber?: KyberConstsType;
  sushi?: SushiswapConstsType;
  uni?: UniswapConstsType;
  joe?: TraderJoeConstsType;
  benqi?: BenQiConstsType;
  wonderland?: WonderlandConstsType;
  redacted?: RedactedConstsType;
  common: CommonConstsType;
  tokens: TokensConstsType;
}

export interface AaveConstsType {
  MARKET_FACTORY_ID: string;
  FORGE_ID: string;
  LENDING_POOL: string;
  INCENTIVES_CONTROLLER: string;
}

export interface CompoundConstsType {
  COMPTROLLER: string;
  FORGE_ID_V1: string;
  FORGE_ID_V2: string;
  MARKET_FACTORY_ID: string;
}

export interface KyberConstsType {
  PAIR_FACTORY: string;
  ROUTER: string;
  FORGE_ID: string;
}

export interface SushiswapConstsType {
  MASTERCHEF_V1: string;
  MASTERCHEF_V2: string;
  ROUTER: string;
  FORGE_ID_COMPLEX: string;
  FORGE_ID_SIMPLE: string;
  CODE_HASH: number[];
  PAIR_FACTORY: string;
}

export interface UniswapConstsType {
  CODE_HASH: number[];
  PAIR_FACTORY: string;
  FORGE_ID: string;
  ROUTER: string;
}

export interface BenQiConstsType {
  COMPTROLLER: string;
  FORGE_ID: string;
}

export interface TraderJoeConstsType {
  MASTERCHEF_V2: string;
  ROUTER: string;
  FORGE_ID_COMPLEX: string;
  FORGE_ID_SIMPLE: string;
  CODE_HASH: number[];
  PAIR_FACTORY: string;
  FORGE_ID_XJOE: string;
}

export interface WonderlandConstsType {
  STAKING_HELPER: string;
  TIME_STAKING: string;
  FORGE_ID: string;
}

export interface RedactedConstsType {
  STAKING_HELPER: string;
  BTRFLY_STAKING: string;
  FORGE_ID: string;
}

export interface CommonConstsType {
  FORGE_FEE: BN;
  SWAP_FEE: BN;
  PROTOCOL_SWAP_FEE: BN;
  EXPIRY_DIVISOR: BN;
  CURVE_SHIFT_DELTA: BN;
  LOCK_NUMERATOR: BN;
  LOCK_DENOMINATOR: BN;
  INTEREST_UPDATE_RATE_DELTA_FOR_MARKET: BN;
  GENERIC_MARKET_FACTORY_ID: string;
  GOVERNANCE_MULTISIG: string;
  TEAM_TOKENS_MULTISIG?: string;
  ECOSYSTEM_FUND_MULTISIG?: string;
  SALES_MULTISIG?: string;
  LIQUIDITY_INCENTIVES_MULTISIG: string;
  FORGE_EMERGENCY_HANDLER: string;
  MARKET_EMERGENCY_HANDLER: string;
  LIQ_MINING_EMERGENCY_HANDLER: string;
  TREASURY_MULTISIG: string;
  MULTICALL_V2: string;

  LIQ_MINING_EPOCH_DURATION: BN;
  LIQ_MINING_VESTING_EPOCHS: BN;
  CHAIN_ID: number;
}

export interface TokensConstsType {
  USDT: Erc20Token;
  USDC: Erc20Token;
  PENDLE: Erc20Token;
  NATIVE: Erc20Token;
  WNATIVE: Erc20Token;

  DAI?: Erc20Token;
  STKAAVE?: Erc20Token;
  COMP?: Erc20Token;
  SUSHI?: Erc20Token;
  SUSHI_USDT_WETH_LP?: LpToken;
  UNI_USDT_WETH_LP?: LpToken;
  KYBER_USDT_WETH_LP?: LpToken;
  JOE?: Erc20Token;
  QI?: Erc20Token;
  JOE_WAVAX_DAI_LP?: LpToken;
  JOE_PENDLE_AVAX?: LpToken;
  JOE_USDC_AVAX?: LpToken;
  XJOE?: LpToken;
  MEMO?: Erc20Token;
  wMEMO?: Erc20Token;
  TIME?: Erc20Token;
  MIM?: Erc20Token;
  BTRFLY?: Erc20Token;
  xBTRFLY?: Erc20Token;
  wxBTRFLY?: Erc20Token;
}
