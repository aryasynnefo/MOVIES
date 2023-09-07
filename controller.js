import schema from "./user.model.js"


export function addUser(req,res){
     console.log(req.body);
     let{name,year,language,image}=req.body;
     console.log(name);
     schema.create({name,year,language,image});
     res.end();
}

export async function displayUser(req,res){
     const data=await schema.find();
     console.log(data);
     res.status(200).send(data);
}