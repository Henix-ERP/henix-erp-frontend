import { Component } from '@angular/core';
import { ChartType, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-leaves-detail',
  templateUrl: './leaves-detail.component.html',
  styleUrls: ['./leaves-detail.component.scss']
})
export class LeavesDetailComponent {

  public doughnutChartType: 'doughnut' = 'doughnut';

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['On Time', 'Late Login', 'Early Leaving', 'Work From Home'],
    datasets: [
      {
        data: [350, 450, 120, 150],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverOffset: 8
      },
    ],
  };

  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
}
