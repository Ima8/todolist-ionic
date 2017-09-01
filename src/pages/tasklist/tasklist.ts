import { Component,Input} from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class tasklistPage {

 @Input() newTask

  constructor(public navCtrl: NavController) {
    this.tasks = [
      { title: 'Milk', status: 'open' },
      { title: 'Egg', status: 'open' },
      { title: 'Syrup', status: 'open' },
      { title: 'Pancake Mix', status: 'open' },
    ]
  }
  tasks: Array<any> = [];
  isDisplay:boolean = false;
  showAdd():void{
    this.isDisplay =!this.isDisplay
  }
  addTask(newTask): void {
    if (newTask) {
      this.tasks.push({ title: newTask, status: 'open' })
    }
  }

  markDone(slidingItem: ItemSliding, task: any): void {
    task.status = "done"
    slidingItem.close()
  }

  removeTask(slidingItem: ItemSliding,task: any): void {
    task.status = "removed";
    let index = this.tasks.indexOf(task)
    if (index > -1) {
      this.tasks.splice(index, 1)
    }
    slidingItem.close()
  }
}
