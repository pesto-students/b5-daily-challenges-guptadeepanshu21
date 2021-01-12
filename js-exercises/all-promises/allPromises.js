const allPromises = (promises) => new Promise((resolve, reject) => {
  if (promises && promises.length) {
    const resolvedPromises = [];
    for (let i = 0; i < promises.length; i += 1) {
      Promise.resolve(promises[i]).then(
        (value) => {
          resolvedPromises.push(value);
        },
        (err) => reject(err),
      );
    }
    resolve(resolvedPromises);
  }
});

export { allPromises };
