import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 2f0193ed70439bd405659b26a21da6e0a33a5ca35574c022e8b197b84faff32925e64f78dc12b009c93cf42f184b4557087ea5f84ccaaf9c880ba0718455c1fecdcf934c1d5280ee863720291f401ebec56477e82c1989701a7bee56dab40ff882a619ca38140961a025ed50351235561bcb0e93eb0c780fa1efe0492add2692'
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

export const getNoToken = (request, params) => {
    const customConfig = { params: params}
    
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

