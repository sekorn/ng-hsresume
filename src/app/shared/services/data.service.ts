import {Injectable} from "@angular/core";

@Injectable()
export class DataService {

  data: any;

  constructor() {
    this.data = {
      name: 'Julia Wilson',
      header: {
        menu: [
          'About',
          'Academics',
          'Athletics',
          'Extracurricular',
          'Highlight reel'
        ]
      },
      main: {
        left: {
          imageUrl: 'http://juliawilson.jwmm.com/img/custom/julia-and-toby-cropped.jpg',
          caption: 'Julia & Tobi, 2016'
        },
        right: {
          text: 'Academics are very important to me, as is an environment where students are serious about taking rigorous academic courses and reaching professional goals. I have been passionate about field hockey since first grade and continue to work hard for an opportunity to play in college.'
        }
      }
    };
  }
}
