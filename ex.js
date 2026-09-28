let students = [
   
     {
        name: "houssam",
        aga:18,
        email:"fassahoussam@gmail.com",
        note:[11,22,33,44],
        subject:"Math",
    },
     {
        name: "oussam",
        aga:18,
        email:"fassaoussam@gmail.com",
        note:[11,22,33,44],
        subject:"sport",
    }
    ]
    let total=0;
        for (let i=0;i<students.length;i++){
            console.log("name: " + students[i].name);
                for(let j=0;j<students[i].note.length;j++){
                   total=students[i].note[j] + total;
                   
                 }
                 console.log(total/students[i].note.length);
    
         }


   