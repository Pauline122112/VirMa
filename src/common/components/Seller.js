import React, { Component } from 'react';
import { getSeller } from '../api/seller';
import classNames from 'classnames';

class Seller extends Component {

  render() {

  	const seller = getSeller();
	const RoleRows = (roles) => {
		return roles.map((role) => {
			return (
				<div key={role.title} className="role_wrapper clearfix">
          <h1>Want to sell arts and crafts that YOU personally created?</h1>
          <h3>Then you have come to the right place</h3>
          <h4>Click on the link below to get your very own personal store up and running</h4>
					<p className="role">Role</p>
					<p className="role_title">{role.title}<br />
					<span className="role_skills">{role.skills}</span></p>
				</div>
			)
		});
	}

    const SellerRows = seller.map((row) => {
    	const classname = classNames('seller_item','clearfix',row.classname);
        return (
            <div key={row.title} className={classname}>
				<h2><a href={row.link} target="_blank">(visit site)</a> {row.title}</h2>
				{RoleRows(row.roles)}
			</div>
        )
    });

    return (
        <div className="posts">
        	{SellerRows}
        </div>
    );

  }
}

export default Seller;
