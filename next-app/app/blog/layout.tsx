export default function BlogLayout({ children }) {
	return (
		<>
			{/* layout présent sur la page /blog et tous les articles de /blog/slug... */}
			<header>
				custom header for blog page and blog articles only
			</header>
			{children}
		</>
	)
}
