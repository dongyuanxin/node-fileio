// bad finally 中使用了 return, throw, break 或 continue
function foo() {
  try {
      return 1;
  } finally {
      // finally 会在 try 之前执行，故会 return 2
      return 2;
  }
}

console.log(foo())

let num = 213n
if(typeof num === '') {
  console.log(num);
}

class Test {
  constructor(props) {
    
  }
}