import { utils, BigNumber } from 'ethers';
import web3 from 'web3';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var KyberConsts = {
  PAIR_FACTORY: '0x10908C875D865C66f271F5d3949848971c9595C9',
  ROUTER: '0x8Efa5A9AD6D594Cf76830267077B78cE0Bc5A5F8',
  FORGE_ID: /*#__PURE__*/utils.formatBytes32String('KyberDMM')
};

var RONE = /*#__PURE__*/BigNumber.from(2).pow(40);
var ONE_DAY = /*#__PURE__*/BigNumber.from(86400);
var MiscConsts = {
  RONE: RONE,
  USDT_OWNER_ON_ETH: '0xC6CDE7C39eB2f0F0095F41570af89eFC2C1Ea828',
  ONE_E_12: /*#__PURE__*/BigNumber.from(10).pow(12),
  ONE_E_18: /*#__PURE__*/BigNumber.from(10).pow(18),
  INF: /*#__PURE__*/BigNumber.from(2).pow(256).sub(1),
  ZERO_BYTES: /*#__PURE__*/utils.formatBytes32String(''),
  ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
  DUMMY_ADDRESS: '0xDEADbeEfEEeEEEeEEEeEEeeeeeEeEEeeeeEEEEeE',
  ONE_HOUR: /*#__PURE__*/BigNumber.from(3600),
  ONE_DAY: ONE_DAY,
  ONE_WEEK: /*#__PURE__*/BigNumber.from(86400 * 7),
  FIFTEEN_DAY: /*#__PURE__*/BigNumber.from(86400 * 15),
  ONE_MONTH: /*#__PURE__*/BigNumber.from(2592000),
  THREE_MONTH: /*#__PURE__*/BigNumber.from(2592000 * 3),
  FIVE_MONTH: /*#__PURE__*/BigNumber.from(2592000 * 5),
  SIX_MONTH: /*#__PURE__*/BigNumber.from(2592000 * 6),
  ONE_QUARTER: /*#__PURE__*/BigNumber.from(7884000),
  ONE_YEAR: /*#__PURE__*/BigNumber.from(31536000),
  END_OF_2023: /*#__PURE__*/BigNumber.from(1703721600),
  JUNE_OF_2022: /*#__PURE__*/BigNumber.from(1656547200),
  SUM_ALLOC_LIQ_YT: /*#__PURE__*/BigNumber.from(10).pow(9)
};

var AaveConsts = {
  LENDING_POOL: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9',
  FORGE_ID: /*#__PURE__*/utils.formatBytes32String('AaveV2'),
  MARKET_FACTORY_ID: /*#__PURE__*/utils.formatBytes32String('AaveV2'),
  INCENTIVES_CONTROLLER: '0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5'
};

var CompoundConsts = {
  COMPTROLLER: '0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b',
  FORGE_ID_V1: /*#__PURE__*/utils.formatBytes32String('CompoundV2'),
  FORGE_ID_V2: /*#__PURE__*/utils.formatBytes32String('CompoundV2Upgraded'),
  MARKET_FACTORY_ID: /*#__PURE__*/utils.formatBytes32String('Compound')
};

var SushiswapConsts = {
  MASTERCHEF_V1: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
  MASTERCHEF_V2: '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d',
  ROUTER: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  FORGE_ID_COMPLEX: /*#__PURE__*/utils.formatBytes32String('SushiswapComplex'),
  FORGE_ID_SIMPLE: /*#__PURE__*/utils.formatBytes32String('SushiswapSimple'),
  CODE_HASH: /*#__PURE__*/web3.utils.hexToBytes('0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'),
  PAIR_FACTORY: '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac'
};

var EthTokens = {
  USDT: {
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    decimal: 6,
    compound: '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9'
  },
  NATIVE: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    decimal: 18,
    compound: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5'
  },
  WNATIVE: {
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    decimal: 18
  },
  USDC: {
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    decimal: 6,
    compound: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
    source: '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503'
  },
  DAI: {
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    decimal: 18,
    compound: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    source: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    symbol: 'DAI'
  },
  STKAAVE: {
    address: '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
    decimal: 18
  },
  COMP: {
    address: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    decimal: 18
  },
  SUSHI: {
    address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    decimal: 18
  },
  SUSHI_USDT_WETH_LP: {
    address: '0x06da0fd433c1a5d7a4faa01111c044910a184553',
    pid: 0,
    stakeContractAddr: SushiswapConsts.MASTERCHEF_V1
  },
  UNI_USDT_WETH_LP: {
    address: '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852'
  },
  KYBER_USDT_WETH_LP: {
    address: '0xcE9874C42DcE7fffbE5E48B026Ff1182733266Cb'
  },
  PENDLE: {
    address: '0x808507121b80c02388fad14726482e061b8da827',
    decimal: 18,
    symbol: 'PENDLE'
  }
};

