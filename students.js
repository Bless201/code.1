const student1 = {
    name: 'Jane',
    age: 18,
    grade: 'A',
}

const student2 = {
    name: 'George',
    age: 26,
    grade: 'F',
}

const student3 = {
    name: 'Grace',
    age: 20,
    grade: 'B',
}

const student4 = {
    name: 'Mike',
    age: 22,
    grade: 'A',
}

const student5 = {
    name: 'Helen',
    age: 35,
    grade: 'D',
}
const pupils = [student1, student2, student3, student4, student5 ];
console.log(pupils)

const filterByGrade = [student1, student2, student3, student4, student5];
const result1 = filterByGrade.filter((pupils) => pupils.grade ==='A');
console.log(result1);

const averageAge = [pupils];
const result2 = averageAge.map((pupils) => (student1.age + student2.age + student3.age + student4.age + student5.age)/5);
console.log(result2);
