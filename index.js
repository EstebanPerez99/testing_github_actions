function mooncakeSays(message) {
  let mooncake = '(o.o)';
  if ( !message ) return mooncake;

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;