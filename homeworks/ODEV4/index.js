
const fs = require('fs');

let FileName = "employees.json";
let employee = '{"name": "Employee 1 Name", "salary": 2000}'

fs.writeFile(FileName, employee, (err) => {
    if (err) console.log(err);
    else console.log("File created successfully");
});

fs.readFile(FileName, "utf8", (err, data) => {
    if (err) console.log(err);
    else {
        console.log(data);
        console.log("Data fetched")
    } 
});

fs.appendFile(FileName, "\n"+employee, 'utf8', (err) => {
    if (err) console.log(err);
    else console.log("Data updated successfully");
})

setTimeout(() => {
    fs.unlink(FileName, (err) => {
        if (err) console.log(err);
        else console.log("File deleted successfully");
    })
}, 3000);