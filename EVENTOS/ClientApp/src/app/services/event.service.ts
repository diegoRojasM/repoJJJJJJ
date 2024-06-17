import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:5055/api/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEvent(eventId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${eventId}`);
  }

  createEvent(event: any): Observable<any> {
    return this.http.post(this.apiUrl, event);
  }

  registerParticipant(eventId: number, participant: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${eventId}/register`, participant);
  }

  registerTeam(eventId: number, team: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${eventId}/register-team`, team);
  }
}
