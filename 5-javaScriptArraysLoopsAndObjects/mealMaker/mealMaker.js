const menu = {
    // Value of an empty object
    // Contains a mapping between each course and the dishes available to order in that course.
    _courses: {
      // Each one of these should initialize to an empty array.
      appetizers: [],
      mains: [],
      desserts: []
    },
    
    // Return an object that contains key/value pairs for appetizers, mains, and desserts.
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
  
    // Getter and setter methods for the three properties.
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizer) {
      this._courses.appetizers = appetizer;
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(main) {
      this._courses.mains = main;
    },
  
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(dessert) {
      this._courses.desserts = dessert;
    },
  
    // Method which will be used to add a new dish to the specified course on the menu. It should take in three parameters
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
  
    // Function that allow us to get a random dish from a course on the menu
    // 1. Retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes.
    // 2. Generate a random index by multiplying Math.random() by the length of the dishes array
    // 3. Round that generated number to a whole number by using Math.floor() on the result.
    // 4. Return the dish located at that index in dishes.
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
    
    // 1. The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
    // 2. Create a main variable and dessert variable the same way.
    // 3. Calculates the total price and returns a string
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      return `Your meal is going to be ${appetizer.name}, ${main.name}, ${dessert.name} and the total price is ${totalPrice} euros.`;
    },
  };
  
  // Inputs to the object
  menu.addDishToCourse('appetizers', 'Cold Cuts Platter', 8);
  menu.addDishToCourse('appetizers', 'Cheese Platter', 8);
  menu.addDishToCourse('appetizers', 'Mixed Platter', 15);
  menu.addDishToCourse('mains', 'Brazilian Picanha', 15);
  menu.addDishToCourse('mains', 'Codfish Brás Style', 10);
  menu.addDishToCourse('mains', 'Shrimp à Guilho Style', 15);
  menu.addDishToCourse('desserts', 'Duo of Custard Tarts', 5);
  menu.addDishToCourse('desserts', 'Caramel Mousse', 5);
  menu.addDishToCourse('desserts', 'Traditional Portuguese Desserts', 10);
  
  // Using the method created and saving it to a variable to print the results in the console
  let meal = menu.generateRandomMeal();
  console.log(meal);