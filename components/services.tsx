import Image from 'next/image';

const services = [
	{
		title: 'Impresión Offset Industrial',
		description:
			'Alta fidelidad colorimétrica y capacidad instalada para resolver grandes volúmenes de producción con precisión.',
		image: '/servicios/offset.jpg',
	},
	{
		title: 'Encuadernación Editorial',
		description:
			'Producción de libros ilustrados y revistas con terminaciones premium, ideal para editoriales y autores independientes.',
		image: '/servicios/encuadernacion.jpg',
	},
	{
		title: 'Troquelados y Terminaciones',
		description:
			'Acabados especiales, laminados en polipropileno mate o brillante y cortes de precisión mecánica para destacar tu marca.',
		image: '/servicios/troquelado.jpg',
	},
	{
		title: 'Soporte Marca Blanca',
		description:
			'Actuamos como la infraestructura física y productiva para agencias de publicidad y estudios de diseño a precios de gremio.',
		image: '/servicios/marca-blanca.jpg',
	},
	{
		title: 'Corporativo y Salud',
		description:
			'Impresión de directorios corporativos, historias clínicas, recetarios y formularios bajo estrictos estándares de calidad.',
		image: '/servicios/corporativo.jpg',
	},
	{
		title: 'Cajas y Packaging Custom',
		description:
			'Estructuras troqueladas a medida para la presentación y embalaje de productos a escala industrial.',
		image: '/servicios/packaging.jpg',
	},
] as const;

export default function Services() {
	return (
		<section className="mx-auto max-w-7xl px-4 py-16">
			<h2 className="mb-10 text-center text-3xl font-bold text-slate-800">
				Nuestra Capacidad Industrial
			</h2>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{services.map((service) => (
					<article
						key={service.title}
						className="flex flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<div className="relative h-120 w-full">
							<Image
								src={service.image}
								alt={service.title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
							/>
						</div>

						<div className="flex flex-1 flex-col bg-[#355c8d] p-6">
							<h3 className="mb-2 font-sans text-xl font-bold text-white">
								{service.title}
							</h3>
							<p className="font-sans text-sm leading-relaxed text-slate-200">
								{service.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
