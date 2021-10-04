import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  textoBusqueda: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event: any){
    this.textoBusqueda = event.detail.value;
  }

}
