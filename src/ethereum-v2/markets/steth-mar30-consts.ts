import { BigNumber as BN } from 'ethers';
import { StethMarketConstsType } from '../../types';

export const StethMar30Consts: StethMarketConstsType = {
  name: 'SY stETH',
  SY: '0xcbC72d92b2dc8187414F6734718563898740C0BC',
  YT: '0xA53ad7E3A87546CCa450992d54d517c3C939c2BF',
  PT: '0xcf44E8402a99Db82d2AccCC4d9354657Be2121Db',
  market: '0x54E28e62Ea9E8D755DC6e74674eAbE2aBfdB004E',
  underlying: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
  expiry: BN.from(1680134400),
  scalarRoot: BN.from(31400000000000000000),
  initAnchor: BN.from(1020480000000000000),
};
