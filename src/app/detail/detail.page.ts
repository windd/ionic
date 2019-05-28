import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { WebsocketService } from '../service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  ycList: any;
  yxList: any;
  constructor(
    public location: Location,
    public dataService: DataService,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getRealdata(this.id).subscribe(res => {
      if (res.code === 200) {
        this.ycList = res.ycyx.yc;
        this.yxList = res.ycyx.yx;
      }
    });
  }
  back() {
    console.log('back');
    this.location.back();
  }

}
