import type { ImageMetadata } from 'astro';

const photoModules = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/images/property-photos/*.webp',
	{ eager: true },
);

const getPhotoNumber = (path: string) => {
	const match = /property-photo-(\d+)\.webp$/.exec(path);
	if (!match) {
		throw new Error(`Unexpected property photo filename: ${path}`);
	}

	return Number(match[1]);
};

export const propertyPhotos = Object.entries(photoModules)
	.map(([path, module]) => ({ number: getPhotoNumber(path), image: module.default }))
	.sort((left, right) => left.number - right.number)
	.map(({ number, image }) => {
		const id = `photo-${String(number).padStart(2, '0')}`;

		return {
			id,
			title: `Photo ${id.slice(6)}`,
			alt: `Grand Daze property photo ${id.slice(6)}`,
			image,
		};
	});

if (propertyPhotos.length === 0) {
	throw new Error('No optimized property photos were found.');
}
