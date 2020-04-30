//Npm packages
import axios from "axios";

//URL to my api
const url = "api/projects/";
//Axios configuration to be able to send a file through a post request.
const headerAxiosConfig = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}

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
    static postProject(formData){
        return axios.post(url, formData, headerAxiosConfig);
    }
}

export default Project;