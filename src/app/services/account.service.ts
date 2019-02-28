import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { Observable, of, forkJoin, concat, from } from 'rxjs';
import { map, catchError, flatMap, mergeMap,  } from 'rxjs/operators';

import { AppDataService } from './app-data.service';
import { Parkable } from './parkable.service';

export class Account {
  id?: number;

  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;

  plateNumbers?: string;
  creditCards?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountForSignup = new Account();

  savedUserName: string;
  savedPassword: string;
  private currentAccount: Account;

  private serviceEndPoint = '';

  constructor(private appConfig: AppDataService, private httpClient: HttpClient,
    private parkableService: Parkable.Service, private storage: Storage) {
    this.serviceEndPoint = `${this.appConfig.apiURL}/Accounts`;
  }

  loadCurrentUser(): Observable<boolean> {
    if (this.currentAccount) {
      return of(true);
    }

    return from(Promise.all([
        this.storage.get('Parkable.savedUserName'),
        this.storage.get('Parkable.savedPassword')]))
      .pipe(flatMap(data => {
        this.savedUserName = data[0];
        this.savedPassword = data[1];
        if (this.savedUserName && this.savedUserName.length > 0) {
          return this.login(this.savedUserName, this.savedPassword);
        } else {
          return of(false);
        }
      }));
  }

  get currentUser(): Account { return this.currentAccount; }

  set currentUser(account: Account) {
    this.currentAccount = account;
    this.parkableService.carParks.start();
    this.parkableService.parkings.start();
  }

  clearSaving() {
    this.storage.remove('Parkable.savedUserName');
    this.storage.remove('Parkable.savedPassword');
    this.currentUser = null;
    this.savedUserName = '';
  }

  saveIdentity() {
    this.storage.set('Parkable.savedUserName', this.currentUser.email);
    this.storage.set('Parkable.savedPassword', this.currentUser.password);
  }

  signUp(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', timeout: '2000' })
    };

    return this.httpClient.post<any>(`${this.serviceEndPoint}`, this.accountForSignup, httpOptions).pipe(
      map(user => {
          this.currentUser = user;
          this.savedUserName = this.currentUser.email;
          this.saveIdentity();
          return 'OK';
        },
        catchError(error => error.toString())
    ));
  }

  login(userName, password): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', timeout: '2000' }),
      params: { userName: userName, password: password }
    };

    return this.httpClient.get<any>(`${this.serviceEndPoint}`, httpOptions).pipe(
      map(user => {
          this.currentUser = user.account;
          this.savedUserName = this.currentUser.email;
          this.saveIdentity();
          return true;
        },
        () => {
          return false;
        }
    ));
  }

  logout() {
    if (this.currentAccount) {
      this.clearSaving();
    }
  }

  update(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', timeout: '2000' }),
    };

    return this.httpClient.put<Account>(`${this.serviceEndPoint}/${this.currentUser.id}`, this.currentUser, httpOptions).pipe(
      map(user => {
          return 'OK';
        },
        catchError(error => error.toString())
    ));
  }
}
