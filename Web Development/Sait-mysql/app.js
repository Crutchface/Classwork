const express = require('express');
const sequelize = require('./utils/database-seq');

// Import models
const Student = require('./models/student');
const Courses = require('./models/courses');



const app= express();
const port= 8000;

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

// test our db connection and sync it

sequelize.sync({force:false})
    .then(()=>{
        console.log("Database Synced")
    })
    .catch(err=>console.err("Cant sync", err));


//ENDPOINTS 

// ======================================================================================
//  STUDENTS
// ======================================================================================
// Retreive all students
// async is used to indicate a medthod that contains promises (processes requiring completion before moving forward)
app.get('/', async(req,res)=>{
    // await means wait for it to be completed before moving to the next line 
    const students = await Student.findAll();
    // console.log(students);
    res.render('index', {students})
});


// add students 
app.get('/add', (req, res)=>{
    res.render('add-student')
});

// add students submission
app.post('/add', async(req, res)=>{
    const {firstname, lastname, email, age} = req.body;
    // insert data into the database
    await Student.create({firstname, lastname, email, age});
    res.redirect('/');
});

// update with sequelize
app.get('/edit/:id', async (req, res)=>{
    // use find by pk to find by primary key
    // takes the id to search as a aparameter
    const student = await Student.findByPk(req.params.id);
    res.render('edit-students', {student})

});


// handles update details 
app.post('/edit/:id', async (req, res)=>{
    const {firstname, lastname, email, age} = req.body;
    await Student.update({firstname, lastname, email, age},{
        where: {id: req.params.id}
    });
    res.redirect('/')
});

// Deletes 

app.get('/deletestudent/:id', async (req, res)=>{
    await Student.destroy({where: {id: req.params.id}})
    res.redirect('/')
});
// ========================================================================
// COURSES
// ========================================================================

// retrieve all courses from db
app.get('/courses', async (req, res)=>{
    const courses = await Courses.findAll();
    // console.log(students);
    res.render('courses', {courses})


    });
// adding students 

// load student registration form
app.get('/addcourse', (req, res)=>{
    res.render('add-course')

});
// post for student add
app.post('/addcourse', async (req, res)=>{
    console.log(req.body);
    const {coursename, reference, teacher} = req.body
  
    // insert data into the database
    await Courses.create({coursename, reference, teacher});
    res.redirect('/courses');

});
// edit details of a student
// using a path parameter (:id)
app.get('/editcourse/:id', async (req, res)=>{
       // use find by pk to find by primary key
    // takes the id to search as a aparameter
    const course = await Courses.findByPk(req.params.id);
    res.render('edit-courses', {course})
});

// handles update details 
app.post('/editcourse/:id', async (req, res)=>{
    const {coursename, reference, teacher} = req.body;
    await Courses.update({coursename, reference, teacher},{
        where: {id: req.params.id}
    });
    res.redirect('/courses')
}); 

// Delete 
app.get('/deletecourses/:id', async (req, res)=>{
    await Courses.destroy({where: {id: req.params.id}})
    res.redirect('/courses')
});
// ==============================================================================
// GRADES
// ==============================================================================

// app.get('/add-grade', async (req, res)=>{
//     // use find by pk to find by primary key
//  // takes the id to search as a aparameter
//  const students = await Student.findAll();
//  const courses = await Courses.findAll();


//  res.render('grades', {course})
// });

// app.post('/add-grade/:id', async (req, res)=>{
//     const {coursename, reference, teacher} = req.body;
//     await Courses.update({coursename, reference, teacher},{
//         where: {id: req.params.id}
//     });
//     res.redirect('/courses')
// }); 


// ===============================================================================
// Server
// ==============================================================================
// Runs Server
app.listen(port , ()=>{
    console.log("Server is running")
})