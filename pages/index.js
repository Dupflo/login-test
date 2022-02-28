import useSWR from 'swr'

import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}

// const urlToTest =
//   'https://loginval.aeroportsdeparis.fr/Adp.IdentityFederationV4.web/api/User/get-connected-user'

const urlToTestRewrite = 'http://localhost:3000/api/is-user-connected' //check next.config.js

const url = urlToTestRewrite // add urlToTestRewrite or urlToTest

const fetcher = (fetcherUrl) =>
  axios
    .post(
      fetcherUrl,
      {},
      {
        headers,
        withCredentials: true,
      }
    )
    .then((res) => res.data)

export default function useUser() {
  // const [userData, setUserData] = useState({})

  const { data } = useSWR([url], fetcher)

  return (
    <div className="container h-screen mx-auto flex flex-col items-center justify-center">
      {data.isConnected ? (
        <div className="text-6xl sm:text-7xl md:text-8xl uppercase bg-green-500 text-white p-6">
          Connecté
        </div>
      ) : (
        <div className="text-6xl sm:text-7xl md:text-8xl uppercase bg-red-500 text-white p-6">
          Déconnecté
        </div>
      )}
      {/* <iframe width="0" height="0" src="http://localhost:3000/"></iframe> */}
      <div className="text-lg md:text-xl p-6">
        <strong>Url: </strong>
        {url}
      </div>
    </div>
  )
}
