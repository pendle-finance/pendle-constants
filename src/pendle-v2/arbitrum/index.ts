import { ArbiV2Markets } from './markets';
import { ArbiV2PRotocol } from './protocol';
import { ArbiV2Tokens } from './tokens';

export const ArbiV2 = {
  ...ArbiV2PRotocol,
  ...ArbiV2Markets,
  tokens: ArbiV2Tokens,
};
