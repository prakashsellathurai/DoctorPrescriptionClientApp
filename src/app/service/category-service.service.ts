import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryServiceService {

  constructor(private db: AngularFireDatabase) { }
getCategories() {
  return this.db.list('/categories',{
    query:{
      orderByChild : 'name'
    }
  });
}
}
