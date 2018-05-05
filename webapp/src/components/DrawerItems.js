import React from 'react'
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DescriptionIcon from '@material-ui/icons/Description';
import ListIcon from '@material-ui/icons/List';

export default class DrawerItems extends React.Component {
	constructor(props) {
		super(props);

		this.items = [{
			name: 'Home',
			icon: <DashboardIcon />,
			link: '/welcome'
		}, {
			name: 'Add an Resource',
			icon: <NoteAddIcon />,
			link: '/resources/new'
		}, {
			name: 'View an Resource',
			icon: <DescriptionIcon />,
			link: '/resources/:resourceId/details'
		}, {
			name: 'List the Resources',
			icon: <ListIcon />,
			link: '/resources/'
		}]
	}

	static propTypes = {
		onClick: PropTypes.func.isRequired
	}

	render() {
		return (
			this.items.map((item) => {
					return (
						<ListItem key={item.name} component={Link} to={item.link} onClick={this.props.onClick} button>
							<ListItemIcon>
								{item.icon}
							</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItem>
					)
				})
		)
	}
}