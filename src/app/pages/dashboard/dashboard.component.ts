import { Component } from '@angular/core';

import { Task } from 'src/app/model/task';
import { CrudServiceService } from 'src/app/service/crud-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  taskArr : Task[] = [];
  readData: any;
  addTaskValue : string = '';
  errmsg: any;
  // editTaskValue : string = '';
  // taskObj : Task = new Task();
  constructor(private crudservice: CrudServiceService) { }

  ngOnInit(): void {
    // this.editTaskValue = '';
    // this.taskObj = new Task();

    this.crudservice.getAllTask().subscribe((res) => {
      this.taskArr=res;
      console.log(this.taskArr);
      })
  }

  userForm = new FormGroup({
    'task_name':new FormControl ('',Validators.required)
  });

  userSubmit()
  {
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      this.crudservice.addTask(this.userForm.value).subscribe((res)=>{
        console.log(res, 'res==>');
        this.userForm.reset();
      })
    }
    else{
      this.errmsg= 'enter a task';
      
    }
  }

  deleteID(id:any)
  {
    console.log(id, 'deleteid==>');
    this.crudservice.deleteTask(id).subscribe((res)=>{
      console.log(res, 'deleteres==>');
      
    });
  }


  // editTask() {
  //   this.taskObj.task_name = this.editTaskValue;
  //   this.crudservice.editTask(this.taskObj).subscribe(res => {
  //     this.ngOnInit();
  //   }, err=> {
  //     alert("Failed to update task");
  //   })
  // }

  // ///////
  // call(etask : Task) {
  //   this.taskObj = etask;
  //   this.editTaskValue = etask.task_name;
  // }
}
