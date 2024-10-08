// ========================================================================
// Setup
// =======================================================================
const express = require("express");
// import database connection
const db= require("./utils/database")
const app = express();
const port = 8000;
app.use(express.urlencoded({extended : true}))
// Set view Engine
app.set('view engine', 'ejs')

// Test connection to DB
db.connect((err)=>{
    if (err) throw err;
    console.log("Connection Successful")
});

// ======================================================================================
//  making endpoints w/ data from database
// ======================================================================================
// retrieve all students from db
app.get('/', (req, res)=>{
    // writes query
    const sql = 'select * from students';
    // const sql2 = 'select * from courses';
    // execute the query
    db.query(sql, (err, result)=>{
        if(err) throw err;
        res.render('index', {students : result})
        });  
    });
// adding students 
// load student registration form
app.get('/add', (req, res)=>{
    res.render('add-student')
});
// post for student add
app.post('/add', (req, res)=>{
    console.log(req.body);
    const {firstname, lastname, email, age} = req.body
    const sql= 'INSERT INTO students (firstname, lastname, email, age) VALUES (?,?,?,?)'
    db.query(sql, [firstname, lastname, email,age], (err, result)=>{
        if(err) throw err;
        res.redirect('/');
    });
});
// edit details of a student
// using a path parameter (:id)
app.get('/edit/:id', (req, res)=>{
    // finds the parameter id requested
    console.log(req.params);
    const sql = 'select * from students where id = ?';
    db.query(sql, [req.params.id], (err, result)=>{
        console.log(result);
        res.render('edit-students', {student:result[0]})
    });
});
// DELETE details of a student
app.get('/deletestudent/:id', (req, res)=>{
    const sql = 'DELETE FROM students WHERE id = ?';
    db.query(sql, [req.params.id], (err, result)=>{
        if(err) throw err;
        console.log("student data deleted");
        res.redirect('/');
    });
});
// handle student update w/ post
app.post('/edit/:id', (req, res)=>{
    const {firstname, lastname, email, age} = req.body;
    const sql = 'update students set firstname =?, lastname=?, email=?, age=? where id = ?'
    db.query(sql, [firstname, lastname, email, age, req.params.id ], (err, result)=>{
        if(err) throw err;
        console.log("student data updated");
        res.redirect('/');
    })
});

// ===========================================================================================
// COURSES
// ===========================================================================================

// retrieve all students from db
app.get('/courses', (req, res)=>{
    // writes query
    const sql = 'select * from courses';
    // execute the query
    db.query(sql, (err, result)=>{
        if(err) throw err;
        res.render('courses', {courses : result})
        });  
    });
// adding students 

// load student registration form
app.get('/addcourse', (req, res)=>{
    res.render('add-course')

});
// post for student add
app.post('/addcourse', (req, res)=>{
    console.log(req.body);
    const {coursename, reference, teacher} = req.body
    const sql= 'INSERT INTO courses (coursename, reference, teacher) VALUES (?,?,?)'
    db.query(sql, [coursename, reference, teacher], (err, result)=>{
        if(err) throw err;
        res.redirect('/courses');
    });
});
// edit details of a student
// using a path parameter (:id)
app.get('/editcourse/:id', (req, res)=>{
    // finds the parameter id requested
    console.log(req.params);
    const sql = 'select * from courses where id = ?';
    db.query(sql, [req.params.id], (err, result)=>{
        console.log(result);
        res.render('edit-courses', {course:result[0]})
    });
});
// DELETE details of a student
app.get('/deletecourses/:id', (req, res)=>{
    const sql = 'DELETE FROM courses WHERE id = ?';
    db.query(sql, [req.params.id], (err, result)=>{
        if(err) throw err;
        console.log("course data deleted");
        res.redirect('/courses');
    });
});
// handle student update w/ post
app.post('/editcourse/:id', (req, res)=>{
    const {coursename, reference, teacher} = req.body;
    const sql = 'update courses set coursename =?, reference=?, teacher=? where id = ?'
    db.query(sql, [coursename, reference, teacher, req.params.id ], (err, result)=>{
        if(err) throw err;
        console.log("course data updated");
        res.redirect('/courses');
    })
});

// ===============================================================================
// Grades Endpoints
// ===============================================================================

app.get('/grades' , (req, res)=>{
    const sql= 'SELECT * FROM students';
    const sql2 = 'SELECT * FROM courses';
    db.query(sql,(err, result)=>{
        db.query(sql2, (err,result2)=>{
            // console.log(result, result2);
            res.render('grades', {studentList: result, courseList:result2 })
        })
    })
});

app.post('/addgrades', (req, res)=>{
    console.log(req.body);
    const {student_id, course_id, grade} = req.body;
    const sql= 'INSERT INTO registration (student_id, course_id, grade) VALUES (?,?,?)'
    db.query(sql, [student_id, course_id, grade], (err, result)=>{
        if(err) throw err;
        res.redirect('/grades');
    });
});














// Run Server
app.listen(port, ()=>{
    console.log("Server is rinning on port: "+port)
})