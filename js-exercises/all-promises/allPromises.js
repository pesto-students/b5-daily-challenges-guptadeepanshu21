// const allPromises = (args) => new Promise(resolve => {
//   if (args && args.length) {
//     resolve(Promise.all(args));
//   }
// });

// using default param value
const allPromises = (args = []) => Promise.all(args);

export { allPromises };
