
import { Component } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
// tiles = [
//     {text: 'One', cols: 4, rows: 9, color: 'lightblue'},
//     {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
//     {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
//     {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
//   ];
public imageSources: string[] = [
     'http://www.violinshoptampa.com/Violin%20Shop%20Tampa-15.jpg',
     'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
     'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
     'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg'
  ];
  
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };

}
