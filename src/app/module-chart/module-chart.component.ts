// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-module-chart',
//   templateUrl: './module-chart.component.html',
//   styleUrls: ['./module-chart.component.css']
// })
// export class ModuleChartComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';

// EXPLICITLY IMPORT ZingChart MODULE
// import chart modules used on that page
import 'zingchart/modules-es6/zingchart-maps.min.js';
import 'zingchart/modules-es6/zingchart-maps-usa.min.js';

@Component({
  selector: 'app-module-chart',
  templateUrl: './module-chart.component.html',
  styleUrls: ['./module-chart.component.css'],
})
export class ModuleChartComponent {

  config: zingchart.graphset = {
    shapes: [
      {
        type: 'zingchart.maps',
        options: {
          name: 'usa',
          ignore: ['AK', 'HI'],
        },
      },
    ],
  };
  
}
