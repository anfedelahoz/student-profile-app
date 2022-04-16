import {Student, EducationLevel} from './student.js'
import {Course} from './course.js'

let courses = [
new Course("Design and Architecture Principles", 20, 94, true, 2022),
new Course("Agile in software engineering", 20, 94, true, 2022),
new Course("Biology", 20, 85, true, 2022),
new Course("Math", 20, 90, true, 2022),
]

export const st = new Student("Andru", "Lopez", "avatar.png", 25, EducationLevel.POSTGRADUATE, courses)

console.log(st);

let studentTable: HTMLElement = document.getElementById("student")!;
let statsTable:HTMLElement = document.getElementById('stats')!;

showStudentData(st);
showStats(st);

function showStudentData(student: Student):void{
    let tbodyStudent = document.createElement("tbody");
    tbodyStudent.innerHTML = `<tr><td colspan=2><img src="./${student.avatar}" height="100"></td></tr>
    <tr><td>Name:</td><td>${student.names}</td></tr>
    <tr><td>Last Name:</td><td>${student.lastname}</td></tr>
    <tr><td>Education Level:</td><td>${student.educationLevel}</td></tr>
    <tr><td>Age:</td><td>${student.age}</td></tr>`
    studentTable.appendChild(tbodyStudent);
}

function showStats(student: Student):void{
    let certifiedNumber:number = student.giveCertifiedCourses();
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Certified courses</b></td><td>${certifiedNumber}</td>`;
    statsTable.appendChild(trElement);

}