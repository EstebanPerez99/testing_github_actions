const { mooncakeSays } = require('./');

test('mooncake knows what to say', () => {
  expect(mooncakeSays('woooahhh!')).toBe('(o.o) woooahhh!');
});

test('mooncake is not sure what to say', () => {
  expect(mooncakeSays()).toBe('(o.o)');
});

test('mooncake is sad', () => {
  expect(mooncakeSays(":(")).toBe('(o.o) :(');
});