import React from 'react';


export default class ContactPage extends React.Component {
  constructor() {
    this.state = {
      latitude: "";
      longitude: "";
      limit: "";
    }
  }


  render() {
    return (
      <div>
        <input type="text" placeholder="Search...">
      </div>
    )
  }


}
