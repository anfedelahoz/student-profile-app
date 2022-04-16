import {Student, EducationLevel} from './student.js'

export const st = new Student("Andru", "Lopez", "avatar.png", 25, EducationLevel.POSTGRADUATE)

console.log(st);

let studentTable: HTMLElement = document.getElementById("student")!;

showStudentData(st);

function showStudentData(student: Student):void{
    let tbodyStudent = document.createElement("tbody");
    tbodyStudent.innerHTML = `<tr><td colspan=2><img src="./${student.avatar}" height="100"></td></tr>
    <tr><td>Name:</td><td>${student.names}</td></tr>
    <tr><td>Last Name:</td><td>${student.lastname}</td></tr>
    <tr><td>Education Level:</td><td>${student.educationLevel}</td></tr>
    <tr><td>Age:</td><td>${student.age}</td></tr>`
    studentTable.appendChild(tbodyStudent);
}