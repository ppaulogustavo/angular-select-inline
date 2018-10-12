import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Option } from './option';
import { InlineSelect } from './select-inline.interface';
import { SelectMulti } from './select-multi';
import { SelectOne } from './select-one';

@Component({
  selector: 'select-inline',
  templateUrl: './select-inline.component.html',
  styleUrls: ['./select-inline.component.css']
})
export class SelectInlineComponent implements OnInit {
  @Input('label') label: string;
  @Input('options') options: Option[];
  @Input('multi') multi: boolean;
  @Output('selected') selected = new EventEmitter();
  private select: InlineSelect;

  constructor() { }

  ngOnInit() {
    this.select = this.multi ? new SelectMulti() : new SelectOne();
  }

  selectItem(selectedOption: Option): void {
    this.select.toggleOption(selectedOption, this.options);
    this.selected.emit(this.getSelected());
  }

  private getSelected() {
    return this.options.filter(option => option.selected);
  }
}
