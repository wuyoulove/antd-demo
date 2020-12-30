import axios from 'axios'

export const getMenu = async (payload) => {
  const res =  await axios.get(`http://localhost:3000/mock/sideMenu.json`, payload)
  return res.data
  // if (res.code === '200') {
  //   return res.data
  // } else {
  //   // throw new Error(res.message)
  // }
}