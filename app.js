const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Store student data in memory (for simplicity)
let students = [];

// Home route
app.get('/', (req, res) => {
    res.render('index', { students: students });
});

// Form route
app.get('/form', (req, res) => {
    res.render('form');
});

// Handle form submission
app.post('/add-student', (req, res) => {
    const student = {
        name: req.body.name,
        age: req.body.age,
        course: req.body.course,
        email: req.body.email
    };
    students.push(student);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
