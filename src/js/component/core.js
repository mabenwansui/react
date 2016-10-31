class ArrayClass{
  unique(arr){
    let _arr = [];
    arr.forEach( v => {
      if(_arr.indexOf(v) === -1){
        _arr.push(v);
      }
    });
    return _arr;
  }
}
export let _Array = new ArrayClass;