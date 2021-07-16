const log = param => console.log(param);
console.log('log: ', log);

const serializedLogFunction = log.toString();
console.log('serializedLogFunction: ', serializedLogFunction);

const deserializedLogFunction = eval(serializedLogFunction);
console.log('deserializedLogFunction: ', deserializedLogFunction);

deserializedLogFunction('hi');
