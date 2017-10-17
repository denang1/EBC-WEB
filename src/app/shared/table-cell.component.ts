import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'table-cell-component',
    templateUrl: './table-cell.component.html',
    styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnInit {
    @Input() data: string[] = [];
    @Input() cellWidth: string = "";
    public colStyle: any = {};

    public ngOnInit() {
        this.colStyle = {
            'width': this.cellWidth
        };
    }
    
}