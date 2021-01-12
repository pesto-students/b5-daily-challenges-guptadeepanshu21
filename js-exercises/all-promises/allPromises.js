const allPromises = (args) => new Promise((resolve, reject) => {
  if (args && args.length) {
    const promiseValues = [];
    for (let i = 0; i < args.length; i += 1) {
      Promise.resolve(args[i]).then(
        (value) => {
          promiseValues.push(value);
        },
        (err) => reject(err),
      );
    }
    resolve(promiseValues);
  }
});

export { allPromises };
