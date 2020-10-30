export class Person {
    constructor(name, yoB, job) {
        this.name = name;
        this.yoB = yoB;
        this.job = job;
    }

    age() {
        const year = new Date().getFullYear();
        return (year - this.yoB);
    }
}
