import {ChangeTypeEnum} from '../enums/change-type.enum';

export interface ChangeList {
  index: number;
  changeType: ChangeTypeEnum;
}
