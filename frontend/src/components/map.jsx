import React, { Component } from 'react';
import gmapsInit from '../utils/gmaps';
import axios from 'axios';
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: '',
      lat: '',
      lng: '',
      markers: '',
      name: 'google-map',
    };
  }
  async componentDidMount() {
    const google = await gmapsInit();
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({lat : position.coords.latitude});
      this.setState ({lng : position.coords.longitude});
    });

    
    const element = document.getElementById(this.state.name);
    const options = {
      zoom: 3,
      center: new google.maps.LatLng(this.state.lng, this.state.lat),
    };
    this.setState ({map : new google.maps.Map(element, options)});
    let markers = (await axios.get('/api/todaylocation')).data;
    console.log(markers);

    this.setState ({markers});
    const markersArr = this.state.markers.map(marker => {
      const latRand = 0.02 * Math.random();
      const lngRand = 0.02 * Math.random();
      const infowindow = new google.maps.InfoWindow({
        content: marker.userId.fullName,
      });
      const newMarker = new google.maps.Marker({
        position: { lat: +marker.lat + latRand, lng: +marker.lng + lngRand },
        icon: { url: marker.userId.photo, scaledSize: new google.maps.Size(30, 30) },
      });
      newMarker.addListener('click', () => {
        console.log(this.state)
        infowindow.open(this.state.map, newMarker);
      });
      return newMarker;
    });
    // eslint-disable-next-line no-undef
    const markerCluster = new MarkerClusterer(this.state.map, markersArr, {
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    });

    //       let marker = new google.maps.Marker({
    //       position: {lat: 41.3850639, lng: 2.1734035} ,
    //       map: this.map,
    //       icon: {url:'https://lh3.googleusercontent.com/-Rmudoi3nTsk/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcrkDBwvcPUe7TvuEbo-onkb0SjQw/photo.jpg', scaledSize: new google.maps.Size(30, 30)}
    //   });
  }
  render() {
    return (

        <div className="google-map" id="google-map" style={{height:'95%'}} ></div>
    );
  }
}

export default Map;
