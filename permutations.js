function permutations(array) {
  if (array.length <= 1) {
    return [array];
  }

  let perms = permutations(array.slice(0,array.length - 1));
  let newPerms = [];
  perms.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      let start = perm.slice(0,i);
      let end = perm.slice(i);
      let newPerm = start.concat([array[array.length - 1]]).concat(end);
      newPerms.push(newPerm);
    }
  });

  return newPerms;
}

console.log(permutations([]));
console.log(permutations([1,2,3]));
