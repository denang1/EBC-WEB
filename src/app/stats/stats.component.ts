import { Component, OnInit, ViewChild } from '@angular/core';

import { EBCApiService, StatsService } from '../services/index';
import { RiderMiles, RiderMilesDisplayData } from '../models/index';

@Component({
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
    public riderMilesDisplayData: RiderMilesDisplayData[] = [];

    constructor(
        private ebcApiService: EBCApiService,
        private statsService: StatsService) { }

    ngOnInit() {
        this.ebcApiService.getRidersByMiles('2016').subscribe((riderMilesList: RiderMiles[]) => {
            this.riderMilesDisplayData = this.createDisplayData(riderMilesList);
        }, function (err) {
            console.log(err);
        });

    }

    public getTotalMiles(): number {
        let miles: number[] = this.riderMilesDisplayData.map((riderMilesData: RiderMilesDisplayData) => {
            return riderMilesData.miles;
        });
        return this.statsService.getTotalMiles(miles);
    }

    private createDisplayData(riderMilesData: RiderMiles[]): RiderMilesDisplayData[] {
        return riderMilesData.map((riderMiles: RiderMiles, index: number) => {
            return {
                rank: index+1,
                name: `${riderMiles.firstName} ${riderMiles.lastName}`,
                miles: riderMiles.totalMiles
            }
        });
    }
}
