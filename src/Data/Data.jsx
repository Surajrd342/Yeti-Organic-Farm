//Popular Categories
import Fruit from "../assets/fruit.png";
import veg from "../assets/veg.png";
import meat from "../assets/meat.png";
import snacks from "../assets/snacks.png";
import bevrage from "../assets/bevrage.png";
import beauty from "../assets/beauty.png";
import bakery from "../assets/bakery.png";
import baking from "../assets/baking.png";
import cooking from "../assets/cooking.png";
import diabetic from "../assets/diabetic.png";
import dish from "../assets/dish.png";
import oil from "../assets/oil.png";

//Popular Products
import apple from "../assets/apple.png";
import maita from "../assets/maita.png";
import spinch from "../assets/spinch.png";
import lettuce from "../assets/lettuce.png";
import eggplant from "../assets/eggplant.png";

//Sale month
import React, { Component } from "react";
import CountDown from "../component/HomePage/CountDown";
import LowFat from "../component/HomePage/LowFat";
import FreshFruit from "../component/HomePage/FreshFruit";

//Sale month
import sale from "../assets/salemonth.png";
import fat from "../assets/low-fat.png";
import fruit from "../assets/fresh-fruit.png";

//Hot Deals
import RatingStar from "../component/RatingStar/RatingStar";
import appleFull from "../assets/appleFull.jfif";
import potato from "../assets/potato.png";
import corn from "../assets/corn.png";
import cauli from "../assets/cauli.png";
import capcicum from "../assets/capcicum.png";
import chilli from "../assets/chilli.png";
import redchilli from "../assets/redchilli.png";
import tomato from "../assets/tomato.png";
import mango from "../assets/mango.png";

//Latest news
import latestimage1 from "../assets/limage1.png";
import latestimage2 from "../assets/limage2.png";
import latestimage3 from "../assets/limage3.png";

//Client Testomonial
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

//Follow us and Partner logo
import steps from "../assets/steps.png";
import mangologo from "../assets/mangologo.png";
import foodlogo from "../assets/foodlogo.png";
import fooduklogo from "../assets/fooduklogo.png";
import booklogo from "../assets/booklogo.png";
import glogo from "../assets/glogo.png";
import Instagram1 from "../assets/Instagram1.png";
import Instagram2 from "../assets/Instagram2.png";
import Instagram3 from "../assets/Instagram3.png";
import Instagram4 from "../assets/Instagram4.png";
import Instagram5 from "../assets/Instagram5.png";
import Instagram6 from "../assets/Instagram6.png";

//Images for single Product
import cabbage1 from "../assets/chinese-cabbage1.png";
import cabbage2 from "../assets/chinese-cabbage2.png";
import cabbage3 from "../assets/chinese-cabbage3.png";
import cabbage4 from "../assets/chinese-cabbage4.png";

//Sale Month
const componentFirst = <CountDown className="text-white lg:text-[24px] md:text-[20px]" />;
const componentSecond = <LowFat />;
const componentThird = <FreshFruit />;

//Hot Deals
const ratingComp = <RatingStar />;
const CountDownTimer = <CountDown className="text-black" />;

//All product list
import saleImg1 from "../assets/mango.png";
import saleImg2 from "../assets/tomato.png";
import saleImg3 from "../assets/redchilli.png";

