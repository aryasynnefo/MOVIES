document.getElementById("add")
async function displayUser(){
    let sec="";
    fetch("http://localhost:8001/api/display").then((res)=>res.json()).then((data)=>{
        data.reverse().forEach(d=>{

            sec+=`<div class="col-lg-3 col-md-12 col-sm-12">
                        <div class="card">
                         <img src="${d.image}" alt="Image Not Available">
                        <div class="card-body">
                             <h5 class="card-title">${d.name}</h5>
                            <h3 class="card-text">${d.language}</h3>
                             <p class="card-text">${d.year}</p>

                            <a href="#" class="btn btn-outline-primary">WATCH</a>
                            <a href="#" class="btn btn-outline-primary">DELETE</a>
                            </div>
                        </div>
                    </div>`
            // sec+=`<section class="sec" id="sec">
            // <div class="col1">${d.name}</div>
            // <div class="col2">${d.year}</div>
            // <div class="col3">${d.language}</div>
            // </section>`;
        })
        document.getElementById("more").innerHTML=sec;
    }).catch((error)=>{
        console.log(error);
    })

}
displayUser();