import { BigNumber as BN } from 'ethers';
import { BalancerLPAuraMarketConstsType } from '../../types';

export const AnkrEthWethBalancerLPAuraDec28Consts: BalancerLPAuraMarketConstsType = {
  name: 'SY ankrETH-WETH_BalancerLP Aura',
  SY: '0xc0CA1e345bE44Ea2c83202222E5084ae3a01e9DC',
  YT: '0xF88Cf36C49f19713E2BB6FdfAD02c5e73e3019d0',
  PT: '0xf431a1d9b87e8e275C9B26DC9b99641c81a2b11A',
  market: '0xbEEf0aCD30d146F8ac4Ca6665D672727b943f105',
  underlying: '0x8A34b5ad76F528bfEc06c80D85EF3b53dA7FC300',
  expiry: BN.from(1711584000),
  bulkSeller: '0x8B9dE1a4f948474AAE072A24Ef45Fb9aC1278de4',
  scalarRoot: BN.from('24269700000000000000'),
  initAnchor: BN.from('1114771000000000000'),
  AURA_PID: 48,
};