const data = {
  popCatData: [
    {
      nameCategory: `Fresh Fruit`,
      imgCategory: Fruit,
    },
    {
      nameCategory: `Fresh Vegitables`,
      imgCategory: veg,
    },
    {
      nameCategory: ` Meat & Fish`,
      imgCategory: meat,
    },
    {
      nameCategory: `Snacks`,
      imgCategory: snacks,
    },
    {
      nameCategory: `Bevrages`,
      imgCategory: bevrage,
    },
    {
      nameCategory: `Beauty & Health`,
      imgCategory: beauty,
    },
    {
      nameCategory: `Bread & Bakery`,
      imgCategory: bakery,
    },
    {
      nameCategory: `Baking Needs`,
      imgCategory: baking,
    },
    {
      nameCategory: `Cooking`,
      imgCategory: cooking,
    },
    {
      nameCategory: `Diabetic Food`,
      imgCategory: diabetic,
    },
    {
      nameCategory: `Dish Detergents`,
      imgCategory: dish,
    },
    {
      nameCategory: `Oil`,
      imgCategory: oil,
    },
  ],

  latestNews: [
    {
      title: `Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.`,
      category: `Food`,
      type: `By Admin`,
      comments: `65 Comments`,
      day: `18`,
      month: `Nov`,
      button: `Read More`,
      img: latestimage1,
    },
    {
      title: `Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.`,
      category: `Food`,
      type: `By Admin`,
      comments: `105 Comments`,
      day: `20`,
      month: `Jan`,
      button: `Read More`,
      img: latestimage2,
    },
    {
      title: `Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.`,
      category: `Food`,
      type: `By Admin`,
      comments: `50 Comments`,
      day: `10`,
      month: `July`,
      button: `Read More`,
      img: latestimage3,
    },
  ],

  clientTest: [
    {
      name: `Robert Fox`,
      type: `Customer`,
      comment: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.Phasellus imperdiet elit eu magna dictum,
      bibendum cursus velit sodales.Donec sed neque eget`,
      img: client1,
    },
    {
      name: `Eleanor Pena`,
      type: `Customer`,
      comment: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.Phasellus imperdiet elit eu magna dictum,
      bibendum cursus velit sodales.Donec sed neque eget`,
      img: client2,
    },
    {
      name: `Dianne Russell`,
      type: `Customer`,
      comment: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.Phasellus imperdiet elit eu magna dictum,
      bibendum cursus velit sodales.Donec sed neque eget`,
      img: client3,
    },
    {
      name: `Alex Russell`,
      type: `Customer`,
      comment: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.Phasellus imperdiet elit eu magna dictum,
      bibendum cursus velit sodales.Donec sed neque eget`,
      img: client3,
    },
    {
      name: `Elina Russell`,
      type: `Customer`,
      comment: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.Phasellus imperdiet elit eu magna dictum,
      bibendum cursus velit sodales.Donec sed neque eget`,
      img: client3,
    },
  ],

  followUs: [
    {
      img: Instagram1,
      logo: steps,
    },
    {
      img: Instagram2,
      logo: mangologo,
    },
    {
      img: Instagram3,
      logo: foodlogo,
    },
    {
      img: Instagram4,
      logo: fooduklogo,
    },
    {
      img: Instagram5,
      logo: booklogo,
    },
    {
      img: Instagram6,
      logo: glogo,
    },
  ],

  //Single Product Page data
  slides: [
    { url: cabbage1 },
    { url: cabbage2 },
    { url: cabbage3 },
    { url: cabbage4 },
  ],

  mainData: [
    {
      title: `Chinese Cabbage`,
      available: `In Stock`,
      sku: `251,598`,
      initialPrice: `$48.00`,
      price: `$17.28`,
      discountRate: `64%`,
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
      per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.
      Nulla varius magna a consequat pulvinar.`,
      category: `Vegetables`,
    },
  ],

  descData: [
    {
      descone: `Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, 
      viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus,
      nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante,
      vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. 
      Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo.
      Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.
      Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt,
      turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.`,
      desctwo: `Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
      dui. Sed iaculis, metus faucibus elementum tincidunt, turpis
      mi viverra velit, pellentesque tristique neque mi eget
      nulla. Proin luctus elementum neque et pharetra.`,
      lione: `100 g of fresh leaves provides.`,
      litwo: `Aliquam ac est at augue volutpat elementum.`,
      lithree: `Quisque nec enim eget sapien molestie.`,
      lifour: `Proin convallis odio volutpat finibus posuere.`,
      pend: `Cras et diam maximus, accumsan sapien et, sollicitudin
      velit. Nulla blandit eros non turpis lobortis iaculis at ut
      massa.`,
      youLink: `https://www.youtube.com/embed/JiENRbBH2D4?si=Ao_Dty7ouxoyY1wp`,
      discountRate: `64%`,
    },
  ],

  relatedProducts: [
    {
      img: apple,
      name: `Green Apple`,
      price: `$14.99`,
      initialPrice: `$20.99`,
      sale: `Sale 50%`,
    },
    {
      img: maita,
      name: `Fresh Indian Maita`,
      price: `$10.22`,
      initialPrice: ``,
    },
    {
      img: spinch,
      name: `Green lettuce`,
      price: `$10.22`,
      initialPrice: ``,
    },
    {
      img: lettuce,
      name: `Chinese Cabbage`,
      price: `$10.22`,
      initialPrice: `$20.99`,
      sale: `Sale 50%`,
    },
  ],

  //All product page
  saleData: [
    {
      img: saleImg3,
      name: `Red Capsicum`,
      price: `$15.00`,
      initialPrice: `$20.99`,
    },
    {
      img: saleImg1,
      name: `Mango`,
      price: `$10.00`,
      initialPrice: `$18.99`,
    },
    {
      img: saleImg2,
      name: `Tomato`,
      price: `$32.00`,
      initialPrice: `$20.99`,
    },
  ],

  categoriesName: [
    {
      categoryName: `All`,
      itemsFirst: `(25)`,
      items: `(134)`,
    },
    {
      categoryName: `Fresh Fruit`,
      itemsFirst: `(25)`,
      items: `(134)`,
    },
    {
      categoryName: `Vegetables`,
      items: `(150)`,
    },
    {
      categoryName: `Cooking`,
      items: `(50)`,
    },
    {
      categoryName: `Snacks`,
      items: `(47)`,
    },
    {
      categoryName: `Beverages`,
      items: `(43)`,
    },
    {
      categoryName: `Beauty & Health`,
      items: `(38)`,
    },
    {
      categoryName: `Bread & Bakery`,
      items: `(15)`,
    },
  ],

  saleMonth: [
    {
      img: sale,
      heading: `best deals`,
      title: `Sale of the Month`,
      button: `Shop Now`,
      Component: componentFirst,
    },
    {
      img: fat,
      heading: `85% FAT FREE`,
      title: `Low-Fat Meat`,
      button: `Shop Now`,
      Component: componentSecond,
    },
    {
      img: fruit,
      heading: `SUMMER SALE`,
      title: `100% Fresh Fruit`,
      button: `Shop Now`,
      Component: componentThird,
    },
  ],
};

