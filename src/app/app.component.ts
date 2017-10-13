import { Component, OnInit } from '@angular/core';
import { EBCApiService } from './services/ebc-api.service';
import { RiderMiles } from './models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public riderMilesList: RiderMiles[] = [];

  constructor(private ebcApiService: EBCApiService) {}
  
  ngOnInit() {
    const ebcApiService = this.ebcApiService;
    ebcApiService.getRidersByMiles('2016').subscribe((riderMilesList: RiderMiles[]) => {
      this.riderMilesList = riderMilesList; 
    }, function(err) {
      console.log(err);
    });
  }
}
