
const message = 'The Tao gave birth to machine language.  Machine language gave birth to the assembler. The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it.  -- Geoffrey James, "The Tao of Programming"';

const results = message.split(" ");


const arrTwo = [];

let foo

const delElem = (arr) => arr.filter((el, i, a) => a.indexOf(el) !== i);

results.forEach(result =>
{
    const newArr = (result.split(''));

    const del = delElem(newArr);

    const uniq = newArr.filter((el, i, a) => a.indexOf(el) === i);

    const boo = uniq.filter(item => !del.includes(item))
   
     arrTwo.push(boo[0])
  
    const delTwo = delElem(arrTwo)

    const uniqTwo = arrTwo.filter((el, i, a) => a.indexOf(el) === i);

    foo = uniqTwo.filter(item => !delTwo.includes(item))



})
const finishArr=foo[0]
console.log(finishArr)























//  const   uniqLit = newArr.reduce((acc, item) =>
//     {
//         if (item in acc) {
//             acc[item]+=1
//         } else {
//             acc[item] = 1
         
       
//      } 
     
//     //console.log(acc)
//     //  if (acc[item] === 1) {
//     //  arr.push(item)}
//         return acc
//  }, {})

  //  console.log(uniqLit)
    
  //console.log(arr)

    
 // Object.values(uniqLit)
    
   

    
    












    // keys = Object.keys(uniqLit)
    //  console.log(keys);
    // uniqLit.find(el => el === 1)
    //  console.log(uniqLit)
    // const uniqLit = newArr.filter((lit, index, array) => array.indexOf(lit) === index);
    // console.log(uniqLit[0])
    

    
 
  


//  const finish = arr.reduce((acc, item) =>
//     {
//         if (item in acc) {
//             acc[item]+=1
//         } else {
//             acc[item] = 1
         
           
//         }

//         return acc
//  }, {})
// console.log(finish);
// const uniqFinalLit = arr.filter((lit, index, array) => array.indexOf(lit) === index);
//  console.log(uniqFinalLit)