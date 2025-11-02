const p = new Promise((resolve)=>{
    setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then((result)=>console.log(result));

const downloadFile = new Promise((resolve)=>{
    setTimeout(()=>resolve("Téléchargement terminé ✅"),3000);
});


//Some practices
async  function startDownload(){
    console.log("Telechargement en cours...")
    const result = await downloadFile;
    console.log(result);
}

//startDownload();
startDownload();


function uploadFile(){
    return new Promise((resolve, reject) => {
        console.log("upload en cours....")
        setTimeout(() => {
            const success = Math.random() > 0.5;


            if (success){
                resolve("Upload réussi ✅");
            }else{reject("Erreur:connexion perdue ❌")}
    },2000);
});
}
uploadFile()
.then((result)=>console.log(result))
.catch((error)=>console.log(error))


async function startUpload(){
    try{
        const result = await uploadFile();
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
startUpload();


async function getUsers(){
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await result.json();
        console.log(data);
    }catch(error){
        console.log("Erreur lors de la récupération des utilisateurs:", error.message);
    }
}
getUsers();

