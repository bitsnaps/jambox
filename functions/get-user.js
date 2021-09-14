const axios = require('axios')

const TRACKS_URL = ''

const api = axios.create({
  baseURL: TRACKS_URL,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

exports.handler = async (event, context, callback) => {

  let id = event.queryStringParameters.id

  const { data, status } = await api.get( id? `/users/${id}`: '/users' )

  if (status == 200 ){
    return callback(null, {
      statusCode: status,
      body: JSON.stringify( id ? data: data.rows )
    })
  }

}
