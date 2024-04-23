
// Write a "person" class to display all details


class Person {
    constructor(name, age, gender, country) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.country = country;
    }
  //display details

    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`gender: ${this.gender}`);
      console.log(`country: ${this.country}`);
    }
  }
  
  // instances 

  const person1 = new Person('Nandhini', 25, 'Female','India');
  const person2 = new Person('Rajarajan', 34, 'Male','Canada');

  console.log('\nPerson 1 Details:');
  person1.displayDetails();
  
  
  console.log('\nPerson 2 Details:');
  person2.displayDetails();