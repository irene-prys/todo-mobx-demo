import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item.model';
import { observable, action, computed } from 'mobx-angular';

@Injectable()
export class TodoList {
  @observable list: TodoItem[];

  constructor() {
    this.list = [];
    // todo: load exist items
  }

  @action addNew(title: string) {
    this.list.push(new TodoItem(title, false));
  }

  @computed get countOfActive() {
    return this.list.filter(item => !item.done).length;
  }

  // todo: implement removing
}