export class User {
  public firstName: string;
  public secondName: string;
  public hour: number;
  public minute: number;
  public email: string;

  constructor(firstName: string, secondName: string, hour: number, minute: number, email: string) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.hour = hour;
    this.minute = minute;
    this.email = email;
  }
}
