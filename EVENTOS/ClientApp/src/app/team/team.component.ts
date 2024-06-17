import { Component, OnInit } from '@angular/core';
import { Team, TeamService } from '../services/team.service';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
    teams: Team[] = [];

    constructor(private teamService: TeamService) { }

    ngOnInit(): void {
        this.loadTeams();
    }

    loadTeams(): void {
        this.teamService.getTeams().subscribe(data => {
            this.teams = data;
        });
    }

    addTeam(team: Team): void {
        this.teamService.addTeam(team).subscribe(() => {
            this.loadTeams();
        });
    }

    deleteTeam(id: number): void {
        this.teamService.deleteTeam(id).subscribe(() => {
            this.loadTeams();
        });
    }
}

