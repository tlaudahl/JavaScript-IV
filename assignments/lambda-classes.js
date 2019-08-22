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
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Don\'t forget the homies'
});

const adam = new Instructor({
    name: 'Adam',
    location: 'Detroit Lakes',
    age: 29,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: 'Wide Receiver 4 Life'
});

const stefon = new Instructor({
    name: 'Stefon',
    location: 'Minnesota',
    age: 25,
    favLanguage: 'Python',
    specialty: 'Data Science',
    catchPhrase: 'Minneapolis Miracle'
});

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

console.log(mike.);


class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.background;
        this.className = studentAttrs.className;
        this.subjects = studentAttrs.subjects;
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
}

const dalvin = new Student({
    name: 'Dalvin',
    location: 'Minnesota',
    age: 24,
    previousBackground: 'Football',
    className: 'Intro to Web Dev',
    subjects: ['Html', 'CSS', 'JavaScript', 'LESS']
})

// console.log(mike.debugsCode(dalvin, 'How to catch')); ====> PM Mike debugeCode() Method

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

