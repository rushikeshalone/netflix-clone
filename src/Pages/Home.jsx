import React from 'react'
import Main from '../components/Main'
import Rows from '../Components/Rows'
import requests from '../Api/Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Rows rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
        <Rows rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        <Rows rowID='3' title='Trending' fetchURL={requests.requestTrending} />
        <Rows rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Rows rowID='5' title='Horror' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home