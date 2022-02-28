import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 1771aa6577113d6d37358a82653098b3711f476dc76dc5e5710368cd5599c3703499dbef1aa70f2ec39834635a0c0b2ab1980efe56a84226dff8f8f3d5c82597184977e359997789f45e6d1e39f5a489b3f1875c93cdea37c00040a385afe28478260b430c2327a22002c3164ad06baf2a9b8cab2563a377277da3d4e2264f6f'
    }
};

export const post = (request, data, token, type) => {
    return new Promise((resolve, reject) => {
        axios
            .post(request, data, config)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const get = (request, params, token) => {
    const customConfig = {...config, params: params}
    
    return new Promise((resolve, reject) => {
        axios
            .get(request, customConfig)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const deleteFunction = (request, data, token) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(request, config)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const put = (request, data, token, type) => {
    return new Promise((resolve, reject) => {
        axios
            .put(request, data, config)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

