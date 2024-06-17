import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  event: any = {};
  errorMessage: string = '';
  isCreatingEvent: boolean = false; // Propiedad añadida

  constructor(private eventService: EventService, private router: Router) { }

  createIndividualEvent() {
    this.isCreatingEvent = true;
    this.event.isTeamEvent = false;
  }

  createGroupEvent() {
    this.isCreatingEvent = true;
    this.event.isTeamEvent = true;
  }

  createEvent() {
    if (this.validateEvent()) {
      this.eventService.createEvent(this.event).subscribe(
        response => {
          console.log('Event created successfully');
          this.router.navigate(['/events']);
        },
        error => {
          console.log('Event creation failed', error);
          this.errorMessage = 'Event creation failed';
        }
      );
    } else {
      this.errorMessage = 'Please fill all required fields';
    }
  }

  validateEvent() {
    return this.event.name && this.event.description && this.event.location &&
           this.event.contactInfo && this.event.startDate && this.event.endDate;
  }
}


