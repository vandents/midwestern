import { Component, HostListener } from '@angular/core';
import { DeviceService } from './device/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public deviceService: DeviceService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.deviceService.width = document.body.offsetWidth;
    this.deviceService.isMobile = this.deviceService.width < 675;
  }

}
