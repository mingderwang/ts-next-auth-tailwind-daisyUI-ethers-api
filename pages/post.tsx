import Layout from '../components/layout'

export default function Post () {

  postData('/api/user', {answer: 42})
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error))

function postData(url:string, data:any) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // 輸出成 json
}
  return (
    <Layout>
      <h1>Post Example</h1>
    </Layout>
  )
}