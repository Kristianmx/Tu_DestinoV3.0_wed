
export const UrlBase = "https://tu-destino-business-logic.onrender.com/";
export const UrlComent = "http://localhost:8080/comment";
export const UrlPost = "http://localhost:8080/postDiscover";
export const UrlUser= "http://localhost:8080/user";
export const UrlPlace= "http://localhost:8080/place";
export const UrlPublication= "http://localhost:8080/publication";



export async function post(url,info){
    let isPost= false;
    try {
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(info) 
        });
        const data = await response.json();
        if(data.status=="BAD_REQUEST"){
        isPost= false;
        console.log(data);
        }else{
        isPost=true;
        }


    } catch (error) {
        console.log(error);
        isPost= false;
    }
    console.log(isPost);
    return isPost
}

// READ - OBTENER DATOS DEL JSON
export async function get(url){
let varia;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        varia= data;
    } catch (error) {
        console.error(error);
    }
    return varia;
};

// METODO UPDATE - para actualizar datos de la base de datos json
export async function update (url,info){
    let isPost= false;
    try {
        const response = await  fetch(url,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(info),
        });
        const data = response.json();
        if(data.status=="BAD_REQUEST"){
            isPost= false;
            console.log(data);
            }else{
            isPost=true;
            console.log(await data);
            }
    } catch (error) {
        console.error(error);
    }
    return isPost
}


// METODO DELETE - REcibe la URL de lo que se va a borrar, concatendad con el id
export async function deleteHttp(url){
    let isPost= false;
    try {
        const response = await fetch(url,{
            method: "DELETE",
        });
        const data = await response.json();
        if(data.status=="BAD_REQUEST"){
            isPost= false;
            console.log(data);
            }else{
            isPost=true;
            }
    
    } catch (error) {
        console.error(error);
    }
    return isPost
};
