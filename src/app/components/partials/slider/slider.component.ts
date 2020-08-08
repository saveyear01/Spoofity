import { Component, AfterViewInit,  ViewChild, ElementRef, Input, OnChanges, SimpleChange } from '@angular/core';
import Glide from '@glidejs/glide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  public isMounted = true;
  @ViewChild('glide', {static: false}) slider: ElementRef;

  @Input() List: any;
  @Input() listOf: string;
  @Input() perView = 3;
  @Input() type = 'slider';
  @Input() imgSize = 'xl';

  constructor() { }

  ngAfterViewInit() {
    const glide = new Glide(this.slider.nativeElement, this.glideConfig());

    setTimeout(() => {
      glide.mount();
      console.log(this.List);
    }, 1000);
  }

  glideConfig() {
    return {
      type: this.type,
      startAt: 0,
      perView: this.perView
    };
  }

}
