import { Component, OnInit, ViewChild } from '@angular/core';

import { RiderMilesDataSource, RiderMilesData } from './data-sources/rider-miles.data-source';
import { EBCApiService, StatsService } from '../services/index';
import { RiderMiles } from '../models/index';

@Component({
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
    public riderMilesList: RiderMiles[] = [];
    public columns: string[] = ['rank','name','miles'];
    public riderMilesDataSource: RiderMilesDataSource | null;
    public riderMilesData: RiderMilesData | null;

    constructor(
        private ebcApiService: EBCApiService,
        private statsService: StatsService) { }

    ngOnInit() {
        this.ebcApiService.getRidersByMiles('2016').subscribe((riderMilesList: RiderMiles[]) => {
            this.riderMilesList = riderMilesList;
            this.riderMilesData = new RiderMilesData(riderMilesList);
            this.riderMilesDataSource = new RiderMilesDataSource(this.riderMilesData);
            console.log(this.riderMilesDataSource);
        }, function (err) {
            console.log(err);
        });

    }

    public getTotalMiles(): number {
        let miles: number[] = this.riderMilesList.map((riderMiles: RiderMiles) => {
            return riderMiles.totalMiles;
        });
        return this.statsService.getTotalMiles(miles);
    }
}
