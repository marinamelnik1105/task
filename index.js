
const text = document.querySelector('[data-text]');

const button = document.querySelector('[data-submit]');

const result = document.querySelector('[data-result]');

const onSubmit = () =>task(text.value);

button.addEventListener('click', onSubmit);

const noRepeatElem = (arr) => arr.filter((el, i, a) => a.indexOf(el) === i);

const delElem = (arr) => arr.filter((el, i, a) => a.indexOf(el) !== i);

const task = (text) =>
{
const arrWords = text.split(" ");

    const arrFirstUniqueLetters = [];

    let arrUniqueLettersText;

    arrWords.forEach(word =>
{
        const arrLetters = (word.split(''));

        const arrUniqueLettersWord = noRepeatElem(arrLetters).filter(el => !delElem(arrLetters).includes(el));

        arrFirstUniqueLetters.push(arrUniqueLettersWord[0]);

        arrUniqueLettersText = noRepeatElem(arrFirstUniqueLetters).filter(el => !delElem(arrFirstUniqueLetters).includes(el));

})
    const resultLetter = arrUniqueLettersText[0];
    result.textContent = `result: ${resultLetter}`;
}






















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