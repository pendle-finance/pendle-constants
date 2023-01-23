import { BigNumber as BN } from 'ethers';
import { StethMarketConstsType } from '../../types';

export const StethJun29Consts: StethMarketConstsType = {
  name: 'SY stETH',
  SY: '0xcbC72d92b2dc8187414F6734718563898740C0BC',
  YT: '0x0D459a3287Afec25c0580691e9944d65fEaBb155',
  PT: '0xb3b61D1587C05eADEC579b616c45939F19435703',
  market: '0x9eC4c502D989F04FfA9312C9D6E3F872EC91A0F9',
  underlying: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
  expiry: BN.from('1687996800'),
  scalarRoot: BN.from('21900000000000000000'),
  initAnchor: BN.from('1035400000000000000'),
};
