import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'plotly-fancyplot',
    templateUrl: './fancyplot.component.html'
})
export class FancyplotComponent implements OnInit {
    public i = 0;

    public graph = {
        data: [
            { x: [1, 2, 3], y: [2, 6, 3], type: 'scattergl', mode: 'lines+points', marker: { color: 'red' } },
            { x: [1, 2, 3], y: [1, 2, 3], type: 'markers' },
            { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
        ],
        layout: { width: 320, height: 240, title: 'A Fancy Plot' }
    };

    constructor() { }

    ngOnInit() {
    }

    public showLog(a: any) {
        console.log(this.i++, a);
    }

}