var UniswapConsts = {
  CODE_HASH: /*#__PURE__*/web3.utils.hexToBytes('0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'),
  PAIR_FACTORY: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  FORGE_ID: /*#__PURE__*/utils.formatBytes32String('UniswapV2'),
  ROUTER: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
};

var OVERRIDEN_STRING = 'TO BE OVERRIDEN';
var CommonConsts = {
  GOVERNANCE_MULTISIG: OVERRIDEN_STRING,
  TEAM_TOKENS_MULTISIG: OVERRIDEN_STRING,
  ECOSYSTEM_FUND_MULTISIG: OVERRIDEN_STRING,
  SALES_MULTISIG: OVERRIDEN_STRING,
  LIQUIDITY_INCENTIVES_MULTISIG: OVERRIDEN_STRING,
  FORGE_EMERGENCY_HANDLER: OVERRIDEN_STRING,
  MARKET_EMERGENCY_HANDLER: OVERRIDEN_STRING,
  LIQ_MINING_EMERGENCY_HANDLER: OVERRIDEN_STRING,
  TREASURY_MULTISIG: OVERRIDEN_STRING,
  GENERIC_MARKET_FACTORY_ID: /*#__PURE__*/utils.formatBytes32String('Generic'),
  FORGE_FEE: /*#__PURE__*/RONE.mul(3).div(100),
  SWAP_FEE: /*#__PURE__*/RONE.mul(1).div(100),
  PROTOCOL_SWAP_FEE: /*#__PURE__*/RONE.mul(15).div(100),
  EXPIRY_DIVISOR: /*#__PURE__*/ONE_DAY.mul(7),
  CURVE_SHIFT_DELTA: /*#__PURE__*/BigNumber.from(0),
  LIQ_MINING_EPOCH_DURATION: /*#__PURE__*/ONE_DAY.mul(7),
  LIQ_MINING_VESTING_EPOCHS: /*#__PURE__*/BigNumber.from(5),
  LOCK_NUMERATOR: /*#__PURE__*/BigNumber.from(1),
  LOCK_DENOMINATOR: /*#__PURE__*/BigNumber.from(360),
  INTEREST_UPDATE_RATE_DELTA_FOR_MARKET: /*#__PURE__*/BigNumber.from(2).pow(40).div(10000)
};

var GOVERNANCE_MULTISIG = '0x8119ec16f0573b7dac7c0cb94eb504fb32456ee1';

var EthCommonConsts = /*#__PURE__*/_extends({}, CommonConsts, {
  GOVERNANCE_MULTISIG: GOVERNANCE_MULTISIG,
  TEAM_TOKENS_MULTISIG: '0x8849d0d4c35679aa78df1b5b4ceca358d57635df',
  ECOSYSTEM_FUND_MULTISIG: '0xc21a74c7150fed22c7ca0bf9a15bbe0ddb4977cc',
  SALES_MULTISIG: '0x9b26afff63e4139cb5a3ea9955903ffffcc1d79b',
  LIQUIDITY_INCENTIVES_MULTISIG: '0xe8d28e2ca24bb16fc7e6549ef937e05981d02606',
  FORGE_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG,
  MARKET_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG,
  LIQ_MINING_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG,
  TREASURY_MULTISIG: '0x8270400d528c34e1596ef367eedec99080a1b592'
});

var EthConsts = {
  aave: AaveConsts,
  compound: CompoundConsts,
  sushi: SushiswapConsts,
  uni: UniswapConsts,
  kyber: KyberConsts,
  tokens: EthTokens,
  common: EthCommonConsts,
  misc: MiscConsts
};

