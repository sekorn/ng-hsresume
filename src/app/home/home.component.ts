import {Component, Output} from "@angular/core";
import {DataService} from "../shared/services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() headerData;
  @Output() mainData;
  @Output() name;

  constructor(private ds: DataService){
    this.name = ds.data.name;
    this.headerData = ds.data.header;
    this.mainData = ds.data.main;
  }
}
