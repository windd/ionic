import { Component, OnInit } from '@angular/core';
import { DataService } from '../service';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  private stationList: any;
  constructor(
    public dataService: DataService,
    public alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('data');
    this.dataService.getStationList().subscribe(res => {
      if (res.code === 200) {
        this.stationList = res.stationdata;
      }
    });
  }
  stationDetail(id: number) {
    this.router.navigate(['/tabs/detail/' + id]);
  }
}
