import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Rx';

import { RiderMiles, RiderMilesDisplayData } from '../../models/index';

export class RiderMilesDataSource extends DataSource<any> {
    constructor(private riderMilesData: RiderMilesData) {
        super();
    }

    public connect(): Observable<RiderMilesDisplayData[]> {
       
        return Observable.of(this.riderMilesData.data);
    }

    public disconnect() {}
}

export class RiderMilesData {
    constructor(private riderMilesData: RiderMiles[]) {}

    get data(): RiderMilesDisplayData[] {
        const riderMilesDisplayData: RiderMilesDisplayData[] = this.riderMilesData
        .map((riderMiles: RiderMiles, index: number) => {
            return {
                rank: index+1,
                name: `${riderMiles.firstName} ${riderMiles.lastName}`,
                miles: riderMiles.totalMiles
            };
        });
        return riderMilesDisplayData;
    }
}