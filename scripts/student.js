export var EducationLevel;
(function (EducationLevel) {
    EducationLevel["HIGHSCHOOL"] = "High School";
    EducationLevel["UNDERGRADUATE"] = "Undergraduate";
    EducationLevel["POSTGRADUATE"] = "Postgraduate";
})(EducationLevel || (EducationLevel = {}));
export class Student {
    constructor(names, lastname, avatar, age, educationLevel) {
        this.names = names;
        this.lastname = lastname;
        this.avatar = avatar;
        this.age = age;
        this.educationLevel = educationLevel;
    }
}
