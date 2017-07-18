function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const subs = subsets(array.slice(0, array.length - 1));
  subs.forEach((sub)  => {
    subs.push(sub.concat([array[array.length -1 ]]));
  });
  return subs;
}

console.log(subsets([]));
console.log(subsets([1,2]));
