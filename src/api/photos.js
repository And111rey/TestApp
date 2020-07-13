import Axios from "axios";

import axios from 'axios'
import {BASE_URL, TOKEN} from './base'


export const fetchPhotos = () => axios.get(`${BASE_URL}/photos/?client_id=${TOKEN}`)

export const fetchSelectedPhoto = (photoId) => axios.get(`${BASE_URL}/photos/${photoId}/?client_id=${TOKEN}`)