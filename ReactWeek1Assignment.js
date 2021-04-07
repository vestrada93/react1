class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(registeredStudent){
      const existingEmail = this.students.map(student => student.email).includes(registeredStudent.email);
      

      if(existingEmail){
          console.log(`${registeredStudent.name}'s email already exists`);
      } else {
          this.students.push(registeredStudent);
          console.log(`${registeredStudent.name}'s email ${registeredStudent.email} has been registered!`);
      }

      

    }

}



