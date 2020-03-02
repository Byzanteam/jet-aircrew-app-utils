import StringObject from '../lib/script/string_object';

test('deserialize rawValue when construct', () => {
  const obj = { foo: 'bar' };
  const rawValue = JSON.stringify(obj);
  const so = new StringObject(rawValue);

  expect(so.rawValue).toEqual(rawValue);
  expect(so.value).toEqual(obj);
});

test('serialize StringObject instances', () => {
  const obj = { foo: 'bar' };
  const rawValue = JSON.stringify(obj);
  const so = new StringObject(rawValue);

  expect(StringObject.serialize(so)).toEqual(rawValue);
});

test('serialize plain objects', () => {
  const obj = { foo: 'bar' };
  const rawValue = JSON.stringify(obj);

  expect(StringObject.serialize(obj)).toEqual(rawValue);
});
