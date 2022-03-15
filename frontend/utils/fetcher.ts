import axios from "axios";

const fetcher = async <T>(url) => axios.get<T>(url).then((res) => res.data);

export default fetcher;
