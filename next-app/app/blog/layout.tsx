export default function BlogLayout({ children }) {
	return (
		<>
			<header>
			{/* layout présent sur la page /blog et tous les articles de /blog/slug... */}
				custom header for blog page and blog articles only
			</header>
			{children}
		</>
	)
}
