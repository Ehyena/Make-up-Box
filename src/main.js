const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

// 👇️ variables assigned from buttons
var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnUpdate = document.getElementById('btnUpdate')
var btnDelete = document.getElementById('btnDelete')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')

// 👇️ create function
btnCreate.addEventListener('click', function(){  // create text file when CREATE button clicked
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ // create text file by the topic inserted
    if(err){
      return console.log(err)
    }
    alert(txtfile + " was submitted")    
    console.log("The file was created")
  })
})
// 👇️ read function
btnRead.addEventListener('click', function(){  // read text file when READ button clicked
  let file = path.join(pathName, fileName.value)
  fs.readFile(file, function(err, data){ // read contents of the fetched text file
    if(err){
      return console.log(err)
    }
    fileContents.value = data
    console.log("The file was read!")
  })
})
// 👇️ update function
btnUpdate.addEventListener('click', function(){  // update text file when UPDATE button clicked
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.readFile(file, 'utf8', function(err,data){ // rewrite contents of the fetched text file
    if(err){
      return console.log(err)
    }
    fs.writeFile(file, contents, 'utf8', function(err) {
      if (err) {
        return console.log(err);
      }
      var txtfile = document.getElementById("fileName").value
      alert(txtfile + " has been updated")   
    })
  })
})
// 👇️ delete function
btnDelete.addEventListener('click', function(){  // delete text file when DELETE button clicked
  let file = path.join(pathName, fileName.value)
  fs.unlink(file, function(err){ // delete text file that has been fetched
    if(err){
      return console.log(err)
    }
    fileName.value = ""
    fileContents.value = ""
    // 👇️ display file deleted message
    var txtfile = document.getElementById("fileName").value
    console.log("The file was deleted!")
    alert("The file has been deleted.")
  })
})
