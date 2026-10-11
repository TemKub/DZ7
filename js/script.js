const student = { name: "Ivan", age: 21, skills: ["js", "css"] };

const { name, age} = student;
console.log(name, age);

const [js, css] = student.skills;
console.log(js, css);

function printStudent(student, age) {
    console.log(`Student ${student.name}, ${student.age}`);
}
printStudent(student);


function sumAndMultiply(bonus, ...salaries) {
    const total = salaries.reduce((sum, salary) => {
        return sum + salary
    }, 0);
    return total * bonus;
};
console.log(sumAndMultiply(2, 38, 32, 9));


const arrayFirst = [4, 5, 6]
const arraySecond = [1, 2]
const arrayThird = [9, 10]
const arrayFourth = [3]
const arrayFiveth = [7, 8]

const result = [...arraySecond, ...arrayFourth, ...arrayFirst, ...arrayFiveth, ...arrayThird];
console.log(result);

