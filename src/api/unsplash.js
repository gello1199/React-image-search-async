import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vnKj5pn_8_GCSHC3IdEPVs9CiKVePfNgBoda-mfQtrM'
    }
})