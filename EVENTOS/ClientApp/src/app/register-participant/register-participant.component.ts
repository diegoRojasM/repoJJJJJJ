import { Component } from '@angular/core';
import { Participant } from '../participant.model';

@Component({
  selector: 'app-register-participant',
  templateUrl: './register-participant.component.html'
})
export class RegisterParticipantComponent {
  participant: Participant = new Participant();

  registerParticipant() {
    if (this.isFormValid()) {
      const participants = JSON.parse(localStorage.getItem('participants') || '[]');
      participants.push(this.participant);
      localStorage.setItem('participants', JSON.stringify(participants));
      alert('Registro aceptado');
    } else {
      alert('Por favor, complete todos los campos del formulario');
    }
  }

  private isFormValid(): boolean {
    return this.participant.name !== undefined &&
      this.participant.address !== undefined &&
      this.participant.dateOfBirth !== undefined &&
      this.participant.email !== undefined &&
      this.participant.phoneNumber !== undefined &&
      this.participant.organization !== undefined &&
      this.participant.profession !== undefined &&
      this.participant.position !== undefined;
  }
}
