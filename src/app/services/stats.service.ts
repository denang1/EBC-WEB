import { Injectable } from '@angular/core';

@Injectable()
export class StatsService {
    public getTotalMiles(miles: number[]): number {
        let totalMiles: number = 0;
        for(let i = 0; i <miles.length; i++) {
            totalMiles += miles[i];
        }
        return totalMiles;
    }
}