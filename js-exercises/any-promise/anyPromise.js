const anyPromise = (promises) => new Promise((resolve, reject) => {
  const promiseErrors = [];
  for (const promise of promises) {
    promise.then(
      (value) => resolve(value),
      (err) => promiseErrors.push(err),
    );
  }
  setTimeout(() => {
    // eslint-disable-next-line no-undef
    const error = new AggregateError(promiseErrors, 'All promises rejected');
    reject(error);
  }, 5000);
});

export { anyPromise };
