import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable, of } from 'rxjs';

export interface Participant {
    id: number;
    name: string;
    address: string;
    dateOfBirth: Date;
    email: string;
    phoneNumber: string;
    organization: string;
    profession: string;
    position: string;
    eventId: number;
}

@Injectable({
    providedIn: 'root'
})
export class ParticipantService {
    private readonly storageKey = 'participants';

    constructor(private localStorageService: LocalStorageService) { }

    getParticipants(): Observable<Participant[]> {
        const participants = this.localStorageService.getItem(this.storageKey) || [];
        return of(participants);
    }

    addParticipant(participant: Participant): Observable<void> {
        const participants = this.localStorageService.getItem(this.storageKey) || [];
        participant.id = participants.length ? participants[participants.length - 1].id + 1 : 1;
        participants.push(participant);
        this.localStorageService.setItem(this.storageKey, participants);
        return of();
    }

    deleteParticipant(id: number): Observable<void> {
        let participants = this.localStorageService.getItem(this.storageKey) || [];
        participants = participants.filter((p: Participant) => p.id !== id);
        this.localStorageService.setItem(this.storageKey, participants);
        return of();
    }
}
