export class RForm {
    constructor(public firstName: string, public lastName: string, public email: string, public birth: Date, public task: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birth = birth;
        this.task = task;
    }
}