var TraderJoeConsts = {
  MASTERCHEF_V2: '0xd6a4F121CA35509aF06A0Be99093d08462f53052',
  ROUTER: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
  FORGE_ID_COMPLEX: /*#__PURE__*/utils.formatBytes32String('TraderJoeComplex'),
  FORGE_ID_SIMPLE: /*#__PURE__*/utils.formatBytes32String('TraderJoeSimple'),
  CODE_HASH: /*#__PURE__*/web3.utils.hexToBytes('0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91'),
  PAIR_FACTORY: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
  FORGE_ID_XJOE: /*#__PURE__*/utils.formatBytes32String('xJoe')
};

var AvaxTokens = {
  USDT: {
    address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    decimal: 6,
    source: '0xa66f8Db3B8F1e4c79e52ac89Fec052811F4dbd19'
  },
  NATIVE: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    decimal: 18,
    benqi: '0x5C0401e81Bc07Ca70fAD469b451682c0d747Ef1c'
  },
  WNATIVE: {
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    decimal: 18,
    symbol: 'WAVAX'
  },
  USDC: {
    address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    decimal: 6,
    benqi: '0xBEb5d47A3f720Ec0a390d04b4d41ED7d9688bC7F'
  },
  DAI: {
    address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    decimal: 18,
    symbol: 'DAI',
    benqi: '0x835866d37AFB8CB8F8334dCCdaf66cf01832Ff5D',
    source: '0x20243F4081b0F777166F656871b61c2792FB4124'
  },
  QI: {
    address: '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
    decimal: 18,
    symbol: 'QI'
  },
  JOE: {
    address: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
    decimal: 18,
    symbol: 'JOE',
    source: '0x66Fb02746d72bC640643FdBa3aEFE9C126f0AA4f'
  },
  JOE_WAVAX_DAI_LP: {
    address: '0x87Dee1cC9FFd464B79e058ba20387c1984aed86a',
    pid: 37,
    stakeContractAddr: TraderJoeConsts.MASTERCHEF_V2
  },
  PENDLE: {
    address: '0xfB98B335551a418cD0737375a2ea0ded62Ea213b',
    symbol: 'PENDLE',
    decimal: 18
  },
  XJOE: {
    address: '0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33',
    pid: 24,
    stakeContractAddr: TraderJoeConsts.MASTERCHEF_V2
  },
  JOE_PENDLE_AVAX: {
    address: '0x3acD2FF1c3450bc8a9765AfD8d0DeA8E40822c86'
  },
  JOE_USDC_AVAX: {
    address: '0xa389f9430876455c36478deea9769b7ca4e3ddb1'
  },
  MEMO: {
    address: '0x136acd46c134e8269052c62a67042d6bdedde3c9',
    decimal: 9
  },
  wMEMO: {
    address: '0x0da67235dd5787d67955420c84ca1cecd4e5bb3b',
    decimal: 18
  },
  TIME: {
    address: '0xb54f16fb19478766a268f172c9480f8da1a7c9c3',
    decimal: 9
  }
};

var BenQiConsts = {
  COMPTROLLER: '0x486Af39519B4Dc9a7fCcd318217352830E8AD9b4',
  FORGE_ID: /*#__PURE__*/utils.formatBytes32String('BenQi'),
  MARKET_FACTORY_ID: /*#__PURE__*/utils.formatBytes32String('BenQi')
};

var WonderlandMoneyConsts = {
  WONDERLAND_STAKING_HELPER: '0x096BBfB78311227b805c968b070a81D358c13379',
  WONDERLAND_TIME_STAKING: '0x4456B87Af11e87E329AB7d7C7A246ed1aC2168B9'
};

var GOVERNANCE_MULTISIG$1 = '0x2116Ca021e0deB3065946dDE33e6Cb2E783Dc161';

var AvaxCommonConsts = /*#__PURE__*/_extends({}, CommonConsts, {
  GOVERNANCE_MULTISIG: GOVERNANCE_MULTISIG$1,
  FORGE_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG$1,
  MARKET_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG$1,
  LIQ_MINING_EMERGENCY_HANDLER: GOVERNANCE_MULTISIG$1,
  TREASURY_MULTISIG: '0xA605617511d2A540f418BFBc1CECafB15582B77A'
});

var AvaxConsts = {
  benqi: BenQiConsts,
  joe: TraderJoeConsts,
  tokens: AvaxTokens,
  kyber: KyberConsts,
  common: AvaxCommonConsts,
  misc: MiscConsts,
  wonderland: WonderlandMoneyConsts
};

export { AvaxConsts, EthConsts, MiscConsts };
//# sourceMappingURL=constants.esm.js.map
