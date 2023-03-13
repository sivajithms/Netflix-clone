import axios from "axios";
import {basrUrl} from './constants/constants'

const instance = axios.create({
    baseURL: basrUrl
})

export default instance