import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
       <Grid className='contact-grid'>
         <Cell col={6}>
          <h2>Max Washington</h2>
          <p>A little bio about this cool guy</p>
         </Cell>
         <Cell col={6}>Half Two</Cell>
       </Grid>
      </div>
    )
  }
}
