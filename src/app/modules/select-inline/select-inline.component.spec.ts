import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInlineComponent } from './select-inline.component';
import { SelectMulti } from './select-multi';

describe('SelectInlineComponent', () => {
  let component: SelectInlineComponent;
  let fixture: ComponentFixture<SelectInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.options = [
      {name: 'dog'},
      {name: 'cat'},
      {name: 'bird'}
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select one item', () => {
    component.multi = false;
    component.selected.subscribe(selecteds => expect(selecteds.length).toBe(1));
    component.selectItem(component.options[0]);
  });

  it('should change selected item', () => {
    component.multi = false;
    component.selected.subscribe(selecteds => {
      expect(selecteds.length).toBe(1);
    });
    component.selectItem(component.options[0]);
    component.selectItem(component.options[1]);
    component.selectItem(component.options[2]);
  });

  it('should select two items', () => {
    component['select'] = new SelectMulti();
    component.selectItem(component.options[0]);
    component.selectItem(component.options[1]);
    expect(component['getSelecteds']().length).toBe(2);
  });

});
