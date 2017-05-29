import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Buying extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services">

      	  	<h3>What this website offers</h3>

      	  	<p>This website offers state of the art customer service to fit anyone's need.
      	  	</p>

	      	<h3>How to Navigate the Website</h3>

	      	<p>If you would like to sell your creation, please follow the link for more information</p>

	      	<p>If you're a buyer, then more information about setting up your own account can be found <a href="http://pencil.training" target="_blank">here</a>.</p>

	      </div>

      </div>
    );
  }
}

export default Services;
