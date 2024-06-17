import { Component, OnInit } from '@angular/core';
import { Participant, ParticipantService } from '../services/participant.service';

@Component({
    selector: 'app-participant',
    templateUrl: './participant.component.html',
    styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
    participants: Participant[] = [];

    constructor(private participantService: ParticipantService) { }

    ngOnInit(): void {
        this.loadParticipants();
    }

    loadParticipants(): void {
        this.participantService.getParticipants().subscribe(data => {
            this.participants = data;
        });
    }

    addParticipant(participant: Participant): void {
        this.participantService.addParticipant(participant).subscribe(() => {
            this.loadParticipants();
        });
    }

    deleteParticipant(id: number): void {
        this.participantService.deleteParticipant(id).subscribe(() => {
            this.loadParticipants();
        });
    }
}
