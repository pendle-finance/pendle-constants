import { EthV2Protocol } from './protocol';
import { EthV2Tokens } from './tokens';
import { EthV2Markets } from './markets';

export const EthV2 = {
  ...EthV2Protocol,
  ...EthV2Markets,
  tokens: EthV2Tokens,
};
