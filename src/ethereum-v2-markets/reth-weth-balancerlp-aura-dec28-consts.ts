import { BigNumber as BN } from 'ethers';
import { RethWethBalancerLPAuraMarketConstsType } from "../types";

export const RethWethBalancerLPAuraDec28Consts: RethWethBalancerLPAuraMarketConstsType = {
    name: "SY rETH-WETH_BalancerLP Aura",
    SY: "0xdf7083f2A0F8a191ab5eEAFebE92ED21cD3Dd915",
    YT: "0x0F28A763198035825dFAdF3455cB5b8473a7c140",
    PT: "0xfbd85BF7A1E1bec0da6D12964B8c05471aE8f048",
    market: "0x5546d0f27BEd4075eA03a22c58F7016E24c94EA7",
    underlying: "0x1E19CF2D73a72Ef1332C882F20534B6519Be0276",
    expiry: BN.from(1703721600),
    bulkSeller: "0xB2075aeEd11C2D261c3D80c957F495D18cF874ed",
    scalarRoot: BN.from(27500000000000000000),
    initAnchor: BN.from(106732573300000000),
    AURA_BOOSTER: "0xA57b8d98dAE62B26Ec3bcC4a365338157060B234",
    AURA_TOKEN: "0xC0c293ce456fF0ED870ADd98a0828Dd4d2903DBF",
    BALANCER_VAULT: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
    BAL_TOKEN: "0xba100000625a3754423978a60c9317c58a424e3D",
    RETH: "0xae78736Cd615f374D3085123A210448E74Fc6393",
    WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    AURA_REWARD_MANAGER: "0x001B78CEC62DcFdc660E06A91Eb1bC966541d758",
    BAL_LP: "0x1E19CF2D73a72Ef1332C882F20534B6519Be0276",
}