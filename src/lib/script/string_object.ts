class StringObject {
  rawValue: string;

  value: object;

  constructor (rawValue: string) {
    this.rawValue = rawValue;

    Object.defineProperty(this, 'value', {
      value: StringObject.deserialize(rawValue),
      writable: false,
    });
  }

  static serialize (obj: StringObject | object): string {
    if (obj instanceof StringObject) {
      return obj.rawValue;
    }
    return JSON.stringify(obj);
  }

  static deserialize (str: string): StringObject {
    return JSON.parse(str);
  }
}

export default StringObject;
