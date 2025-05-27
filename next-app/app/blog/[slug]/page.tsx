// utilisation de la props params pour y extraire le paramètre slug de la route
export default async function BlogSlugPage({ params }) {

	// déclaration de slug, le paramètre présent dans l'url
	const { slug } = await params;

	return (
		<main>
		{/* affichage du slug dans la page */}
		{/* à savoir, la valeur de slug sera dans le HTML de la page de manière statique */}
			This is a blog article with a custom slug : {slug}
		</main>
	)
}
