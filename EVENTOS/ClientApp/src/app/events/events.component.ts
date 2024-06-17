import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(
      response => {
        this.events = response;
      },
      error => {
        console.log('Failed to load events', error);
      }
    );
  }

  registerForEvent(eventId: number) {
    this.router.navigate([`/event/${eventId}/register-participant`]);
  }

  navigateToCreateEvent() {
    this.router.navigate(['/create-event']);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
