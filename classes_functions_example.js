class Person {
    constructor (person_id, first_name, last_name, phone_number) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.person_id = person_id;
        this.phone_number = phone_number;
    }

    get Contact () {
      return this.phone_number;
    }

    set Contact ( p_number) {
        this.phone_number = p_number;
    }
}

class Employee extends Person {
    constructor (person_id, first_name, last_name, phone_number, emp_id, salary) {
        super (person_id, first_name, last_name, phone_number)
        this.emp_id = emp_id;
        this.salary = salary;
    }
}

class User extends Person {
    constructor (person_id, first_name, last_name, phone_number, user_id, subscription_id) {
        super (person_id, first_name, last_name, phone_number);
        this.user_id = user_id;
        this.subscription_id = subscription_id;
    }
}
// Adding User
const existingUser = new User("qwe123","James","Long","1234567890");
console.log("before:",existingUser.Contact);
// Update
const updateUserInfo = (phoneNumber) => {
    
    existingUser.Contact = phoneNumber ;
    return existingUser.Contact;
}

// call to the update function
console.log("After:",updateUserInfo("9029030333"));
