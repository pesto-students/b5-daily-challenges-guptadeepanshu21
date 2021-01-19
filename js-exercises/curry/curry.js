function curry(functionToCurry) {
  const totalArguments = functionToCurry.length;

  return function curriedFunction(...curriedArguments) {
    if (curriedArguments.length < totalArguments) {
      return (...nextArguments) => curriedFunction(...curriedArguments.concat(nextArguments));
    }

    return functionToCurry(...curriedArguments);
  };
}

export { curry };
