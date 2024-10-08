const express = require('express');
const sequelize = require('./utils/database-seq');

// Import models
const Student = require('./models/student');


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
})

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






// Runs Server
app.listen(port , ()=>{
    console.log("Server is running")
})