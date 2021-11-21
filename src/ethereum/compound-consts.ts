import {utils} from "ethers";
import {CompoundConstsType} from "../types";

export const CompoundConsts: CompoundConstsType = {
    COMPTROLLER: "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b",
    FORGE_ID_V1: utils.formatBytes32String("CompoundV2"),
    FORGE_ID_V2: utils.formatBytes32String("CompoundV2Upgraded"),
    MARKET_FACTORY_ID: utils.formatBytes32String("Compound")
};
