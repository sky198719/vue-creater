import axios from 'axios';

const getData = (url,data) => {
	return axios({
		method:'get',
		url:url,
		data:data
	})
	.then((res) => res.data)
	.catch((err) => {
		console.log(err)
	})
}

export {getData}