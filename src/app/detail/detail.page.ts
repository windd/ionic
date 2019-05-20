import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { WebsocketService } from '../service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  constructor(
    public location: Location,
    public ws: WebsocketService,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.ws.getRealdata(this.id);
  }
  back() {
    console.log('back');
    this.location.back();
  }

}
