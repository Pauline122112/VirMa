import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">

  			<div className="post banner">
			    <h2 className="post-title">Nau Mai, Haere Mai
          </h2>
          <p> A place to find unique and kiwi things</p>
    			    <a href="#" onClick={this.eventToggleSidebar}> Find out More</a>

			</div>

		  	<div className="post clearfix">

				<h2>Web Development Technical Skills:</h2>



  			</div>


  			<div className="post clearfix">

				<h2>Web Development Experience:</h2>


			</div>

			<Banner />

  		</div>

    );
  }
}

export default Home;




//For testing
// <li><em>Jasmine</em></li>
// <li><em>Karma</em></li>
// <li><em>Protractor</em></li>
