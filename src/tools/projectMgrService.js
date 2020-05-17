//Npm packages
import axios from "axios";
import {eventBus} from "./../main";

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
        try{

            const response = await axios.post(url, formData,{headers:{
                    "Content-Type": "multipart/form-data",
                    "authorization": "Bearer " + localStorage.token
                }
            });
            console.log(response);

        } catch(err){

            eventBus.reset();
            console.log("Error sending post request" + err);
            
        }
        
    }
    static async deleteProject(_id){

        try{

        await axios.delete(url + _id, {headers:{
                "authorization": "Bearer " + localStorage.token
            }
        });

        } catch(err) {
            console.log(err);
        }
        
    }
}

export default Project;