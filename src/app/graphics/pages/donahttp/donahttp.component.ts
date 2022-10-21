import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-donahttp',
  templateUrl: './donahttp.component.html'
})
export class DonahttpComponent implements OnInit {

  constructor(private graphicsService:GraphicsService) { }

  ngOnInit(): void {
    this.graphicsService.getTotalUsers().subscribe(
      resp=>{
        console.log(resp);
        const labels=Object.keys(resp)
        const datos=Object.values(resp)
        this.doughnutChartData={
          labels:Object.keys(resp),
          datasets:[{data:Object.values(resp)}]
        }
      }
    )
  }
 
  public doughnutChartLabels: string[] =  []/* [ 'Dascargas', 'Ventas en tienda', 'Venta online' ] */;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: []
      },
    ]
  };
 
  public doughnutChartType: ChartType = 'doughnut';
}
