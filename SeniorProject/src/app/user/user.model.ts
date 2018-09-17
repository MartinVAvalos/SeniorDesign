export class User {
  public firstName: string;
  public lastName: string;
  public hour: number;
  public minute: number;
  public email: string;

  constructor(firstName: string, lastName: string, hour: number, minute: number, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hour = hour;
    this.minute = minute;
    this.email = email;
  }
}
