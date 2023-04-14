// Slider
import Logo1 from "../assets/Images/Slider-Component/slider_woman_summer.png";
import Logo2 from "../assets/Images/Slider-Component/img-002.png";
import Logo3 from "../assets/Images/Slider-Component/logo-3.png";

// Categoies
import Jeans from "../assets/Images/Categories/Jeans.jpg";
import Jacket from "../assets/Images/Categories/Jacket.jpg";
import Shirt from "../assets/Images/Categories/Shirt.jpg";

// Product
import P1 from "../assets/Images/Products/t-shirt.png";
import P2 from "../assets/Images/Products/jacket.png";
import P3 from "../assets/Images/Products/Casual.png";
import P4 from "../assets/Images/Products/WinterCoat.png";
import P5 from "../assets/Images/Products/LeatherJacket.png";
import P6 from "../assets/Images/Products/shoe.png";
import P7 from "../assets/Images/Products/P7.png";
import P8 from "../assets/Images/Products/P8.png";
import P9 from "../assets/Images/Products/P9.png";

export const SliderItems = [
  {
    id: 1,
    img: `${Logo1}`,
    title: "SUMMER SALE",
    description:
      "DON'T COMPROMISE ON STYLES. GET FLAT UPTO 25% DISCOUNTS ON NEW ARRIVALS",
    bg: "#b0fed8",
  },

  {
    id: 2,
    img: `${Logo2}`,
    title: "AUTUMN COLLECTION",
    description:
      "GRAB UPTO 30% DISCOUNTS ON AUTUMN 2022. STOCK CLEARANCE SALE...",
    bg: "#dbfff3",
  },
  {
    id: 3,
    img: `${Logo3}`,
    title: "DESIGNER COLLECTIONS",
    description: "UPTO 40% DISCOUNTS ON DESIGNER COLLECTIONS",
    bg: "#f9d8f6",
  },
];

export const CategoriesData = [
  {
    id: 1,
    img: `${Shirt}`,
    title: "SHIRT STYLE",
  },
  {
    id: 2,
    img: `${Jeans}`,
    title: "JEANS",
  },
  {
    id: 3,
    img: `${Jacket}`,
    title: "LIGHT JACKETS",
  },
];

export const ProductData = [
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: `${P9}`,
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: `${P2}`,
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: `${P3}`,
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: `${P4}`,
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: `${P5}`,
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Long sleeve with hooded jacket",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: `${P6}`,
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: `${P7}`,
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: `${P8}`,
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
];
