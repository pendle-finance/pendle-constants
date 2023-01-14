import { BigNumber as BN } from 'ethers';
import { V2MarketConstsType } from "../types";

export const FraxUSDCCurveLpConvexMar30Consts: V2MarketConstsType = {
    name: "SY FRAXUSDC_CurveLP Convex",
    SY: "0xD393D1dDd6B8811A86D925F5E14014282581bC04",
    YT: "0xC5Cd692e9b4622ab8Cdb57C83A0f99f874A169Cd",
    PT: "0x5fe30Ac5cb1aBB0e44CdffB2916c254AEb368650",
    market: "0x7b246B8dBC2a640BF2D8221890cEe8327fC23917",
    underlying: "0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC",
    expiry: BN.from(1680134400),
    bulkSeller: "0xBb05ce1299467a2C4c43090c162f170892C30b7A",
    scalarRoot: BN.from(27800000000000000000),
    initAnchor: BN.from(101069999900000000)
}