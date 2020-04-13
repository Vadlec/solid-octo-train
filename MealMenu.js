const menu = {
    _courses : {
      _appetizers : [],
      _mains : [],
      _desserts : [],
      
      get appetizers (){
        return this._appetizers;
      },
      set appetizers(appetizersIn){
        this._appetizers = appetizersIn;
      },
      get mains (){
        return this._mains;
      },
      set mains(mainsIn){
        this._mains = mainsIn;
      },
      get  desserts(){
        return this._desserts;
      },
      set desserts(dessertsIn){
        this._desserts = dessertsIn;
      },
  },
    // ----------
    get courses (){
      return{
        appetizers : this._courses.appetizers,
        mains : this._courses.mains,
        desserts : this._courses.desserts,
      }
    },
    //--------------
    addDishToCourse(courseName,name,price){
      let dish = {
        name : name,
        price : price,
      };
      menu._courses[courseName].push(dish);
    },
    
    getRandomDishFromCourse (courseName){
      let dishes = menu._courses[courseName];
      let i = Math.floor(Math.random()*dishes.length);
      return dishes[i];
    },
    
    generateRandomMeal(){
      let appetizer = this.getRandomDishFromCourse ('appetizers');
      let main = this.getRandomDishFromCourse ('mains');
      let dessert = this.getRandomDishFromCourse ('desserts');
      let total = appetizer.price+ main.price+ dessert.price;
      return `For appetizer : ${appetizer.name}
  For main : ${main.name}
  For dessert : ${dessert.name}
  Total price : ${total}
              Enjoy!`
    }
    
    
  };
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Green  Salad', 2.25);
  menu.addDishToCourse('appetizers', 'Fruit  Salad', 6.25);
  
  menu.addDishToCourse('mains', 'Bacon ', 4.25);
  menu.addDishToCourse('mains', 'Chicken Wings', 3.25);
  menu.addDishToCourse('mains', 'Crackers', 1.25);
  
  menu.addDishToCourse('desserts', 'Cakes', 2.25);
  menu.addDishToCourse('desserts', 'tiramisu', 4.25);
  menu.addDishToCourse('desserts', 'Baklava', 6.25);
  let meal = menu.generateRandomMeal();
  console.log(meal);
  
  