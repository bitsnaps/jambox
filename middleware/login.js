export default function ({ $axios, redirect }) {

  console.log('I am a middleware')

  $axios.$post('https://reqres.in/api/login', {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  })
  .then(res => {
    if (res.token === 'QpwL5tke4Pnpja7X4'){
      console.log('Loggin successfully.')
      redirect('/home')
    } else {
      console.log('Sorry! You are not allowed to access this page.')
    }
  })
};
