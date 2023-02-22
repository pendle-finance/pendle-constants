import { ArbiV2Markets } from './markets';
import { ArbiV2PRotocol } from './protocol';

export const ArbiV2 = {
  ...ArbiV2PRotocol,
  ...ArbiV2Markets,
};
