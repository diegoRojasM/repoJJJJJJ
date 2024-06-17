import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  event: any;
  participant: any = {};
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');

    if (eventId !== null) {
      const eventIdNumber = +eventId;
      // Simulamos obtener el evento desde algún servicio
      this.event = {
        id: eventIdNumber,
        name: 'Evento de prueba',
        description: 'Descripción del evento de prueba',
        location: 'Ubicación del evento de prueba',
        contactInfo: 'Contacto del evento de prueba',
        startDate: new Date(),
        endDate: new Date(),
        isTeamEvent: false
      };
    } else {
      console.error('EventId is null');
    }
  }

  registerForEvent() {
    if (this.validateParticipant()) {
      // Simulamos guardar el participante en el localStorage
      localStorage.setItem('participant', JSON.stringify(this.participant));
      console.log('Participant registered successfully');
      this.router.navigate(['/events']);
    } else {
      this.errorMessage = 'Please fill all required fields';
    }
  }

  validateParticipant() {
    return (
      this.participant.name &&
      this.participant.address &&
      this.participant.dateOfBirth &&
      this.participant.email &&
      this.participant.phoneNumber &&
      this.participant.organization &&
      this.participant.profession &&
      this.participant.position
    );
  }
}
