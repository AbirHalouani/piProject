import { Component, OnInit } from '@angular/core';
import * as chartJs from 'chart.js';
import Chart from 'chart.js/auto';
import 'chart.js/auto';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  ctx: any;
  canvas: any;
  labels: string[] = [];
  numbers: number[] = [];
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.stats();
    this.ctx = document.getElementById('myChart');
    
  }
  redirectTo(path: string) {
    location.href = path;
  }
  public stats() {
    this.apiService.getStats().subscribe((response: any[]) => {
      response.map((item) => {
        this.labels.push(item[0].text);
        this.numbers.push(item[1]);
      });
      new chartJs.Chart(this.ctx, {
      type: 'bar',
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
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    });
  }
}