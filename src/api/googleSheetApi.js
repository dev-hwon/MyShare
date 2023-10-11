import axios from 'axios'
import { config } from './config';

const googleSheetApi = axios.create({
    baseURL: config.baseUrl
})

export function getKeyInfo() {
    const params = { key: config.apiKey }
    return googleSheetApi.get(`${config.sheetId}/values/${config.sheetName}!${config.sheetKeyRange}`, { params });
} 
export function getValueInfo() {
    const params = { key: config.apiKey }
    return googleSheetApi.get(`${config.sheetId}/values/${config.sheetName}!${config.sheetValueRange}`, { params });
} 
