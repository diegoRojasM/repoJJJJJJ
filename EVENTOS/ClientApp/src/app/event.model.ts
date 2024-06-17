export class Event {
    id: number | undefined;
    name?: string;
    description?: string;
    location?: string;
    contactInfo?: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    isTeamEvent: boolean | undefined;
  }
  