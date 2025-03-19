const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.log('Esercizio 1');

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
    console.log(fourthTeacher);
    console.log('Esercizio 2');

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, 'Patrick');
    console.log(teachers);
console.log('Esercizio 3');

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[teachers.length - 1];
teachers.pop();
console.log(lastTeacher);


console.log('Esercizio 4');
// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
teachers.unshift();
      console.log(firstTeacher);
      
      console.log('Esercizio 5');

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(teachers);

console.log('Esercizio 6');
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log(teachers);

console.log('Esercizio 7');
// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
    for(let i = 0; i < teachers.length; i++){
        if(teachers[i] === 'Lewis'){
            const lewisIndex = i;
            console.log(lewisIndex);
          }
    }
    
    
    
    console.log('Esercizio 8');
// 8. Verifica se l'array teachers è vuoto
for(let i=0; i<teachers.length; i++){
    if(teachers.lenght == 0){
        const isTeachersEmpty = true;
        console.log(isTeachersEmpty);
    }
}

