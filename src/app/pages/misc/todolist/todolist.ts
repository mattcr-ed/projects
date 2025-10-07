import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  imports: [],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {
  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "poop", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) => 
      this.filter === "done" ? item.done : !item.done,
    );
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false,
    });
  }
}
