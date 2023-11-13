let a= [3,0,4,2,0,5,8,5,8,9,6,6,4,0];
//1. sort this array using inbuilt functions
console.log('Ans 1:')
console.log(a.sort((a,b)=>{
return a-b
}));
//2) remove duplicates of the array using inbuilt functions
let b=new Set(a) ;
let newArr=(Array.from(b));
console.log('Ans 2:')
console.log(newArr);
console.log(newArr.length)
//3) sort this array without inbuilt functions using basic loops and all.
let temp=null;
for(let i=0;i<(a.length);i++){
if(a[i]>a[i+1]){
 temp=a[i];
 a[i]=a[i+1];
 a[i+1]=temp;
}
}
console.log('Ans 3:')
console.log(a);


//4) Rearrange an array in maximum minimum form
let c= newArr.slice(0,newArr.length/2)
//console.log(c);
let d=newArr.slice((newArr.length/2),newArr.length);
//console.log(d);
let count=0
for(let i=1;i<newArr.length;i=i+2){
   d.splice(i,0,c[count]);
   count++;
}
console.log("Ans 4:")
console.log(d);


//5) remove duplicates of the array with normal loops
console.log(a);
for(let i=0;i<a.length;i++){
for(let j=i+1; j<a.length;j++){
if(a[i]==a[j]){
a.splice(j,1)
}
}
}

console.log('Ans 5:')
console.log(a);
//6) Find the leader of the array

let leaders='';
let arr= [3,0,4,2,0,5,8,5,8,9,6,6,4,0];
let arrl=arr.length;
function leader(ar,l){
for (let i=0;i<l;i++){
let j;
for(j=i+1;j<l;j++){
if(ar[i]<=ar[j]){
break;
}
}
if(j==l){
console.log(ar[i]);
leaders=ar[i]+'';
}
}
return leaders;
}
console.log('Ans 6:')
leader(arr,arrl);
//7) In the above array move all zeroes to end of array
for(let i=0;i<arrl;i++){
   if(arr[i]===0){
       arr.splice(i,1);
       arr.push(0);
       
   }
}
console.log('Ans 7:')
console.log(arr)






