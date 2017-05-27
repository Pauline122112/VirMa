import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services">

      	  	<h3>What this website offers</h3>

      	  	<p>This website offers state of the art customer service to fit anyone's need.
      	  	</p>

	      	<h3>How to Navigate the Website</h3>

	      	<p>I can help you or your employees develop their web development coding skills. I have been teaching code to both beginners and professionals for many years.</p>

	      	<p>I have my own training company called <a href="http://pencil.training" target="_blank">Pencil Training</a>. More details can be found <a href="http://pencil.training" target="_blank">here</a>.</p>

	      </div>

      </div>
    );
  }
}

export default Services;
