import { expect } from 'chai';
import { ObjectEnum } from '../../src/';

const NumberStatus = {
  ACTIVE: 1,
  DELETED: 2,
} as const;

const StringStatus = {
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED',
} as const;

describe('number value enum', async () => {
  it('has() : 존재하는 Enum Key 에 대한 요청시 true 반환 ', () => {
    expect(ObjectEnum.has(NumberStatus, 'ACTIVE')).to.be.true;
  });

  it('has() : 존재하지 않는 Enum Key 에 대한 요청시 false 반환 ', () => {
    expect(ObjectEnum.has(NumberStatus, 'UNDEFINED_KEY')).to.be.false;
  });

  it('hasValue() : 존재하는 Enum Value 에 대한 요청시 true 반환 ', () => {
    expect(ObjectEnum.hasValue(NumberStatus, 1)).to.be.true;
  });

  it('hasValue() : 존재하지 않는 Enum Value 에 대한 요청시 false 반환 ', () => {
    expect(ObjectEnum.hasValue(NumberStatus, 'UNKNOWN_VALUE')).to.be.false;
  });

  it('getName() : 존재하는 Enum Value 에 대한 요청시 Key 이름 반환', () => {
    expect(ObjectEnum.getName(NumberStatus, 1)).to.be.eq('ACTIVE');
  });

  it('getName() : 존재하지 않눈 Enum Value 에 대한 요청시 undefined 반환', () => {
    expect(ObjectEnum.getName(NumberStatus, 'UNKNOWN_VALUE')).to.be.undefined;
  });

  it('keys() : Key 목록 반환', () => {
    expect(ObjectEnum.keys(NumberStatus)).to.be.eql(['ACTIVE', 'DELETED']);
  });

  it('values() : Value 목록 반환', () => {
    expect(ObjectEnum.values(NumberStatus)).to.be.eql([1, 2]);
  });

  it('entries() : Key-Value Pair 목록 반환', () => {
    expect(ObjectEnum.entries(NumberStatus)).to.be.eql([
      ['ACTIVE', 1],
      ['DELETED', 2],
    ]);
  });
});

describe('string value enum', async () => {
  it('has() : 존재하는 Enum Key 에 대한 요청시 true 반환 ', () => {
    expect(ObjectEnum.has(StringStatus, 'ACTIVE')).to.be.true;
  });

  it('has() : 존재하지 않는 Enum Key 에 대한 요청시 false 반환 ', () => {
    expect(ObjectEnum.has(StringStatus, 'UNDEFINED_KEY')).to.be.false;
  });

  it('hasValue() : 존재하는 Enum Value 에 대한 요청시 true 반환 ', () => {
    expect(ObjectEnum.hasValue(StringStatus, 'ACTIVE')).to.be.true;
  });

  it('hasValue() : 존재하지 않는 Enum Value 에 대한 요청시 false 반환 ', () => {
    expect(ObjectEnum.hasValue(StringStatus, 'UNKNOWN_VALUE')).to.be.false;
  });

  it('getName() : 존재하는 Enum Value 에 대한 요청시 Key 이름 반환', () => {
    expect(ObjectEnum.getName(StringStatus, 'ACTIVE')).to.be.eq('ACTIVE');
  });

  it('getName() : 존재하지 않눈 Enum Value 에 대한 요청시 undefined 반환', () => {
    expect(ObjectEnum.getName(StringStatus, 'UNKNOWN_VALUE')).to.be.undefined;
  });

  it('keys() : Key 목록 반환', () => {
    expect(ObjectEnum.keys(StringStatus)).to.be.eql(['ACTIVE', 'DELETED']);
  });

  it('values() : Value 목록 반환', () => {
    expect(ObjectEnum.values(StringStatus)).to.be.eql(['ACTIVE', 'DELETED']);
  });

  it('entries() : Key-Value Pair 목록 반환', () => {
    expect(ObjectEnum.entries(StringStatus)).to.be.eql([
      ['ACTIVE', 'ACTIVE'],
      ['DELETED', 'DELETED'],
    ]);
  });
});
