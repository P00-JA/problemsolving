function multiplicativePersistence(n){
    let p=1;
    let arr = n.toString().split('');
    let product =arr.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        p,
      );
    if(product>=0 && (arr.length)>=2){
        console.log(product);
        return multiplicativePersistence(product);
    }
}
console.log(327);
multiplicativePersistence(327);