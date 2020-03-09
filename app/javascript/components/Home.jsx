// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useState, useEffect } from 'react'



const Home = () => {
  const [search, setSearch ] = useState('')

  useEffect(() => {
    // mapboxgl.accessToken = 'pk.eyJ1IjoiZWx2aXNoZXJuYW5kZXoiLCJhIjoiY2s3azJ5cHByMTJteTNsbWIwa2c2ZjR3YiJ9.FSjCSG-su1IiJqC4Hugp0Q';
    // var map = new mapboxgl.Map({
    // container: 'map',
    // style: 'mapbox://styles/mapbox/streets-v11'
    // });
  }, [])

  return(
    <div>
      <h1>HELLOOOOOO</h1>
      <div id='map' style={{width: '400px', height: '300px'}}></div>
    </div>
  )
}

export default Home



