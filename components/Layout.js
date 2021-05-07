import Navbar from './Navbar';
const Layout = ({ children }) => {
	return (
		<div>
			<nav>
				<Navbar />
			</nav>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
