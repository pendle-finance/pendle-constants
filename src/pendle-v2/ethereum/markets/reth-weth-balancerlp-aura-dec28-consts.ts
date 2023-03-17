import { BigNumber as BN } from 'ethers';
import { BalancerLPAuraMarketConstsType } from '../../types';

export const RethWethBalancerLPAuraDec28Consts: BalancerLPAuraMarketConstsType =
  {
    name: 'SY rETH-WETH_BalancerLP Aura',
    SY: '0xdf7083f2A0F8a191ab5eEAFebE92ED21cD3Dd915',
    YT: '0x0F28A763198035825dFAdF3455cB5b8473a7c140',
    PT: '0xfbd85BF7A1E1bec0da6D12964B8c05471aE8f048',
    market: '0x5546d0f27BEd4075eA03a22c58F7016E24c94EA7',
    underlying: '0x1E19CF2D73a72Ef1332C882F20534B6519Be0276',
    expiry: BN.from('1703721600'),
    bulkSeller: '0xB2075aeEd11C2D261c3D80c957F495D18cF874ed',
    scalarRoot: BN.from('27500000000000000000'),
    initAnchor: BN.from('106732573300000000'),
    AURA_PID: 15,
  };
