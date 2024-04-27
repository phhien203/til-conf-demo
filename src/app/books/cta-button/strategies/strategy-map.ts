import { CtaButtonStrategyOne } from './strategy-one';
import { CtaButtonStrategyTwo } from './strategy-two';

const strategyOne = new CtaButtonStrategyOne();
const strategyTwo = new CtaButtonStrategyTwo();

export const STRATEGY_MAP = {
  technical: strategyOne,
  nonTechnical: strategyTwo,
};
