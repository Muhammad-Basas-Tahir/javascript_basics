const express = require('express');
const PORT = 3000;
const app = express();
app.use(express.json());

let employees = [
    { id: 1, name: 'basas', role:"designer" },
    { id: 2, name: 'ahmed', role:"developer" },
    { id: 3, name: 'taimen', role:"manager" },
];

// GET route to fetch all employees
app.get('/employees', (req, res) => {
    res.json(employees);
});

// post route
app.post('/employees',(req,res) => {
    const newEmployee = req.body;// getting the post information in newEmployee
    
    if(!newEmployee.id || !newEmployee.name){// validation 
        return res.status(400).json({error:'name and id required'})
    }
    
    employees.push(newEmployee)
    res.json(newEmployee)//responding with newEmployee
})

// Put Route:
app.put('/employees/:id', (req, res) => {
    const { id } = req.params; // Extract the id from the URL
    const updatedEmployee = req.body; // Get the updated data from the body

    // Validate that the name field is provided
    if (!updatedEmployee.name) {
        return res.status(400).json({ error: "Name is required to update!" });
    }

    // Find the employee by id
    const employeeIndex = employees.findIndex(emp => emp.id == id);

    // If the employee doesn't exist, return a 404
    if (employeeIndex === -1) {
        return res.status(404).json({ error: "Employee not found" });
    }

    // Update the employee's data while keeping the existing properties
    employees[employeeIndex] = updatedEmployee;

    // Return the updated employee
    res.status(200).json(employees[employeeIndex]);
});

// Patch Route:
app.patch('/employees/:id',(req,res) => {
    const {id} = req.params;
    const updatedFields = req.body;

    const employeeIndex = employees.findIndex(emp => emp.id == id);

    if(employeeIndex === -1){
        return res.status(404).json({Error:'employee not found'});
    }

    employees[employeeIndex] = {...employees[employeeIndex],...updatedFields}

    res.status(200).json(employees[employeeIndex])
})

// Delete route:
app.delete('/employees/:id',(req,res) => {
    const {id} = req.params; // takes the endpoint id to delete

    const employeeIndex = employees.findIndex(emp => emp.id == id);

    if(employeeIndex === -1){
        return res.status(404).json({Error:'employee not found'});
    }

    const deletedEmployee = employees.splice(employeeIndex,1)

    res.status(200).json({
        message:"employee deleted successfully",
        deletedEmployee:deletedEmployee[0]
    })
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
