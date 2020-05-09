//Npm packages
import axios from "axios";
import {store} from "./../main.js"

//URL to my api
const url = "api/projects/";

//Axios configuration to be able to send a file through a post request.
/*
const headerAxiosConfig = {
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${store.state.token}`
    }
}
*/

class Project{
    static async getProject(){
        const res = await axios.get(url);
        return new Promise((resolve, reject) => {

            try{

                const data = res.data;
                resolve(data);

            } catch(err){

                reject(err);

            }
            
        })
    }
    static async postProject(formData){
        const token = store.state.token
        console.log(token);
        const data = await axios.post(url, formData,{headers:{
                "Content-Type": "multipart/form-data",
                "authorization": "Bearer " + token
            }
        });
        console.log(data);
        return data;
    }
    static async deleteProject(title){
        const res = await axios.get(url);
        try{
            for(let object of res.data){
                if(object.title == title){
                    axios.delete(url + object._id);
                }
            }
        } catch(err){
            console.log(err);
        }
        
    }
}

export default Project;