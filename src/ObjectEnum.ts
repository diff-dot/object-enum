export type ObjectEnumValue<T> = T extends { [key: string]: infer V } ? V : never;
export type ObjectEnumKey<T extends EnumerableObject> = keyof T;
export type EnumerableObject<V = string | number> = { [key: PropertyKey]: V };

/**
 * Javascript Enum Proposal 과 동일한 방식으로 const object 에 사용할 수 있는 헬퍼 클래스
 *
 * @see https://github.com/rbuckton/proposal-enum
 * @see https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/
 */
export class ObjectEnum {
  public static has<E extends EnumerableObject>(objEnum: E, key: PropertyKey): key is keyof E {
    return key in objEnum;
  }

  public static hasValue<V extends string | number>(objEnum: { [key in PropertyKey]: V }, value: string | number): value is V {
    const keys = Object.keys(objEnum);
    for (const key of keys) {
      if (value === objEnum[key]) return true;
    }
    return false;
  }

  public static getName<K extends PropertyKey>(objEnum: { [key in K]: string | number }, value: string | number): K | undefined {
    const keys = Object.keys(objEnum) as K[];
    for (const key of keys) {
      if (value === objEnum[key]) return key;
    }
    return undefined;
  }

  public static keys<K extends PropertyKey>(objEnum: { [key in K]: string | number }): K[] {
    return Object.keys(objEnum) as K[];
  }

  public static values<V extends string | number>(objEnum: { [key in PropertyKey]: V }): V[] {
    return Object.keys(objEnum).map((k) => objEnum[k]);
  }

  public static entries<K extends PropertyKey, V extends string | number>(objEnum: { [key in K]: V }): [K, V][] {
    return (Object.keys(objEnum) as K[]).map((k) => [k, objEnum[k]]);
  }
}
