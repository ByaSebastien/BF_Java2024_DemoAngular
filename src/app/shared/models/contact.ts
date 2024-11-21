import {MeetingType} from '../enums/meeting-type';

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  meetingType: MeetingType;
  description: string;
  availabilities: Date[];
  atHome: boolean;
}
