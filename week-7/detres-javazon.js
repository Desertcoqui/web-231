// description: Assignment 7 Javazon App
// Author: Professor Krasso
// Date: 5 Dec 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project we will use classes and objects
//Code attributions:
// https://www.w3schools.com/js/js_if_else.asp
// https://stackoverflow.com/questions/17684201/create-html-table-from-javascript-object/17684427
// https://www.codegrepper.com/code-examples/whatever/how+to+change+all+instances+of+a+word+in+visual+studio+code
//https://www.w3schools.com/js/js_switch.asp





// assigned variables to three set of DIVs
let products = document.getElementById("card-example2");
let services = document.getElementById("card-example3");
let employees = document.getElementById("card-example4");

//Targeting DIVs to not display on page load
products.style.display = "none";
services.style.display = "none";
employees.style.display = "none";


//classes for each div
class Product {
  constructor(id, description, price, quantity) {
    this.id = id;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.totalValue = (this.price * this.quantity).toFixed(2);
  }
}

class Services {
    constructor (id, description, hourlyRate,min){
        this.id=id;
        this.description=description;
        this.hourlyRate=hourlyRate.toFixed(2);
        this.min=min;
    }
}

class Employee {
    constructor (id, firstName,lastName,salary){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary.toFixed(2);
    }
}



