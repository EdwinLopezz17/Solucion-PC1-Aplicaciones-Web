
import axios from "axios";

export class ApiService {
    getAll() {
        return axios.get('https://restcountries.com/v3.1/name/peru')
    }
}

/*
import axios from "axios";

const apiUrl = "https://restcountries.com/v3.1/name/peru";

const getPeruData = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data[0];
    } catch (error) {
        console.error(error);
    }
};

export default getPeruData;*/