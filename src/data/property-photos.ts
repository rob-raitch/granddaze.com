import type { ImageMetadata } from 'astro';

interface PhotoLabels {
	title: string;
	alt: string;
}

// Edit each entry to describe the matching property-photo-XX.webp image.
const photoLabels = {
	1: { title: 'King Suite 3', alt: 'Beautifully appointed king suite featuring a warm natural wood bed, soft coastal linens, elegant furnishings, and a comfortable upholstered bench. A peaceful space to relax and recharge after a day exploring Elbow Cay.' },
	2: { title: 'King Suite 2', alt: 'Relax and unwind in one of Grand Daze’s three spacious king suites, featuring soft coastal colors, comfortable furnishings, and a private ensuite bathroom.' },
	3: { title: 'King Suite 2', alt: 'Relax and unwind in one of our beautiful king bedrooms, featuring soft coastal linens, elegant furnishings, and thoughtful details designed for a comfortable, restful stay.' },
	4: { title: 'King Suite 2', alt: 'Relax in your private king suite, featuring beautiful white shiplap walls, natural wood furnishings, a Smart TV, and a cozy sitting area. A peaceful retreat to unwind after a day of island adventures.' },
	5: { title: '2nd Primary', alt: 'Bright and airy with beautiful tilework, a spacious glass-enclosed walk-in shower, warm wood vanity, and thoughtful finishes for a relaxing island retreat.' },
	6: { title: 'Upstairs Living Room', alt: 'Sink into comfortable seating and unwind after a day exploring Elbow Cay' },
	7: { title: 'Main Living', alt: 'Gather together in our spacious upstairs living room, featuring comfortable seating, coastal-inspired décor, a large Smart TV, and beautiful natural light. The perfect place for family movie nights, games, or simply relaxing after a day on the water.' },
	8: { title: 'Primary King Suite 1', alt: 'Wake up refreshed in this beautiful king suite, featuring luxurious bedding, soft coastal tones, elegant furnishings, and plenty of natural light. A peaceful retreat with a private ensuite bathroom.' },
	9: { title: 'Prmary King Suite 1', alt: 'Sweet dreams in Hope Town! Soft coastal linens, plush pillows, and thoughtful details make our king suites the perfect place to unwind after a day of island adventures.' },
	10: { title: 'Primary Ensuite', alt: 'Enjoy a little luxury in your private ensuite bathroom, featuring a spacious glass-enclosed shower, custom vanity, beautiful coastal finishes, and thoughtful touches to make getting ready for your island adventures a breeze.' },
	11: { title: 'Primary Ensuite', alt: 'Your own private spa-like retreat! This beautiful ensuite bathroom features a freestanding soaking tub, spacious glass-enclosed shower, elegant white tile, and natural light. The perfect place to unwind after a day in the Bahamas.' },
	12: { title: 'Primary Ensuite', alt: 'A little luxury after a day in paradise! Our spacious ensuite bathroom features a beautiful double vanity, coastal finishes, and plenty of room for two to get ready for another day of island adventures.' },
	13: { title: 'Cozy Robes', alt: 'A little extra comfort for your island stay! Enjoy soft, cozy robes provided in our king suites, perfect for slow mornings and relaxing after a day in the sun.' },
	14: { title: 'Hall Bath Vanity', alt: 'Our stylish half bath features a custom wood vanity, beautiful pebble tile accents, and thoughtful coastal details.' },
	15: { title: 'Accents', alt: 'Hope Town' },
	16: { title: 'Main Laundry folding station', alt: 'Our spacious scullery and laundry room makes island living easy! Featuring a full-size washer and dryer, farmhouse sink, generous counter space, and a convenient folding station to keep everything organized during your stay.' },
	17: { title: 'Gourmet Kitchen Island', alt: 'A spacious island with plenty of room for meal prep and gathering featuring a wine fridge and beautiful custom cabinetry' },
	18: { title: 'Gourmet Kitchen Range', alt: 'The heart of Grand Daze! Our spacious, open-concept kitchen and living area features a beautiful custom wood island, high-end appliances, and coastal-inspired finishes. Designed for gathering, sharing meals, and making memories with family and friends.' },
	19: { title: 'Gourmet Kitchen Island Sink', alt: 'The heart of Grand Daze! Our spacious gourmet kitchen features a large island, beautiful finishes, and plenty of room to gather while preparing meals and making memories together.' },
	20: { title: 'Gourmet Kitchen Island Seating', alt: 'Pull up a seat and stay awhile! Our oversized kitchen island offers seating for five with beautiful coastal-style barstools. The perfect spot for morning coffee, casual meals, or gathering together while dinner is being prepared.' },
	21: { title: 'Gourmet Kitchen Coffee Bar', alt: 'Start your island mornings at our gourmet coffee bar, thoughtfully stocked with everything you need to enjoy your favorite cup before heading out for a day of adventure.' },
	22: { title: 'Main Living Area Seating', alt: 'Gather together in Grand Daze’s spacious open-concept living and dining area, designed for family meals, great conversations, and making island memories.' },
	23: { title: 'Main Living Area', alt: 'Gather together in our spacious upstairs living room, featuring comfortable seating, coastal-inspired décor, a large Smart TV, and beautiful natural light. The perfect place for family movie nights, games, or simply relaxing after a day on the water.' },
	24: { title: 'Main Living Area Comfort', alt: 'Gather together in our spacious upstairs living room, featuring comfortable seating, coastal-inspired décor, a large Smart TV, and beautiful natural light. The perfect place for family movie nights, games, or simply relaxing after a day on the water.' },
	25: { title: 'Dining Room Table', alt: 'Gather together in Grand Daze’s spacious open-concept living and dining area, designed for family meals, great conversations, and making island memories.  Seating for 10.' },
	26: { title: 'Dining Room', alt: 'Gather around the dining table for family meals, gamenights and good conversation after a day of island adventures' },
	27: { title: 'Coastal Accents', alt: 'Beautiful coastal details throughout, featuring stained white oak stair treads, crisp white shiplap walls, and modern cable railing that creates an open, airy feel.' },
	28: { title: 'Cozy Downstairs Living Area', alt: 'Kick back and relax in this comfortable second living space, perfect for movie nights, afternoon lounging, or enjoying a little downtime after a day on the water.' },
	29: { title: 'Downstairs Kitchenette & Island', alt: 'A convenient second kitchenette with a spacious island and bar seating for three. Perfect for morning coffee, afternoon snacks, or gathering after a day of island adventures.' },
	30: { title: 'Bunk Room', alt: 'Our custom-built bunk room is a favorite for kids and adults alike! Featuring two full-over-queen bunk beds, beautiful wood stairs, and cozy coastal touches, this space comfortably sleeps up to six guests.' },
	31: { title: 'Downstairs Bath', alt: 'Beautifully appointed bathroom featuring a navy vanity with gold accents, elegant lighting, and a spacious glass-enclosed walk-in shower.' },
	32: { title: 'Bunk Room', alt: 'Two custom full-over-queen bunk beds, perfect for cousins, kids, and late-night laughter' },
	33: { title: 'Bunk Room', alt: 'Our custom-built bunk room is a favorite for kids and adults alike! Featuring two full-over-queen bunk beds, beautiful wood stairs, and cozy coastal touches, this space comfortably sleeps up to six guests.' },
	34: { title: 'Downstairs Living Area', alt: 'A second gathering space designed for relaxing and spending time together! This spacious downstairs living area features comfortable seating, a large TV, a beautiful kitchenette with island seating, and plenty of room for family and friends to spread out. ' },
	35: { title: 'Downstairs Kitchenette & Bar', alt: 'The downstairs kitchenette and bar area features a spacious island with seating, beautiful wood cabinetry, and everything you need for drinks, snacks, and casual gatherings without heading upstairs.' },
	36: { title: 'Downstairs Living Area', alt: 'A second spacious living area downstairs, perfect for relaxing after a day on the water. Features comfortable seating, a large TV, and a convenient kitchenette with bar seating.' },
	37: { title: 'Downstairs Living & Gathering Area', alt: 'A spacious second living area with comfortable seating, a large TV, and an adjoining kitchenette. The perfect spot to relax after a day on the water or enjoy a movie night with family and friends.' },
	38: { title: 'King Suite 3', alt: 'A welcoming king bedroom with thoughtful details and its own private ensuite' },
	39: { title: 'Front Main Bath', alt: 'Fresh coastal colors and thoughtful details make this bathroom feel like an island retreat, featuring a beautiful blue vanity, tiled tub and shower, and plenty of natural light.' },
	40: { title: 'King Suite 3', alt: 'Relax in your private king suite, featuring beautiful white shiplap walls, natural wood furnishings, a Smart TV, and a cozy sitting area. A peaceful retreat to unwind after a day of island adventures.' },
	41: { title: 'Walk-in Closet', alt: 'Unpack and make yourself at home! Our spacious walk-in closet features custom built-in shelving, plenty of hanging space, and thoughtful storage to keep everything organized during your island getaway.' },
	42: { title: 'King Suite 2', alt: 'A beautifully appointed King bedroom with comfortable seating, island views, and a private enuite bathroom' },
	43: { title: 'Primary Walk-in Closet', alt: 'Unpack, settle in, and stay awhile! Our spacious walk-in closets feature custom built-in shelving and plenty of hanging space to make your island stay feel like home.' },
	44: { title: 'Beautifully Appointed Bathroom', alt: 'Bright and airy with beautiful tilework, a spacious glass-enclosed walk-in shower, warm wood vanity, and thoughtful finishes for a relaxing island retreat.' },
	45: { title: 'King Suite 2', alt: 'Relax and unwind in one of Grand Daze’s three spacious king suites, featuring soft coastal colors, comfortable furnishings, and a private ensuite bathroom.' },
	46: { title: 'Primary King Suite 1', alt: 'A peaceful king bedroom with beautiful island views and a private ensuite bath.' },
	47: { title: 'Walk-in Closet', alt: 'Unpack and make yourself at home! Our spacious king suite closets feature custom built-in shelving, plenty of hanging space, and cozy robes for your island stay.' },
	48: { title: 'Primary Ensuite', alt: 'Enjoy a little luxury in your private ensuite bathroom, featuring a spacious glass-enclosed shower, custom vanity, beautiful coastal finishes, and thoughtful touches to make getting ready for your island adventures a breeze.' },
	49: { title: 'Primary Ensuite Bath', alt: 'A spa-inspired retreat featuring a soaking tub and a spacious walk-in shower' },
	50: { title: 'Primary Ensuite', alt: 'A little luxury after a day in paradise! Our spacious ensuite bathroom features a beautiful double vanity, coastal finishes, and plenty of room for two to get ready for another day of island adventures.' },
	51: { title: 'Main Living Area', alt: 'The heart of Grand Daze! Our spacious, open-concept kitchen and living area features a beautiful custom wood island, high-end appliances, and coastal-inspired finishes. Designed for gathering, sharing meals, and making memories with family and friends.' },
	52: { title: 'Coffee & Wine Bar', alt: 'Coffee in the morning, wine in the evening! Our dedicated coffee and wine bar features multiple coffee makers, a wine refrigerator, and everything you need to enjoy a little island relaxation.' },
	53: { title: 'Gourmet Kitchen', alt: 'Cook, gather, and entertain in our spacious gourmet kitchen, featuring an oversized island, professional-style appliances, and beautiful custom cabinetry. Designed to make cooking together part of your island vacation!' },
	54: { title: 'Gourmet Kitchen', alt: 'A spacious, fully equipped kitchen with a generous island for cooking, gathering and making memories' },
	55: { title: 'Open-concept Living and Dining', alt: 'Beautifully designed gathering spaces with plenty of room for family and friends' },
	56: { title: 'Living & Dining Area', alt: 'Gather together in Grand Daze’s spacious open-concept living and dining area, designed for family meals, great conversations, and making island memories.' },
	57: { title: 'Main Living', alt: 'Gather together in our spacious upstairs living room, featuring comfortable seating, coastal-inspired décor, a large Smart TV, and beautiful natural light. The perfect place for family movie nights, games, or simply relaxing after a day on the water.' },
	58: { title: 'Upstairs Living Room', alt: 'Sink into comfortable seating and unwind after a day exploring Elbow Cay' },
	59: { title: 'Main Living Area', alt: 'Gather together in our spacious upstairs living room, featuring comfortable seating, coastal-inspired décor, a large Smart TV, and beautiful natural light. The perfect place for family movie nights, games, or simply relaxing after a day on the water.' },
	60: { title: 'Scullery with Laundry', alt: 'More than just a laundry room! Our spacious scullery features custom cabinetry, a large center island, plenty of small kitchen appliances, and a dedicated laundry area. Thoughtfully designed to make extended island stays feel just like home.' },
	61: { title: 'Hallway Bathroom', alt: 'Coastal charm in every detail! This beautifully designed bathroom features a custom wood vanity, decorative tile accents, and warm brass fixtures for a relaxed island feel.' },
	62: { title: 'Laundry and more', alt: 'Our spacious scullery and laundry room is a dream for longer island stays! Featuring a farmhouse sink, washer and dryer, generous counter space, and just about every small kitchen appliance you can imagine. Everything you need to feel right at home!' },
	63: { title: 'Covered outdoor Dining', alt: 'Gather around the table for outdoor meals, and enjoy the warm island breezes' },
	64: { title: 'Covered Porch Lounge', alt: 'Your favorite spot for morning coffee, afternoon breezes, and views of the marina and White Sound' },
	65: { title: 'Private pool', alt: 'Your own private island Oasis, perfect for sunny afternoons and relaxing poolside.' },
	66: { title: 'Pool deck', alt: 'Relax by the private pool, complete with sun loungers, an umbrella, and a tanning ledge perfect for soaking up the island sunshine' },
	67: { title: 'Pool Deck', alt: 'Enjoy the sunshine with plenty of space to lounge, relax and spend time together' },
	68: { title: 'Aerial View', alt: 'Aerial view of Grand Daze, the surrounding marina, and the coastline of Elbow Cay' },
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
