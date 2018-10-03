import { Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Option } from './option';
import { InlineSelect } from './inline-select.interface';
import { SelectMulti } from './select-multi';
import { SelectOne } from './select-one';


@Component({
  selector: 'inline-select',
  templateUrl: './inline-select.component.html',
  styleUrls: ['./inline-select.component.css']
})
export class InlineSelectComponent implements OnInit {
  @Input('label') label: string;
  @Input('options') options: Option[];
  @Input('multi') multi: boolean;
  @Output('onSelect') onSelect = new EventEmitter();
  
  private select: InlineSelect;

  constructor() { }

  ngOnInit() {
    this.select = this.multi ? new SelectMulti() : new SelectOne();    
  }

  selectItem(selectedOption: Option): void {
    this.select.toggleOption(selectedOption, this.options);
    this.onSelect.emit(this.getSelecteds());
  }

  private getSelecteds() {
    return this.options.filter(option => option.selected);
  }
}
