import { MiscConstsType } from '../types';
import { BigNumber as BN, utils } from 'ethers';

export const RONE = BN.from(2).pow(40);
export const ONE_DAY = BN.from(86400);
export const MiscConsts: MiscConstsType = {
  RONE,
  USDT_OWNER_ON_ETH: '0xC6CDE7C39eB2f0F0095F41570af89eFC2C1Ea828',

  ONE_E_12: BN.from(10).pow(12),
  ONE_E_18: BN.from(10).pow(18),
  INF: BN.from(2)
    .pow(256)
    .sub(1),
  ZERO_BYTES: utils.formatBytes32String(''),
  ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
  DUMMY_ADDRESS: '0xDEADbeEfEEeEEEeEEEeEEeeeeeEeEEeeeeEEEEeE',
  ONE_HOUR: BN.from(3600),
  ONE_DAY,
  ONE_WEEK: BN.from(86400 * 7),
  FIFTEEN_DAY: BN.from(86400 * 15),
  ONE_MONTH: BN.from(2592000),
  THREE_MONTH: BN.from(2592000 * 3),
  FIVE_MONTH: BN.from(2592000 * 5),
  SIX_MONTH: BN.from(2592000 * 6),
  ONE_QUARTER: BN.from(7884000),
  ONE_YEAR: BN.from(31536000),
  END_OF_2021: BN.from(1640822400),
  FEB_OF_2022: BN.from(1645660800),
  JUNE_OF_2022: BN.from(1656547200),
  END_OF_2022: BN.from(1672272000),
  END_OF_2023: BN.from(1703721600),
  SUM_ALLOC_LIQ_YT: BN.from(10).pow(9),
};
