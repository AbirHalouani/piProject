import { Component, OnInit } from '@angular/core';
import { Travel } from '../modules/travel';
import{TravelService} from 'src/app/service/travelService/travel.service';

import * as chartJs from 'chart.js';
@Component({
  selector: 'app-statistique-a',
  templateUrl: './statistique-a.component.html',
  styleUrls: ['./statistique-a.component.css']
})
export class StatistiqueAComponent implements OnInit {
  saleData= [];

  ctx: any;
  canvas: any;
  labels: string[] = [];
  numbers: number[] = [];

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {

    this.ctx = document.getElementById('myChart');
    this.stats();

  }

  public stats() {
    this.travelService.statistique().subscribe((response: any[]) => {
      response.map((item) => {
        this.labels.push(item[0]);
        this.numbers.push(item[1]);
      });
      new chartJs.Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: '# of Votes',
            data: this.numbers,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
     
      },
    });
    });
  }
}
