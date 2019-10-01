import React, { Component } from 'react';
import { DatePicker, TextInput, Row, Col, Button, Container } from 'react-materialize';
import gmapsInit from '../../utils/gmaps';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
class AddTimeLinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    gmapsInit()
    return (
      <div>
        <Container className="center-align">
          <h4>Add new timeline</h4>
          <DatePicker label="Start date" />
          <DatePicker label="End date" />
          <TextInput label="Place" />
          <GooglePlacesAutocomplete className="col" onSelect={console.log} />
          <Button inputClassName="btn-tiny">Add</Button>
        </Container>
      </div>
    );
  }
}

export default AddTimeLinePage;
