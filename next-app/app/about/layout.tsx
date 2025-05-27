export default function AboutLayout({ children }) {
	return (
		<>
			{/* layout présent que sur la page /about */}
			<header>
				custom header for about page only
			</header>
			{children}
		</>
	)
}
