import {Course} from './course.js';

export enum EducationLevel{
    HIGHSCHOOL = "High School",
    UNDERGRADUATE = "Undergraduate",
    POSTGRADUATE = "Postgraduate" 
}

export class Student{
    
    constructor(public names:string, public lastname:string, public avatar:string, public age:number, public educationLevel:  EducationLevel, public courses:Course[])
    {
       
    }

    public giveCertifiedCourses():number{
        let totalCoursesC:number = 0;
            for(let index=0; index < this.courses.length; index++)
            {
                let course:Course = this.courses[index];
                if(course.certified)
                {
                    totalCoursesC+= 1;
                }
            }
            return totalCoursesC;  
    }
}