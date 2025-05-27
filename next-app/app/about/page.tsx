import Image from 'next/image';
import starRuneWorldImage from "@/public/star-rune-world.jpg"

export default function AboutPage() {
	return (
		<main>
			<h1>About page</h1>

			{/* les attributs width et height sont définis automatiquement */}
			<Image src={starRuneWorldImage} alt="Star Rune World" placeholder="blur" />

			{/* import relatif à partir de /public */}
			{/* nécessite de définir width et height manuellement */}
			<Image src="/star-rune-world.jpg" alt="Star Rune World" width={1920} height={1080} />

			{/* très mauvais, impact significatif sur le chargement de la page */}
			<img src="/star-rune-world.jpg" alt="Star Rune World" />
		</main>
	)
}
