export class NotificationDto {
  constructor(
    public id: string,
    public message: string,
    public type: NotificationTypeEnum
  ) {}
}

export enum NotificationTypeEnum {
  success,
  warning,
  danger,
}
