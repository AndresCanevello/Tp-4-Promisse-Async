function primerPromisse(mensaje)
{
    return new Promise((resolve, reject) => {
        setTimeout(function()
        {
            if(mensaje)
                {
                    resolve(mensaje);
                }
                else
                {
                    reject("No hay ningun mensaje.");
                }
        },2000);
       
    })
}
//primerPromisse("asdasd").then((e)=>console.log(e));
//primerPromisse().catch((e)=>console.log(e));
function promiseSumar(num)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(function()
    {
        resolve(num*2);
    },1000);
    }
)       
}
promiseSumar(4).then((e)=>console.log(e));