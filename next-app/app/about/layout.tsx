export default function AboutLayout({ children }) {
	return (
		<>
			<header>
			{/* layout présent que sur la page /about */}
				custom header for about page only
			</header>
			{children}
		</>
	)
}
