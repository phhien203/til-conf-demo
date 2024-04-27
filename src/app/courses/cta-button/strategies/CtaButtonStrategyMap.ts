import { CourseType } from '../../model/course.model';
import { CtaButtonStrategy } from './CtaButton.strategy';
import { CtaButtonOnlineStrategy } from './CtaButtonOnline.strategy';
import { CtaButtonWorkshopStrategy } from './CtaButtonWorkshop.strategy';

const onlineStrategy = new CtaButtonOnlineStrategy();
const workshopStrategy = new CtaButtonWorkshopStrategy();

export const CtaButtonStrategyMap: Record<CourseType, CtaButtonStrategy> = {
  [CourseType.Online]: onlineStrategy,
  [CourseType.Workshop]: workshopStrategy,
};
