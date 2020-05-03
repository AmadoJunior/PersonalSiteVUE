import axios from "axios";

const url = "api/emails/";

const axiosHeaderConfig = {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
}

class Email{
    static sendEmail(emailData){
        return axios.post(url, emailData, axiosHeaderConfig);
    }
}

export default Email;