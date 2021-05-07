// import Button from 'next/link';
import navbarStyles from '../styles/Navbar.module.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Container } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2)
// 	},
// 	title: {
// 		flexGrow: 1
// 	},
// 	navbar: {
// 		display: 'flex',
// 		justifyContent: 'space-between'
// 	}
// }));

const Navbar = () => {
	return (
		<div className={navbarStyles.root}>
			<AppBar position="static">
				<Container>
					<div className={navbarStyles.navbar}>
						<Typography variant="h5" className={navbarStyles.title}>
							Next News App
						</Typography>
						<div>
							<Button color="inherit" href="/">
								Home
							</Button>
							<Button color="inherit" href="/news?country=in">
								India
							</Button>
							<Button color="inherit" href="/news?country=us">
								America
							</Button>
							<Button color="inherit" href="/news?country=gb">
								England
							</Button>
							<Button color="inherit" href="/news?country=il">
								Israel
							</Button>
							<Button color="inherit" href="/news?country=au">
								Australia
							</Button>
							<Button color="inherit" href="/news?country=nz">
								New Zealand
							</Button>
							<Button color="inherit" href="/news?country=br">
								Brazil
							</Button>
							<Button color="inherit" href="/news?country=ru">
								Russia
							</Button>
							<Button color="inherit" href="/news?country=cn">
								China
							</Button>
							<Button color="inherit" href="/news?country=tw">
								Taiwan
							</Button>
						</div>
					</div>
				</Container>
			</AppBar>
		</div>
	);
};

export default Navbar;

// const Navbar = () => {
// 	return (
// 		<div className={navbarStyles.navabr}>
// 			<span className={navbarStyles.item}>
// 				<Button href="/">Home</Button>
// 			</span>
// 			<span className={navbarStyles.item}>
// 				<Button href="/about">About</Button>
// 			</span>
// 		</div>
// 	);
// };

// export default Navbar;
