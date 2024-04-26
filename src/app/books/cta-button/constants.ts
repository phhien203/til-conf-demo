import { CtaButtonStrategyOne } from './strategies/strategy-one';
import { CtaButtonStrategyTwo } from './strategies/strategy-two';

const strategyOne = new CtaButtonStrategyOne();
const strategyTwo = new CtaButtonStrategyTwo();

export const STRATEGY_MAP = {
  technical: strategyOne,
  nonTechnical: strategyTwo,
};
