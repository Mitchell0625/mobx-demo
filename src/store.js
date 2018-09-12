import { extendObservable } from 'mobx';

class MyStorage {
  constructor() {
    extendObservable(this, {
      myData: 'hi'
    });
  }
}

//creates a new instance of our store
const MyStore = new MyStorage();
export default MyStore;
