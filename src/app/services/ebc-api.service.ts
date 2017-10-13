import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Observer } from 'rxjs/Rx';
import { Rider, RiderMiles } from '../models/index';

@Injectable()
export class EBCApiService {
    private protocol: string = 'http';
    private baseUrl: string = 'localhost';
    private port: string = '3000';
    constructor(private http: Http) {}
    
    public getAllRiders(): Observable<Rider[]> {
        return new Observable((observer: Observer<Rider[]>) => {
            return this.http.get(`${this.protocol}://${this.baseUrl}:${this.port}/riders`)
            .map((response) => {
                if(response.status !== 200) {
                    Observable.throw(response.status);
                }
                else {
                    return response.json() || null;
                }
            })
            .subscribe((ridersObject: Rider[]) => {
                observer.next(ridersObject);
                observer.complete();
            }, (err) => {
                observer.error(err);
            });
        });
    }

    public getRidersByMiles(year: string): Observable<RiderMiles[]> {

        return new Observable((observer: Observer<RiderMiles[]>) => {
            return this.http.get(`${this.protocol}://${this.baseUrl}:${this.port}/stats/ridersByMiles`, {search: {'year' : year}})
            .map((response) => {
                if(response.status !== 200) {
                    Observable.throw(response.status);
                }
                else {
                    return response.json() || null;
                }
            })
            .subscribe((riderMilesObject: RiderMiles[]) => {
                observer.next(riderMilesObject);
                observer.complete();
            }, (err) => {
                observer.error(err);
            });
        });
    }
}