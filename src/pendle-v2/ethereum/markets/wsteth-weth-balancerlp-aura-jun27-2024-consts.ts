import { BigNumber as BN } from 'ethers';
import { BalancerLPAuraMarketConstsType } from '../../types';

export const WstEthWethBalancerLPAuraDec28Consts: BalancerLPAuraMarketConstsType =
  {
    name: 'SY wstETH-WETH_BalancerLP Aura',
    SY: '0x8267fdabd1b8C8645138f2dE5B0fe24988DC9820',
    YT: '0x37fEc7b2f36f3bbAe956262F46ddF21830fa68ef',
    PT: '0xf6A865c4B9b087fFDd1e0DF8b5Dbb89Ee3546f49',
    market: '0xFcbAe4635CA89866F83Add208eCcEec742678746',
    underlying: '0x32296969Ef14EB0c6d29669C550D4a0449130230',
    expiry: BN.from('1719446400'),
    bulkSeller: '0xd044Ee6D5dD9E9e4f6E3e81d1DF3ADB8adabAba0',
    scalarRoot: BN.from('28880000000000000000'),
    initAnchor: BN.from('1105675000000000000'),
    AURA_PID: 29,
  };
