import { StringUtils } from '../utils/string.utils';

export class BaseModel {
  updatedAt?: Date = null;
  registeredAt?: Date = null;
  init(input: any) {
    if (input.updatedAt) {
      this.updatedAt = new Date(input.updatedAt);
    }
    if (input.registeredAt) {
      this.registeredAt = new Date(input.registeredAt);
    }
  }

  get formatRegisteredAt(): string {
    return StringUtils.datetimeFormat(this.registeredAt);
  }

  get formatUpdatedAt(): string {
    return StringUtils.datetimeFormat(this.updatedAt);
  }
}
