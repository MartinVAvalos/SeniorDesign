export class Event {
  public title: string;
  public hour: number;
  public minute: number;
  public description: string;

  constructor(title: string, hour: number, minute: number, description: string) {
    this.title = title;
    this.hour = hour;
    this.minute = minute;
    this.description = description;
  }
}
