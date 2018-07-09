import { Component } from '@angular/core';
import { CrudService } from './crud/crud.service';
import { crud } from './crud/crud';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private crudService:CrudService){ }
  lists = new Array();
  crud = new crud();
  ngOnInit(){
    this.crudService.getData().snapshotChanges().subscribe(item=>{
      item.forEach(element=>{
        let y = element.payload.toJSON();
        y['id'] = element.key;
         this.lists.push(y as crud);
      });
    })
  }



  onEdit(crud){
    // console.log(crud.FirstName);
    // console.log(crud.LastName);
    // console.log(crud.Age);
    // console.log(crud.Dept);
    // console.log(crud.Salary);
    this.crud = crud;
    // this.crudService.trackData(crud);
    //this.crudService.updateData(crud);
  }

  onRemove(id){
    this.crudService.deleteData(id);
  }
}
