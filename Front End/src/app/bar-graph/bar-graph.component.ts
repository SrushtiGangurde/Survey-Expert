import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  questions  = [1,2,3,4,5];

  public chartType: any = 'horizontalBar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56]}
  ];

  public chartLabels: Array<any> = ['Strongly agree', 'Agree', 'Neutral', 'Disagree', 'Strongly disagree'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        '#339BFF',
        '#339BFF',
        '#339BFF',
        '#339BFF',
        '#339BFF',
        '#339BFF',
        '#339BFF'
      ],

      borderColor: [
      ],
      
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
