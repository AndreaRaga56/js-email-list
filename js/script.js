const listaEmailElem = document.querySelector("div");
let text = '';
for (i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((a) => {
        const email = a.data.response;
        console.log(email);        
        text  +=`<p>${email}</p>`;
        console.log(text);    
        listaEmailElem.innerHTML= text;    
        console.log(listaEmailElem);
    });
}