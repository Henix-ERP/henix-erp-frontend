import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartType, ChartData, ChartOptions } from 'chart.js';
import { RequestLeaveComponent } from '../request-leave/request-leave.component';

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

  constructor(public dialog: MatDialog) {}

  requestLeave() {
    const dialogRef = this.dialog.open(RequestLeaveComponent, {
      width: '450px',
      data: { message: 'Hello from parent!' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed. Result:', result);
    });
  }
}
