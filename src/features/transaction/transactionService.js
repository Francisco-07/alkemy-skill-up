import axios from 'axios'

// Paginated Transaction
const getPaginatedTransactions = async (page) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: 'Bearer ' + token.accessToken,
    },
  }
  if (!page) {
    const res = await axios.get(`transactions/`, config)
    return res.data
  }
  if (page) {
    const res = await axios.get(`transactions/?page=${page}`, config)
    return res.data
  }
}

// Single transaction
const singleTransaction = async (id) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: 'Bearer ' + token.accessToken,
    },
  }

  const res = await axios.get(`transactions/${id}`, config)
  return res.data
}

const transactionReduce = async () => {
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: 'Bearer ' + token.accessToken,
    },
  }
  const transactionsArray = []
  const res = await axios.get(`transactions/`, config)

  let next = res.data.nextPage

  transactionsArray.push(...res.data.data)
  console.log('arriba', transactionsArray)
  let count = 2
  while (next !== null) {
    const res = await axios.get(`transactions/?page=${count}`, config)
    transactionsArray.push(...res.data.data)
    console.log(transactionsArray)
    next = res.data.nextPage
    count++
  }
  return transactionsArray
}

const accountService = {
  getPaginatedTransactions,
  singleTransaction,
  transactionReduce,
}

export default accountService
