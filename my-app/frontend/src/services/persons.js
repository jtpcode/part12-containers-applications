import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

const replace = (person, newNumber) => {
  const replaceUrl = `${baseUrl}/${person.id}`
  const changedPerson = { ...person, number: newNumber }
  const request = axios.put(replaceUrl, changedPerson)

  return request.then((response) => response.data)
}

const deleteObject = (id) => {
  const deleteUrl = `${baseUrl}/${id}`
  return axios.delete(deleteUrl)
}

export default { getAll, create, deleteObject, replace }
