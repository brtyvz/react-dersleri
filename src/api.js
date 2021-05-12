import axios from 'axios'
export function api() {return axios.create({
baseURL:"https://react-yazi-yorum.herokuapp.com"




/* axios islemlerini daha rahat yapmak icin api linkini burada fonksiyona atadik ve artik diger componentlerde  axios  islemi yaparken burayi kullanicaz */
})}