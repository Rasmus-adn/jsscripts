const functions = require('./functions');
const payload = require('./data');
const axios = require('axios')
require('dotenv').config();
const baseUrl = process.env.BASEURL;

const flatObj = functions.flattenObject(payload);
const qs = functions.generateQuerystring(flatObj);

const callWebHook = async (baseURL, qs) => {
    const encodedQs = encodeURI(qs);
    try {
        const response = await axios.get(`${baseURL}${encodedQs}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

callWebHook(baseUrl, qs);
