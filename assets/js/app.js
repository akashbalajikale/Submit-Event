let cl = console.log;
 

const sdtForm = document.getElementById("sdtForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const contact = document.getElementById("Contact");
const sdtbody = document.getElementById("sdtbody");
 
let sdtarray = [];

const templating = arr =>{
    result ="";
    arr.forEach((ele, i) => {
        result +=`
                <tr>
                    <td>${i + 1}</td>
                    <td>${ele.fname}</td>
                    <td>${ele.lname}</td>
                    <td>${ele.email}</td>
                    <td>${ele.contact}</td>
                </tr>
        `
    });
    sdtbody.innerHTML = result;
}

const Onstdform = (eve) => {
    eve.preventDefault();
    // cl("form submitted")
    let obj ={
        fname : fname.value,
        lname : lname.value,
        email : email.value,
        contact : contact.value
    }
    eve.target.reset();

    sdtarray.push(obj)
    templating(sdtarray)
    cl( sdtarray)
    
}

sdtForm.addEventListener("submit", Onstdform)