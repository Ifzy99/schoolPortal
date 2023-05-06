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
    // let oldData = JSON.parse(localStorage.getItem("studentPortal")) 
//    allStudents = oldData
// console.log(allStudents)
        var userFound = false
        for (var index = 0; index < allStudents.length; index++) {
            // console.log(index)
             if(em.value == allStudents[index].Email && pass.value == allStudents[index].Password){
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

    const dispalyStudentData = ()=>{
        show.innerHTML += `
        <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Gender</th>
            <th>Password</th>
            <th>Action</th>
            </tr>
        `
        for (let index = 0; index < allStudents.length; index++) {
              show.innerHTML += `
              <tr>
                <td>${index+1}</td>
                <td>${allStudents[index].Firstname}</td>
                <td>${allStudents[index].Lastname}</td>
                <td>${allStudents[index].Email}</td>
                <td>${allStudents[index].PhoneNumber}</td>
                <td>${allStudents[index].Gender}</td>
                <td>${allStudents[index].Password}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteUser(${index})">Delete User</button>
                     <button class="btn btn-warning" onclick="editUser(${index})">Edit User</button>
                    </td>
                </tr>
              `
        
       }
        }
       
    
