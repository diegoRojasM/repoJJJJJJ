import { Participant } from "./participant.model";

export class Team {
    id?: number;
    teamName?: string;
    organization?: string;
    representative?: string;
    eventId: number | undefined;
    participants: Participant[] | undefined;
  }
  