const AllProductData = [
  //Popular Products
  {
    img: apple,
    title: `Green Apple`,
    price: `$14.99`,
    initialPrice: `$20.99`,
    sale: `Sale 50%`,
    category: `Fresh Fruit`,
    star: <RatingStar />,
    tag: `Healthy`,
    popularProduct: true,
  },

  {
    img: maita,
    title: `Fresh Indian Maita`,
    price: `$10.22`,
    initialPrice: ``,
    category: `Fresh Fruit`,
    star: <RatingStar />,
    tag: `Healthy`,
    popularProduct: true,
  },

  {
    img: spinch,
    title: `Green lettuce`,
    price: `$10.22`,
    initialPrice: ``,
    category: `Vegetables`,
    star: <RatingStar />,
    tag: `Vegetarian`,
    popularProduct: true,
  },

  {
    img: lettuce,
    title: `Chinese Cabbage`,
    price: `$10.22`,
    initialPrice: `$20.99`,
    sale: `Sale 50%`,
    category: `Vegetables`,
    star: <RatingStar />,
    tag: `Vegetarian`,
    popularProduct: true,
  },

  {
    img: eggplant,
    title: `Egg Plant`,
    price: `$10.22`,
    initialPrice: ``,
    category: `Vegetables`,
    star: <RatingStar />,
    tag: `Vegetarian`,
    popularProduct: true,
  },

  // Hot Deals
  {
    img: spinch,
    title: `Chinese Cabbage`,
    price: `$10.99`,
    Component: ratingComp,
    category: `Vegetables`,
    hotDeals: true,
  },

  {
    img: lettuce,
    title: `Green lettuce`,
    price: `$10.99`,
    initialPrice: ` $20.99`,
    sale: `Sale 50%`,
    Component: ratingComp,
    category: `Vegetables`,
    hotDeals: true,
  },
  {
    img: eggplant,
    title: `Eggplant`,
    price: `$13.99`,
    Component: ratingComp,
    category: `Vegetables`,
    hotDeals: true,
  },

  {
    img: cauli,
    title: `Fresh Cauliflower`,
    price: `$14.99`,
    Component: ratingComp,
    category: `Vegetables`,
    hotDeals: true,
  },

  {
    img: capcicum,
    title: `Green Capsicum`,
    price: `$19.00`,
    Component: ratingComp,
    category: `Vegetables`,
    hotDeals: true,
  },

  {
    img: chilli,
    title: `Green Chilli`,
    price: `$11.00`,
    Component: ratingComp,
    category: `Vegetables`,
    hotDeals: true,
  },

  {
    img: potato,
    title: `Big Potatoes`,
    price: `$14.99`,
    Component: ratingComp,
    category: `Vegetables`,
    hotDeals: true,
  },

  {
    img: corn,
    title: `Corn`,
    price: `$15.99`,
    Component: ratingComp,
    category: `Vegetables`,
    hotDeals: true,
  },

  {
    img: redchilli,
    title: `Red Chilli`,
    price: `$17.00`,
    Component: ratingComp,
    category: `Vegetables`,
    hotDeals: true,
  },

  {
    img: tomato,
    title: `Red Tomato`,
    price: `$15.00`,
    Component: ratingComp,
    category: `Vegetables`,
    hotDeals: true,
  },

  {
    img: mango,
    title: `Surjapur Mango`,
    price: `$19.00`,
    initialPrice: ` $20.99`,
    sale: `Sale 50%`,
    Component: ratingComp,
    category: `Fresh Fruit`,
    hotDeals: true,
  },

  // Featured Products
  {
    img: apple,
    title: `Green Apple`,
    price: `$14.99`,
    initialPrice: `$20.99`,
    sale: `Sale 50%`,
    featuredProducts: true,
    star: <RatingStar />,
    tag: `Healthy`,
  },

  {
    img: maita,
    title: `Fresh Indian Maita`,
    price: `$10.22`,
    initialPrice: ``,
    featuredProducts: true,
    star: <RatingStar />,
    tag: `Healthy`,
  },

  {
    img: spinch,
    title: `Green lettuce`,
    price: `$10.22`,
    initialPrice: ``,
    featuredProducts: true,
    star: <RatingStar />,
    tag: `Healthy`,
  },

  {
    img: lettuce,
    title: `Chinese Cabbage`,
    price: `$10.22`,
    initialPrice: `$20.99`,
    sale: `Sale 50%`,
    featuredProducts: true,
    star: <RatingStar />,
    tag: `Healthy`,
  },

  {
    img: eggplant,
    title: `Egg Plant`,
    price: `$10.22`,
    initialPrice: ``,
    featuredProducts: true,
    star: <RatingStar />,
    tag: `Healthy`,
  },
];

const HoteDealsMain = [
  {
    img: appleFull,
    title: `Green Apple`,
    price: `$12.00`,
    initialPrice: `$24.00`,
    offerTag: ` Hurry up! Offer ends In:`,
    sale: `Sale 50%`,
    bestSale: `Best Sale`,
    Component: ratingComp,
    Components: CountDownTimer,
    star: 4,
  },
];

export  { data, AllProductData, HoteDealsMain };


