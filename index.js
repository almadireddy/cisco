const express = require("express")
const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database(':memory:');
const app = express();

db.run("CREATE table if not exists employees (firstname text, lastname text);");

app.get("/", (req, res) => {

  res.json({
    firstName: "Aahlad",
    lastName: "Madireddy"
  })
})

app.post("/:lastName/:firstName", (req, res) => {
  const lastName = req.params.lastName;
  const firstName = req.params.firstName;

  db.run(`Insert into employees(firstname, lastname) values(?, ?)`, [firstName, lastName], (e) => {
    if (e) {
      console.log("e")
      res.status(500).json({
        "message": "could not insert"
      });
      db.close()
    }
  })

  res.json({
    firstName: firstName,
    lastName: lastName
  })
})

app.listen(8080)




// first, set up private git server in DigitalOcean VM. 
// create REST route that github can make POST call to

// Devs push to github 
//  -> MR gets approved and merged
//  -> github makes POST call to our server
//  -> handler checks that update type == merge to master

// Node: package.json "test" "build" "run" commands
// python, go, etc. each their own similar

// handler clones the repo into the private git location
// runs the build, test, and run commands, 
//  check test output
//  starts application, checks healthcheck route return 200 OK

// If this validation passes
//   provision second DigitalOcean VM in some cases
//   in other cases, start up new process on available port on same server as old process

//  in either case, one application is ready, failover traffic from old to new. 
//  This gets shows in dashboard for devs in lab. 


/* 
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
Input: nums = [1,1,2]
Output:
[[1,1,2],
[1,2,1],
[2,1,1]]
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/
/*
const permute = (array) => {
  // binary tree manipulation
  // lifo fifo
  // array manip 
  // dictionary 

  for (let i = 0; i < array.size; i++) {

  }
}
*/