import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { Session } from '../class/sesion';
// import { Sesion } from '';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentSesion : Session = null;
  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSesion = this.loadSesionData();
  }
  setCurrentSesion(Sesion: Session): void {
    this.currentSesion = Sesion;
    this.localStorageService.setItem('currentUser', JSON.stringify(Sesion));
  }
  loadSesionData(): Session{
    var SesionStr = this.localStorageService.getItem('currentUser');
    return (SesionStr) ? <Session> JSON.parse(SesionStr) : null;
  }
  getCurrentSesion(): Session {
    return this.currentSesion;
  }
  removeCurrentSesion(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSesion = null;
  }
  getCurrentUser(): User {
    var Sesion: Session = this.getCurrentSesion();
    return (Sesion && Sesion.user) ? Sesion.user : null;
  };
  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };
  getCurrentToken(): string {
    var Sesion = this.getCurrentSesion();
    return (Sesion && Sesion.token) ? Sesion.token : null;
  };
  logout(): void{
    this.removeCurrentSesion();
    this.router.navigate(['/login']);
  }
}
