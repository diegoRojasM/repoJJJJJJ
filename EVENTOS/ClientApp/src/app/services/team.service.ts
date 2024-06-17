import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable, of } from 'rxjs';

export interface Team {
    id: number;
    teamName: string;
    organization: string;
    representative: string;
    eventId: number;
}

@Injectable({
    providedIn: 'root'
})
export class TeamService {
    private readonly storageKey = 'teams';

    constructor(private localStorageService: LocalStorageService) { }

    getTeams(): Observable<Team[]> {
        const teams = this.localStorageService.getItem(this.storageKey) || [];
        return of(teams);
    }

    addTeam(team: Team): Observable<void> {
        const teams = this.localStorageService.getItem(this.storageKey) || [];
        team.id = teams.length ? teams[teams.length - 1].id + 1 : 1;
        teams.push(team);
        this.localStorageService.setItem(this.storageKey, teams);
        return of();
    }

    deleteTeam(id: number): Observable<void> {
        let teams = this.localStorageService.getItem(this.storageKey) || [];
        teams = teams.filter((t: Team) => t.id !== id);
        this.localStorageService.setItem(this.storageKey, teams);
        return of();
    }
}
