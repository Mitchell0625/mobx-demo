//model describes what the data will look like
//(by default) are read-only
//are mutable objects

import { types } from 'mobx-state-tree';

const data = {
  name: 'Chronicles of Narnia Box Set - C.S. Lewis',
  price: 28.73,
  image: 'https://images-na.ssl-images-amazon.com/images/I/51LmtX5KPAL'
};

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    //optional - says that that piece of data can be skipped (in this example, if the image is n/a, use '')
    image: types.optional(types.string, '')
    //can also be written as image: ''
  })
  //actions returns a function
  //actions w/ self param prevents the issues of this
  //actions are the only way to modify model instances
  //exposes methods by returning an object w/ self
  .actions(self => ({
    //an implicit return of the object
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    changeImage(newImage) {
      self.image = newImage;
    }
  }));
//returning the function name makes it possible to invoke it from outside

export const WishList = types
  .model({
    //type composition
    items: types.optional(types.array(WishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    }
  }));
