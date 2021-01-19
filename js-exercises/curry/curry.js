function curry(functionToCurry) {
  const totalArguments = functionToCurry.length;

  return function curriedFunction(...args) {
    if (args.length < totalArguments) {
      return (...secArgs) => curriedFunction(...args.concat(secArgs));
    }

    return functionToCurry(...args);
  };
}

export { curry };
