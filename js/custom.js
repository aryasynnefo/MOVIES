let nm=document.getElementById("name");
let year=document.getElementById("yr");
let lang=document.getElementById("lang");
let fl=document.getElementById("formFile")

document.getElementById("add").addEventListener("click",()=>{

    console.log(nm.value,year.value,lang.value);
    if(nm.value!='' && year.value!='' && lang.value!=''){

        convertToBase64(fl.files[0]).then((dt)=>{
            fetch("http://localhost:8001/api/add",{method:"POST",
            headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:nm.value,
            year:year.value,
            language:lang.value,
            image:dt
        })
    })
        }).catch((error)=>{
            console.log(error);
        })

  
    }
    else{
        alert("fields must not be empty")
    }
})


function convertToBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result);
        }
        fileReader.onerror=()=>{
            reject(error);
        }
    })
}