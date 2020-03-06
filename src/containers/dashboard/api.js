import axios from 'axios'
let url = "http://localhost:2017"

const getspendHistory = async () => {
    return await axios.get(`${url}/public/spendHistory`)
}

const updateSpendHistory = async ({transId, amount}) => {
    return await axios.post(`${url}/public/updateSpendHistory`, {
        transId, amount
    })
}

const clientContacts = async () => {
    return await axios.get(`${url}/public/clientContacts`)
}

export default {
    getspendHistory,
    updateSpendHistory,
    clientContacts
}

