function squre(num){
    return num*num
}
module.exports=squre;


function empolyee(){
    return{
    empname:"yashu",
    empid:101,
    salary:40000
};
}
module.exports=empolyee;



function student(){
    return{
        name:"yashu",
        age:22,
        isPasses:true
    }
}
module.exports=student


function product(){
    return{
        productName:"kajal",
        productPrice:600,
        quantity:3,
        total:600*3
        
    }
}
module.exports=product


function student_list(){
    const marks = 85;
    const status = marks >= 35 ? "Pass" : "Fail";

    return {
        name: "yashu",
        marks: marks,
        status: status
    };
}

module.exports = student_list;



function calculateBill(customerName, productPrice, quantity) {
    let total = productPrice * quantity;
    let discount = 0;

    if (total >= 1000) {
        discount = total * 0.10;
    }

    let finalAmount = total - discount;

    return {
        customerName: customerName,
        total: total,
        discount: discount,
        finalAmount: finalAmount
    };
}

module.exports = calculateBill;


function employeeBonus(name, salary, experience) {
    let bonus = 0;

    if (experience >= 5) {
        bonus = salary * 0.20;
    } else if (experience >= 2) {
        bonus = salary * 0.10;
    } else {
        bonus = salary * 0.05;
    }

    return {
        name: name,
        salary: salary,
        experience: experience,
        bonus: bonus,
        totalSalary: salary + bonus
    };
}

module.exports = employeeBonus;


//! array of objects

function employees() {
    let employeeBonus=[
        { id: 1, name: "Yashu", salary: 30000 },
        { id: 2, name: "Anu", salary: 25000 },
        { id: 3, name: "Ravi", salary: 40000 }
    ];
    //? filter
    return employeeBonus.filter(e=>e.salary>=25000)
}

module.exports = employees;