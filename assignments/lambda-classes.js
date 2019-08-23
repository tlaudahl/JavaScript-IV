class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
    studentGrade(student) {
        let score = Math.floor(Math.random() * 100);
        // Make sure score + current grade cannot go over 100
        // and score - current grade cannot go under 0
        // if (student.grade - score > 0){
        //         return student.grade -= score, student.checkGrad();
        // }
        // less than or equal to 5 - subtract points
        // greater than 5 -- add points
        let random = Math.floor(Math.random() * 11)
        if (student.grade === 100) {
            student.grade -= score;
            return `${student.name} now has a grade of ${student.grade}`;
        }
        if (random <= 5) {
            if (student.grade - score > 0) {
                student.grade -= score;
                return `${student.name} now has a grade of ${student.grade}`;
            } else {
                return `${student.name}'s grade did not change, it is currently ${student.grade}`;
            }
        }
        if(random > 5) {
            if (student.grade + score > 100) {
                return `${student.name}'s grade did not change, it is currently ${student.grade}`;
            } else {
                student.grade += score;
                return `${student.name} now has a grade of ${student.grade}`;
            }
        }
    }
}

const intructorTest = new Instructor({
    name: 'Test',
    age: 24,
    location: 'Shakopee',
    specialty: 'Grading',
    favLanguage: 'Alphabet',
    catchPhrase: 'I don\'t grade hard, I grade accordingly'
})


class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time! :lumber-christian:`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const mike = new ProjectManager({
    name: 'Mike',
    location: 'Peoria',
    age: 63,
    favLanguage: 'Football',
    specialty: 'Coaching',
    catchPhrase: 'Tweet that',
    gradClassName: 'C101',
    favInstructor: 'Myself',
})

// console.log(mike.standUp('Web23'));

const kevin = new ProjectManager({
    name: 'Kevin',
    location: 'N/A',
    age: 37,
    favLanguage: 'Football',
    specialty: 'Offensive Coordination',
    catchPhrase: 'Tweet this',
    gradClassName: 'OC101',
    favInstructor: 'Mike Zimmer',
})

// console.log(kevin.demo('Offensive Coordinator Coordination'));


class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.subjects = studentAttrs.subjects;
        this.grade = 100;
    }
    listSubjects() {
        this.subjects.forEach(e => console.log(e))
    }
    pRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    checkGrad() {
        if (this.grade < 70) {
            return `${this.name} is not eligible to graduate with a grade of ${this.grade}`
        } else {
            return `Congratulations! ${this.name}`
        }
    } 
}

const dalvin = new Student({
    name: 'Dalvin',
    location: 'Minnesota',
    age: 24,
    previousBackground: 'Football',
    className: 'Intro to Web Dev',
    subjects: ['Html', 'CSS', 'JavaScript', 'LESS']
})


console.log(intructorTest.studentGrade(dalvin));


// console.log(mike.debugsCode(dalvin, 'How to catch')); // ====> PM Mike debugeCode() Method

// console.log(dalvin.listSubjects());
// console.log(dalvin.pRAssignment('JavaScript'));
// console.log(dalvin.speak());


const kyle = new Student({
    name: 'Kyle',
    location: 'Cincinnati',
    age: 29,
    previousBackground: 'Football',
    className: 'Applied JavaScript',
    subjects: ['Html', 'CSS', 'JavaScript', 'SASS']
})

// console.log(kyle.listSubjects());
// console.log(kyle.pRAssignment('JavaScript'));
// console.log(kyle.speak());

/*
* Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/