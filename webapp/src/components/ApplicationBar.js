import React from 'react';
import DrawerItems from './DrawerItems';

import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { ListItem, ListItemText } from 'material-ui/List';
import { HashRouter as Router } from 'react-router-dom';

export default class ApplicationBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			openDraw: false
		}
	}

	toggleDrawer = () => {
		let toggle = this.state.openDraw;
		this.setState({openDraw: !toggle});
	}

	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
						<MenuIcon />
					</IconButton>
					<Typography variant="title" color="inherit" style={{flex: 1}}>
						{"MERN App"}
					</Typography>
					<Drawer open={this.state.openDraw} onClose={this.toggleDrawer}>
						<ListItem>
							<ListItemText primary={"MERN App"} secondary={"ReactJS v16"} />
						</ListItem>
						<Divider/>
						<Router>
							<DrawerItems onClick={this.toggleDrawer}/>
						</Router>
					</Drawer>
					<IconButton color="inherit" aria-label="Notifications">
						<NotificationsIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		)
	}
}