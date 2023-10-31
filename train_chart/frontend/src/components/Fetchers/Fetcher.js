import axios from "axios";

export default function Fetcher(url) {
    return axios.get(url).then((res) => {
        console.log(res.data)
        return res.data
    })
};
