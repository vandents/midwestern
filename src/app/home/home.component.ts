import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device/device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public deviceService: DeviceService) { }

  ngOnInit(): void {
    
  }

}
