import type { ImageMetadata } from 'astro';

interface PhotoLabels {
	title: string;
	alt: string;
}

// Edit each entry to describe the matching property-photo-XX.webp image.
const photoLabels = {
	1: { title: 'Photo 01', alt: 'Grand Daze property photo 01' },
	2: { title: 'Photo 02', alt: 'Grand Daze property photo 02' },
	3: { title: 'Photo 03', alt: 'Grand Daze property photo 03' },
	4: { title: 'Photo 04', alt: 'Grand Daze property photo 04' },
	5: { title: 'Photo 05', alt: 'Grand Daze property photo 05' },
	6: { title: 'Photo 06', alt: 'Grand Daze property photo 06' },
	7: { title: 'Photo 07', alt: 'Grand Daze property photo 07' },
	8: { title: 'Photo 08', alt: 'Grand Daze property photo 08' },
	9: { title: 'Photo 09', alt: 'Grand Daze property photo 09' },
	10: { title: 'Photo 10', alt: 'Grand Daze property photo 10' },
	11: { title: 'Photo 11', alt: 'Grand Daze property photo 11' },
	12: { title: 'Photo 12', alt: 'Grand Daze property photo 12' },
	13: { title: 'Photo 13', alt: 'Grand Daze property photo 13' },
	14: { title: 'Photo 14', alt: 'Grand Daze property photo 14' },
	15: { title: 'Photo 15', alt: 'Grand Daze property photo 15' },
	16: { title: 'Photo 16', alt: 'Grand Daze property photo 16' },
	17: { title: 'Gourmet Kitchen Island', alt: 'A spacious island with plenty of room for meal prep and gathering featuring a wine fridge and beautiful custom cabinetry' },
	18: { title: 'Photo 18', alt: 'Grand Daze property photo 18' },
	19: { title: 'Photo 19', alt: 'Grand Daze property photo 19' },
	20: { title: 'Photo 20', alt: 'Grand Daze property photo 20' },
	21: { title: 'Photo 21', alt: 'Grand Daze property photo 21' },
	22: { title: 'Photo 22', alt: 'Grand Daze property photo 22' },
	23: { title: 'Photo 23', alt: 'Grand Daze property photo 23' },
	24: { title: 'Photo 24', alt: 'Grand Daze property photo 24' },
	25: { title: 'Photo 25', alt: 'Grand Daze property photo 25' },
	26: { title: 'Dining Room', alt: 'Gather around the dining table for family meals, gamenights and good conversation after a day of island adventures' },
	27: { title: 'Photo 27', alt: 'Grand Daze property photo 27' },
	28: { title: 'Photo 28', alt: 'Grand Daze property photo 28' },
	29: { title: 'Photo 29', alt: 'Grand Daze property photo 29' },
	30: { title: 'Photo 30', alt: 'Grand Daze property photo 30' },
	31: { title: 'Photo 31', alt: 'Grand Daze property photo 31' },
	32: { title: 'Bunk Room', alt: 'Two custom full-over-queen bunk beds, perfect for cousins, kids, and late-night laughter' },
	33: { title: 'Photo 33', alt: 'Grand Daze property photo 33' },
	34: { title: 'Photo 34', alt: 'Grand Daze property photo 34' },
	35: { title: 'Photo 35', alt: 'Grand Daze property photo 35' },
	36: { title: 'Photo 36', alt: 'Grand Daze property photo 36' },
	37: { title: 'Photo 37', alt: 'Grand Daze property photo 37' },
	38: { title: 'King Suite 3', alt: 'A welcoming king bedroom with thoughtful details and its own private ensuite' },
	39: { title: 'Photo 39', alt: 'Grand Daze property photo 39' },
	40: { title: 'Photo 40', alt: 'Grand Daze property photo 40' },
	41: { title: 'Photo 41', alt: 'Grand Daze property photo 41' },
	42: { title: 'King Suite 2', alt: 'A beautifully appointed King bedroom with comfortable seating, island views, and a private enuite bathroom' },
	43: { title: 'Photo 43', alt: 'Grand Daze property photo 43' },
	44: { title: 'Photo 44', alt: 'Grand Daze property photo 44' },
	45: { title: 'Photo 45', alt: 'Grand Daze property photo 45' },
	46: { title: 'Primary king Suite 1', alt: 'A peaceful king bedroom with beautiful island views and a private ensuite bath' },
	47: { title: 'Photo 47', alt: 'Grand Daze property photo 47' },
	48: { title: 'Photo 48', alt: 'Grand Daze property photo 48' },
	49: { title: 'Primary Ensuite Bath', alt: 'A spa-inspired retreat featuring a soaking tub and a spacious walk-in shower' },
	50: { title: 'Photo 50', alt: 'Grand Daze property photo 50' },
	51: { title: 'Photo 51', alt: 'Grand Daze property photo 51' },
	52: { title: 'Photo 52', alt: 'Grand Daze property photo 52' },
	53: { title: 'Photo 53', alt: 'Grand Daze property photo 53' },
	54: { title: 'Gourmet Kitchen', alt: 'A spacious, fully equipped kitchen with a generous island for cooking, gathering and making memories' },
	55: { title: 'Open-concept Living and Dining', alt: 'Beautifully designed gathering spaces with plenty of room for family and friends' },
	56: { title: 'Photo 56', alt: 'Grand Daze property photo 56' },
	57: { title: 'Photo 57', alt: 'Grand Daze property photo 57' },
	58: { title: 'Upstairs Living Room', alt: 'Sink into comfortable seating and unwind after a day exploring Elbow Cay' },
	59: { title: 'Photo 59', alt: 'Grand Daze property photo 59' },
	60: { title: 'Photo 60', alt: 'Grand Daze property photo 60' },
	61: { title: 'Photo 61', alt: 'Grand Daze property photo 61' },
	62: { title: 'Photo 62', alt: 'Grand Daze property photo 62' },
	63: { title: 'Covered outdoor Dining', alt: 'Gather around the table for outdoor meals, and enjoy the warm island breezes' },
	64: { title: 'Covered Porch Lounge', alt: 'Your favorite spot for morning coffee, afternoon breezes, and views of the marina and White Sound' },
	65: { title: 'Private pool', alt: 'Your own private island Oasis, perfect for sunny afternoons and relaxing poolside.' },
	66: { title: 'Pool deck', alt: 'Relax by the private pool, complete with sun loungers, an umbrella, and a tanning ledge perfect for soaking up the island sunshine' },
	67: { title: 'Pool Deck', alt: 'Enjoy the sunshine with plenty of space to lounge, relax and spend time together' },
} satisfies Record<number, PhotoLabels>;

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

const photos = Object.entries(photoModules)
	.map(([path, module]) => ({
		number: getPhotoNumber(path),
		image: module.default,
	}))
	.sort((left, right) => left.number - right.number);

const photoNumbers = new Set(photos.map(({ number }) => number));
const staleLabelNumber = Object.keys(photoLabels)
	.map(Number)
	.find((number) => !photoNumbers.has(number));

if (staleLabelNumber !== undefined) {
	throw new Error(`Photo labels reference missing property photo ${String(staleLabelNumber).padStart(2, '0')}.`);
}

export const propertyPhotos = photos.map(({ number, image }) => {
	const labels = photoLabels[number];
	if (!labels) {
		throw new Error(`Missing title and alt labels for property photo ${String(number).padStart(2, '0')}.`);
	}

	return {
		id: `photo-${String(number).padStart(2, '0')}`,
		...labels,
		image,
	};
});

if (propertyPhotos.length === 0) {
	throw new Error('No optimized property photos were found.');
}
