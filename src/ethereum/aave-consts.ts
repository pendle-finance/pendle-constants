import {utils} from "ethers";
import {AaveConstsType} from "../types";

export const AaveConsts: AaveConstsType = {
    LENDING_POOL: "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
    FORGE_ID: utils.formatBytes32String("AaveV2"),
    MARKET_FACTORY_ID: utils.formatBytes32String("AaveV2"),
    INCENTIVES_CONTROLLER: "0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5"
};
