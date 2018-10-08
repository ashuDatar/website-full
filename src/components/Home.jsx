import React, { Component } from 'react';


import { Menu, Dropdown, Icon, message } from "antd";


export const showMessage = (title, type = "success", duration = 3) => {
	message[type](title, duration);
};

class MagicComponent extends Component {
	constructor(params) {
		super(params);

		this.getOverlay = this.getOverlay.bind(this);
		this.handleMenuClick = this.handleMenuClick.bind(this);
	}

	componentDidMount() {

	}

	handleMenuClick(e) {
		if (e.item.props.value == "yellow") {
			showMessage("Yellow pressed", "success");
		}
	}

	getOverlay() {
		return (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item key="0" value={"yellow"}>
					Yellow item
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="1" value={"black"}>Black item</Menu.Item>
			</Menu>
		)
	}

	render() {
		return (
			<div>
				<Dropdown overlay={this.getOverlay()} trigger={['click']}>
					<a className="ant-dropdown-link" style={{ display: "flex", alignItems: "center" }}> Click me </a>
				</Dropdown>
			</div>
		)
	}

}

export default MagicComponent;