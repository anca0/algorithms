/*
10. Sa se scrie o functie care returneaza un array cu toate elementele care au o culoare unica.
 Oricare element dupa primul care are o culoare care s-ar repeta nu este inclus in array.
*/
const demoArr = [
    { id: 1, color: 'red', height: 15, width: 20, distance: 10 },
    { id: 2, color: 'green', height: 5, width: 30, distance: 15 },
    { id: 3, color: 'turqoize', height: 7, width: 9, distance: 8 },
    { id: 4, color: 'blue', height: 2, width: 3, distance: 3 },
    { id: 5, color: 'red', height: 10, width: 10, distance: 2 },
    { id: 6, color: 'crimson', height: 7, width: 8, distance: 16 },
  
    { id: 7, color: 'yellow', height: 15, width: 20, distance: 10 },
    { id: 8, color: 'gray', height: 5, width: 30, distance: 15 },
    { id: 9, color: 'pink', height: 7, width: 9, distance: 8 },
    { id: 10, color: 'black', height: 2, width: 3, distance: 3 },
    { id: 11, color: 'red', height: 10, width: 10, distance: 2 },
    { id: 12, color: 'crimson', height: 7, width: 8, distance: 16 },
  
  ];

  function uniqueColor(){
    let resultingArray=[];

    for(let i=0; i<demoArr.length; i++){
      const currentElement = demoArr[i];
        //for any currentElement is a color - and the condition for inserting it in resultingArray is to check that its color 
        //is not found in currentElement
        const currentColorAlreadyExists = resultingArray.some( (element, index, arr)=> {
          return element.color===currentElement.color;
        })
      
        if(currentColorAlreadyExists === false) {
          resultingArray.push(currentElement)
        }
    }
    return resultingArray;
  }

/*12. Folosind array-ul de mai jos, vreau sa se obtina o variabila care contine un array de obiecte strcturat astfel:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]*/

const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];

function objArray(){
  let arrayOfObjects = classes.map((element, index, array) => {
    return {
      subject: element[0],
      time: element[1],
      teacher: element[2]
    }
  });
  
  return arrayOfObjects;
}
