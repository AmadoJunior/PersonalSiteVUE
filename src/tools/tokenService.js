import axios from "axios";

const url = "api/user/login/"

class Token{
    static async getToken(email, password){
        const data = {
            email: email,
            password: password
        }
        const response = await axios.post(url, data);
        return new Promise((resolve, reject) => {
            try{
                const data = response.data;
                resolve(data);
            } catch(err){
                reject(err);
            }
        })
    }
}

export default Token;