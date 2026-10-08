const student = { name: "Ivan", age: 21, skills: ["js", "css"] };

const { name, age} = student;
console.log(name, age);

const [js, css] = student.skills;
console.log(js, css);

function printStudent(student, age) {
    console.log(`Student ${student.name}, ${student.age}`);
}
printStudent(student);