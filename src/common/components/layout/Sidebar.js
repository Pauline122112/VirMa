import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {


  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">



		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
		    <Link to="/seller" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Selling</Link>
		    <Link to="/buying" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Buying</Link>
		    <Link to="/contact" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Contact</Link>
		  </nav>

		  <div className="sidebar-item sidebar-footer">

		    <p>
				Visit <a href="https://github.com/caljrimmer">My GitHub Repo</a><br/>
				Visit <a href="https://www.linkedin.com/in/callumrimmer">My Linkedin</a><br/>
				Visit <a href="https://twitter.com/caljrimmer">My Twitter</a><br/>
		    </p>

		    <p>
		    	Design based on <a href="http://lanyon.getpoole.com/"> Lanyon Theme</a>
		    </p>

		  </div>

		</div>
    );
  }
}

export default Sidebar;
