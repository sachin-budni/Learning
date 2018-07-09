import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { crud } from './crud';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  crud = new crud();
  lists :AngularFireList<any>;

  constructor(private afdata : AngularFireDatabase) { }
  getData(){
    this.lists = this.afdata.list("employees");
    return this.lists;
  }

  insertData(crud){
    this.lists.push({
      FirstName : crud.firstName,
      LastName : crud.lastName,
      Age : crud.age,
      Dept : crud.dept,
      Salary : crud.salary
    });
  }

  // trackData(crud){
  //   this.crud = crud;
  // }

  // traceData(){
  //   return this.crud;
  // }

  updateData(crud){
    console.log(crud);
    this.lists.update(crud.id,{
      FirstName : crud.firstName,
      LastName : crud.lastName,
      Age : crud.age,
      Dept : crud.dept,
      Salary : crud.salary
    });
  }

  deleteData(id){
    this.lists.remove(id);
  }
}
