import { Serializable } from './serializable';
export class Empty implements Serializable<Empty> {
  deserialize(_: any): Empty {
    return this;
  }
}

export class RawObject<T> implements Serializable<RawObject<T>> {
  data: T;
  deserialize(input: any): RawObject<T> {
    this.data = input.data;
    return this;
  }
}
