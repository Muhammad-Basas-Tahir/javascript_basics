const express = require('express');
const PORT = 3000;
const app = express();
app.use(express.json());

let employees = [
    { id: 1, name: 'basas' }
];

// GET route to fetch all employees
app.get('/employees', (req, res) => {
    res.json(employees);
});

app.post('/employees',(req,res) => {
    const newEmployee = req.body;
    if(!newEmployee.id || !newEmployee.name){
        return res.status(400).json({error:'name and id required'})
    }
    employees.push(newEmployee)
    res.json(newEmployee)
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
