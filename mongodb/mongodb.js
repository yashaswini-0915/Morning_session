console.log("MongoDB morning session started"); 


// 1. Select or create the college database
//use college

// 2. Insert one student
db.students.insertOne({
  name: "Ravi",
  age: 20,
  course: "MERN Stack",
  marks: 85
})

// 3. Insert multiple students
db.students.insertMany([
  { name: "Asha", age: 21, course: "Python", marks: 92 },
  { name: "Kiran", age: 19, course: "MERN Stack", marks: 76 },
  { name: "Meera", age: 22, course: "Python", marks: 88 }
])

// 4. Display all students
db.students.find()

// 5. Find students who scored at least 80
db.students.find({ marks: { $gte: 80 } })

// 6. Display only names and marks
db.students.find({}, { name: 1, marks: 1, _id: 0 })

// 7. Sort by marks, highest first, and show the top 3
db.students.find().sort({ marks: -1 }).limit(3)

// 8. Update Ravi's marks
db.students.updateOne(
  { name: "Ravi" },
  { $set: { marks: 90 } }
)

// 9. Count students scoring at least 80
db.students.countDocuments({ marks: { $gte: 80 } })

// 10. Show the average marks for each course
db.students.aggregate([
  {
    $group: {
      _id: "$course",
      averageMarks: { $avg: "$marks" }
    }
  }
])





db.createCollection("Employees")

db.Employees.insertMany([
    {
        empId: 101,
        name: "Yashu",
        age: 22,
        salary: 30000,
        department: "IT"
    },
    {
        empId: 102,
        name: "Rahul",
        age: 25,
        salary: 40000,
        department: "HR"
    },
    {
        empId: 103,
        name: "Sneha",
        age: 23,
        salary: 35000,
        department: "IT"
    },
    {
        empId: 104,
        name: "Priya",
        age: 24,
        salary: 45000,
        department: "Finance"
    }
])


// 1. Display all employees
db.Employees.find()

// 2. Display IT employees
db.Employees.find({ department: "IT" })

// 3. Employees earning above 35000
db.Employees.find({ salary: { $gt: 35000 } })

// 4. Update Yashu's salary
db.Employees.updateOne(
    { name: "Yashu" },
    { $set: { salary: 50000 } }
)

// 5. Display employees in descending salary order
db.Employees.find().sort({ salary: -1 })