function button() {
  let choice = document.querySelector("#listing").value;

  // Switch statement checking selected value of variable choice

  switch (choice) {
      case "products":
    products.style.display = "block";
    services.style.display = "none";
    employees.style.display = "none";

//Objects created using parameters from Product class
    let hackerTools = new Product("6592549283451", "Red Box", 100.15, 4);
    let hackerMovies = new Product("6592549283452","Hackers: The Movie",19.33,8);
    let mouse = new Product("6592549283453", "JellyComb: Mouse", 20.99, 18);
    let mouse2 = new Product("6592549283456", "JavaZon: Mouse", 20.44, 14);
    let mouse3 = new Product("6592549283458", "ElonMusty: Mouse", 20.83, 10);


    document.getElementById("products").innerHTML = "Javazon Products";

    //Object variables binded to the html
    document.getElementById("productID").innerHTML = "Product ID";
    document.getElementById("description").innerHTML = "Description";
    document.getElementById("price").innerHTML = "Price";
    document.getElementById("quantity").innerHTML = "Quantity";
    document.getElementById("total").innerHTML = "Total Value";

    document.getElementById("hackerToolsProductId").innerHTML = 
    hackerTools.id;
    document.getElementById("hackerToolsDescription").innerHTML =
      hackerTools.description;
    document.getElementById("hackerToolsPrices").innerHTML = 
    hackerTools.price;
    document.getElementById("hackerToolsQuantity").innerHTML =
      hackerTools.quantity;
    document.getElementById("hackerToolsTotalValue").innerHTML =
      hackerTools.totalValue;

    document.getElementById("hackerMoviesProductId").innerHTML =
      hackerMovies.id;
    document.getElementById("hackerMoviesDescription").innerHTML =
      hackerMovies.description;
    document.getElementById("hackerMoviesPrices").innerHTML =
      hackerMovies.price;
    document.getElementById("hackerMoviesQuantity").innerHTML =
      hackerMovies.quantity;
    document.getElementById("hackerMoviesTotalValue").innerHTML =
      hackerMovies.totalValue;

    document.getElementById("mouseProductId").innerHTML = mouse.id;
    document.getElementById("mouseDescription").innerHTML = mouse.description;
    document.getElementById("mousePrices").innerHTML = mouse.price;
    document.getElementById("mouseQuantity").innerHTML = mouse.quantity;
    document.getElementById("mouseTotalValue").innerHTML = mouse.totalValue;

    document.getElementById("mouse2ProductId").innerHTML = mouse2.id;
    document.getElementById("mouse2Description").innerHTML = mouse2.description;
    document.getElementById("mouse2Prices").innerHTML = mouse2.price;
    document.getElementById("mouse2Quantity").innerHTML = mouse2.quantity;
    document.getElementById("mouse2TotalValue").innerHTML = mouse2.totalValue;

    document.getElementById("mouse3ProductId").innerHTML = mouse3.id;
    document.getElementById("mouse3Description").innerHTML = mouse3.description;
    document.getElementById("mouse3Prices").innerHTML = mouse3.price;
    document.getElementById("mouse3Quantity").innerHTML = mouse3.quantity;
    document.getElementById("mouse3TotalValue").innerHTML = mouse3.totalValue;

//second switch statement
   break;
  case "services":
    services.style.display = "block";
    products.style.display = "none";
    employees.style.display = "none";

  let mopping = new Services (100,"Mopping Services",65,40);
  let vacuum = new Services (101,"Vacuuming area", 25,40);
  let wax = new Services (102,"Floor Waxing", 145, 80);
   
    document.getElementById("services").innerHTML = "Javazon Services";

   //Object variables binded to the html

    document.getElementById("servicesId").innerHTML = "Services ID";
    document.getElementById("servicesDescription").innerHTML = "Description";
    document.getElementById("servicesHourlyRate").innerHTML = "Hourly Rate";
    document.getElementById("servicesMin").innerHTML = "Minimum Billable Hours"
    
    document.getElementById("moppingId").innerHTML= mopping.id;
    document.getElementById("moppingDescription").innerHTML= mopping.description;
    document.getElementById("moppingHourlyRate").innerHTML= mopping.hourlyRate;
    document.getElementById("moppingMin").innerHTML= mopping.min;

    document.getElementById("vacuumId").innerHTML= vacuum.id; 
    document.getElementById("vacuumDescription").innerHTML= vacuum.description;
    document.getElementById("vacuumHourlyRate").innerHTML= vacuum.hourlyRate;
    document.getElementById("vacuumMin").innerHTML= vacuum.min;

    document.getElementById("waxId").innerHTML= wax.id;
    document.getElementById("waxDescription").innerHTML= wax.description; 
    document.getElementById("waxHourlyRate").innerHTML= wax.hourlyRate;
    document.getElementById("waxMin").innerHTML= wax.min;

    
break;

//Third witch statement
case "employees":
    services.style.display = "none";
    products.style.display = "none";
    employees.style.display = "block";

    let tim = new Employee (2000,"Tim","Toe",23.44);
    let tom = new Employee (2001,"Tom", "Toe", 23.55);
    let tam = new Employee (2002,"Tam", "Toe", 25.43);
    let tem = new Employee (2003, "Tem", "Toe", 29.01);
    let tum = new Employee (2004, "Tum", "Toe", 25.55);

    document.getElementById("employees").innerHTML = "Javazon Employees";


    //Object variables binded to the html
    document.getElementById("employeeId").innerHTML = "Employee ID";
    document.getElementById("employeeLast").innerHTML = "Last Name";
    document.getElementById("employeeFirst").innerHTML ="First Name" ;
    document.getElementById("employeeSalary").innerHTML = "Salary";

    document.getElementById("timID").innerHTML =tim.id ;
    document.getElementById("timFirst").innerHTML = tim.lastName;
    document.getElementById("timLast").innerHTML = tim.firstName;
    document.getElementById("timSalary").innerHTML = tim.salary;

    document.getElementById("tomID").innerHTML =tom.id ;
    document.getElementById("tomFirst").innerHTML = tom.lastName;
    document.getElementById("tomLast").innerHTML = tom.firstName;
    document.getElementById("tomSalary").innerHTML = tom.salary;

    document.getElementById("tamID").innerHTML =tam.id ;
    document.getElementById("tamFirst").innerHTML = tam.lastName;
    document.getElementById("tamLast").innerHTML = tam.firstName;
    document.getElementById("tamSalary").innerHTML = tam.salary;

    document.getElementById("temID").innerHTML =tem.id;
    document.getElementById("temFirst").innerHTML = tem.lastName;
    document.getElementById("temLast").innerHTML = tem.firstName;
    document.getElementById("temSalary").innerHTML = tem.salary;

    document.getElementById("tumID").innerHTML =tum.id ;
    document.getElementById("tumFirst").innerHTML = tum.lastName;
    document.getElementById("tumLast").innerHTML = tum.firstName;
    document.getElementById("tumSalary").innerHTML = tum.salary;



  }

}
