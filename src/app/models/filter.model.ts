import { Injectable } from '@angular/core';
import { TodoItemState } from './../enums/todo-item-state.enum';
import { observable, action } from 'mobx-angular';

@Injectable()
export class Filter {
  @observable searchFilter: string;
  @observable stateFilter: TodoItemState;

  constructor() {
    this.searchFilter = '';
    this.stateFilter = TodoItemState.ALL;
  }
}