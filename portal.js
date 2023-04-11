let allStudents = [];
if(localStorage.studentPortal){
    oldData = JSON.parse(localStorage.getItem("studentPortal"))
    allStudents = oldData
}
console.log(allStudents)
const signUp = () => {
      var newStudents = {
        FirstName: firstN.value,
        LastName: lastN.value,
        Email:emaiL.value,
        PhoneNumber: phoneN.value,
        Gender:gendeR.value,
        Password:passW.value
      }
    allStudents.push(newStudents);
    localStorage.setItem("studentPortal", JSON.stringify(allStudents))  
    window.location.href = "signIn.html"
}



  
const signIn =() => {
    let oldData = JSON.parse(localStorage.getItem("studentPortal")) 
   allStudents = oldData
console.log(allStudents)
        var userFound = false
        for (var index = 0; index < allStudents.length; index++) {
            console.log(index)
             if(emaiL.value==allStudents[index].email && passW.value==allStudents[index].password){
                console.log(index)
                localStorage.setItem("userIndex",index)
                userFound = true
                break;
            }
        }
        if(userFound==true){
            window.location.href = "dashBD.html"
        }else{
            alert("Student Data Not Found")
        }
    }
