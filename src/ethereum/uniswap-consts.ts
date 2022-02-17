import { utils } from 'ethers';
import { UniswapConstsType } from '../types';

export const UniswapConsts: UniswapConstsType = {
  CODE_HASH: Array.from(
    utils.arrayify(
      '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'
    )
  ),
  PAIR_FACTORY: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  FORGE_ID: utils.formatBytes32String('UniswapV2'),
  ROUTER: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
};
