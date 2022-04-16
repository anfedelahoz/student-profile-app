export var EducationLevel;
(function (EducationLevel) {
    EducationLevel["HIGHSCHOOL"] = "High School";
    EducationLevel["UNDERGRADUATE"] = "Undergraduate";
    EducationLevel["POSTGRADUATE"] = "Postgraduate";
})(EducationLevel || (EducationLevel = {}));
export class Student {
    constructor(names, lastname, avatar, age, educationLevel, courses) {
        this.names = names;
        this.lastname = lastname;
        this.avatar = avatar;
        this.age = age;
        this.educationLevel = educationLevel;
        this.courses = courses;
    }
    giveCertifiedCourses() {
        let totalCoursesC = 0;
        for (let index = 0; index < this.courses.length; index++) {
            let course = this.courses[index];
            if (course.certified) {
                totalCoursesC += 1;
            }
        }
        return totalCoursesC;
    }
}
