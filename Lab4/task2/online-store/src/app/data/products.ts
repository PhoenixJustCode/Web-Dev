import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Home Appliances' },
];

export const products: Product[] = [
  // Smartphones (Category 1)
  {
    id: 1,
    name: 'iPhone 15 Pro Max 256GB',
    description:
      'The latest iPhone with titanium design, A17 Pro chip, and advanced camera system.',
    price: 720125,
    rating: 4.9,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p35/p4d/29468313.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    likes: 120,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    description:
      'Flagship Samsung phone with AI features, 200MP camera, and S Pen.',
    price: 650000,
    rating: 4.8,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
    likes: 95,
    categoryId: 1,
  },
  {
    id: 3,
    name: 'Google Pixel 10 Pro',
    description:
      'The all-pro phone engineered by Google. Sharpest Pixel camera yet.',
    price: 450000,
    rating: 4.7,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/p71/pcd/62211742.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p71/pcd/62211742.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/google-pixel-10-pro-16-gb-256-gb-chernyi-145063320/?c=750000000',
    likes: 45,
    categoryId: 1,
  },
  {
    id: 4,
    name: 'Смартфон Xiaomi Redmi Note 14 Pro 8 ГБ/256 ГБ черный',
    description: 'Legendary photography with Leica optics, Snapdragon 8 Gen 3.',
    price: 580000,
    rating: 4.8,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000',
    likes: 38,
    categoryId: 1,
  },
  {
    id: 5,
    name: 'Смартфон Huawei nova Y73 8 ГБ/256 ГБ черный + подарок',
    description: 'Unique glyph interface, powerful performance, and clean OS.',
    price: 320000,
    rating: 4.6,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h15/hc2/82276949032990.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h15/hc2/82276949032990.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/huawei-nova-y73-8-gb-256-gb-chernyi-podarok-143551353/?c=750000000',
    likes: 67,
    categoryId: 1,
  },

  // Laptops (Category 2)
  {
    id: 6,
    name: 'MacBook Air 13 M2',
    description:
      'Supercharged by M2 chip, 13.6-inch Liquid Retina display, 18 hours battery.',
    price: 430000,
    rating: 4.9,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-256-gb-polnochnyi-105933794/',
    likes: 210,
    categoryId: 2,
  },
  {
    id: 7,
    name: 'Asus ROG Zephyrus G14',
    description: 'Compact gaming laptop with AMD Ryzen 9 and RTX 4060.',
    price: 850000,
    rating: 4.8,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/pa2/pe5/48835854.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pa2/pe5/48835854.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-14-32-gb-ssd-1000-gb-bez-os-90nr0m82-m000w0-141343982/?c=750000000',
    likes: 82,
    categoryId: 2,
  },
  {
    id: 8,
    name: 'Dell XPS 15',
    description:
      'Premium laptop with infinity edge display and high performance.',
    price: 1200000,
    rating: 4.7,
    image:
      'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-16-gb-ssd-1024-gb-win-11-210-bdvf-4-106784220/?c=750000000',
    images: [
      'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-16-gb-ssd-1024-gb-win-11-210-bdvf-4-106784220/?c=750000000',
    ],
    link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-16-gb-ssd-1024-gb-win-11-210-bdvf-4-106784220/?c=750000000',
    likes: 41,
    categoryId: 2,
  },
  {
    id: 9,
    name: 'Lenovo Legion 5 Pro',
    description: 'Winning performance for Gamers and Creators. QHD display.',
    price: 650000,
    rating: 4.9,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/p59/p60/96898648.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p59/p60/96898648.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-legion-pro-5-16iax10h-16-32-gb-ssd-1000-gb-win-11-home-83lu0007us-154971966/?c=750000000',
    likes: 88,
    categoryId: 2,
  },
  {
    id: 10,
    name: 'HP Spectre x360',
    description: 'Versatile 2-in-1 laptop with stunning OLED display.',
    price: 900000,
    rating: 4.7,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5b/24177956.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5b/24177956.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/hp-spectre-x360-2-in-1-16-aa0004ci-16-16-gb-ssd-512-gb-win-11-home-b6st5ea-134505376/?c=750000000',
    likes: 34,
    categoryId: 2,
  },

  // Headphones (Category 3)
  {
    id: 11,
    name: 'AirPods Pro 2nd Gen',
    description: 'Active Noise Cancellation, Transparency mode, Spatial Audio.',
    price: 110000,
    rating: 4.8,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/',
    likes: 312,
    categoryId: 3,
  },
  {
    id: 12,
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise cancellation and premium sound.',
    price: 165000,
    rating: 4.9,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
    likes: 156,
    categoryId: 3,
  },
  {
    id: 13,
    name: 'Sennheiser Momentum 4',
    description: 'Audiophile performance with 60 hours battery life.',
    price: 150000,
    rating: 4.8,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hcb/hde/84609205698590.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hcb/hde/84609205698590.jpg?format=gallery-large',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-sennheiser-momentum-4-chernyi-114975824/?c=750000000',
    likes: 47,
    categoryId: 3,
  },
  {
    id: 14,
    name: 'Bose QuietComfort Ultra',
    description: 'Immersive sound and world-class noise cancellation.',
    price: 190000,
    rating: 4.9,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h59/h04/84919601987614.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h59/h04/84919601987614.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-ultra-earbuds-chernyi-115912598/?c=750000000/',
    likes: 92,
    categoryId: 3,
  },
  {
    id: 15,
    name: 'Marshall Major IV',
    description: 'Iconic design with 80+ hours of wireless playtime.',
    price: 65000,
    rating: 4.8,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000/',
    likes: 205,
    categoryId: 3,
  },

  // Home Appliances (Category 4)
  {
    id: 16,
    name: 'Dyson Airwrap Multi-styler',
    description:
      'Curl, shape, and smooth with the Coanda effect. Without extreme heat.',
    price: 330000,
    rating: 4.9,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/p80/p6b/75454954.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p80/p6b/75454954.jpeg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-complete-long-multi-stailer-fioletovyi-110255263/',
    likes: 450,
    categoryId: 4,
  },
  {
    id: 17,
    name: 'Xiaomi Robot Vacuum S10+',
    description: 'Dual-pad mopping and powerful 4000Pa suction fan.',
    price: 155000,
    rating: 4.7,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/p8d/pf5/6541167.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p8d/pf5/6541167.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-bhr6368eu-belyi-108100032/',
    likes: 118,
    categoryId: 4,
  },
  {
    id: 18,
    name: 'DeLonghi Eletta Explore',
    description:
      'Bean-to-cup coffee machine with hot and cold milk technology.',
    price: 550000,
    rating: 5.0,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h90/h5d/67509248491550.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h90/h5d/67509248491550.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-ecam-450-55-g-eletta-explore-chernyi-108303075/?c=750000000',
    likes: 29,
    categoryId: 4,
  },
  {
    id: 19,
    name: 'Philips Airfryer XXL',
    description: 'Crispy taste with up to 90% less fat. Rapid Air technology.',
    price: 120000,
    rating: 4.9,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hbd/h2e/85318938230814.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hbd/h2e/85318938230814.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/philips-hd9200-11-belyi-117094030/?c=750000000',
    likes: 74,
    categoryId: 4,
  },
  {
    id: 20,
    name: 'KitchenAid Artisan Mixer',
    description: 'The iconic stand mixer for every kitchen task.',
    price: 350000,
    rating: 5.0,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/he1/h84/64062166007838.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/he1/h84/64062166007838.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/mikser-kitchenaid-artisan-krasnyi-101669675/?c=750000000',
    likes: 56,
    categoryId: 4,
  },
];
