import React from "react";
import page from "page";

const Link = ({ href, children }) => {
	const onClick = e => {
		e.preventDefault();

		if (href) {
			page.show(href);
		}
	};

	if (href == page.current) {
		return <span>{children}</span>;
	}
	return (
		<a href={href} onClick={onClick} className="link">
			{children}
		</a>
	);
};
const App = ({ children }) => {
	return (
		<div>
			<div className="app_header">
				<span className="logo">HACKER NEWS</span>
				{"  "}
				<Link href="/">Top</Link> | <Link href="/new">New</Link> |{" "}
				<Link href="/show">Show</Link> | <Link href="/ask">Ask</Link>
			</div>
			{children}
		</div>
	);
};

export default App;
