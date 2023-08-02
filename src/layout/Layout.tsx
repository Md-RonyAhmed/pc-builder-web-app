import React, { ReactNode } from "react";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
