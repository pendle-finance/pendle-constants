import { BigNumber } from 'ethers';
import { GDAIMarketConstsType } from '../../types';

const GDAI = '0xd85E038593d7A098614721EaE955EC2022B9B91B';

export const GDAIMarch2024Consts: GDAIMarketConstsType = {
  name: 'SY gDAI',
  SY: '0xAF699fb0D9F12Bf7B14474aE5c9Bea688888DF73',
  YT: '0x4a8E64c3A66ce0830e3bf2ea7863b013Aa592114',
  PT: '0x1684B747cd46858aE6312A7074353D2101154eF7',
  market: '0xa0192f6567f8f5DC38C53323235FD08b318D2dcA',
  expiry: BigNumber.from(1711584000),
  scalarRoot: BigNumber.from('12436730000000000000'),
  initAnchor: BigNumber.from('1187321000000000000'),
  GDAI: GDAI,
  underlying: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
};
