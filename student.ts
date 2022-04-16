export enum EducationLevel{
    HIGHSCHOOL = "High School",
    UNDERGRADUATE = "Undergraduate",
    POSTGRADUATE = "Postgraduate" 
}

export class Student{
    
    constructor(public names:string, public lastname:string, public avatar:string, public age:number, public educationLevel:  EducationLevel)
    {
       
    }
}