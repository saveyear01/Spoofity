import { Component, AfterViewInit,  ViewChild, ElementRef, Input } from '@angular/core';
import Glide from '@glidejs/glide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('glide', {static: false}) slider: ElementRef;

  @Input() List: any;
  @Input() perView = 3;

  constructor() { }

  ngAfterViewInit(): void {
    const glide = new Glide(this.slider.nativeElement, this.glideConfig());

    setTimeout(() => {
      glide.mount();
    }, 1000);
  }

  glideConfig() {
    return {
      type: 'carousel',
      startAt: 0,
      perView: this.perView
    };
  }

}
