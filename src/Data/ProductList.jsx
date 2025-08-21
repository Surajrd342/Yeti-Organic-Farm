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
import salmon from "../assets/meat.png";
import pinapple from "../assets/pinaaple.png";
import guava from "../assets/guava.png";
import cucumber from "../assets/cucumber.jpg";
import garlic from "../assets/garlic.jpg";
import peach from "../assets/peach.jpg";
import sharon from "../assets/fruit1.jpg";
import strawberry from "../assets/strawberry.jpg";
import kiwi from "../assets/kiwi.jpg";
import turnip from "../assets/turnip.jpg";

//Hot Deals
const ratingComp = <RatingStar />;
const CountDownTimer = <CountDown className="text-black" />;

const AllProductData = [
  // {
  //     img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
  //     title: "Nike Air Monarch IV",
  //     reviews: "(123 reviews)",
  //     prevPrice: "$140,00",
  //     newPrice: "200",
  //     company: "Nike",
  //     color: "white",
  //     category: "sneakers",
  //   },

  //Popular Products
  {
    id: 1,
    img: apple,
    title: "Green Apple",
    price: 14,
    category: "FreshFruit",
    initialPrice: 28,
    sale: "Sale 50%",
    star: 3,
    tag: "Health`",
    popularProduct: true,
    type: "popularProducts",
  },

  {
    id: 2,
    img: maita,
    title: `Fresh Indian Maita`,
    price: 8,
    category: `FreshFruit`,
    initialPrice: ``,
    star: 4,
    tag: `Healthy`,
    popularProduct: true,
    type: `popularProducts`,
  },

  {
    id: 3,
    img: spinch,
    title: "Green's lettuce",
    price: 20,
    initialPrice: ``,
    category: `vegetables`,
    star: 5,
    tag: `Vegetarian`,
    popularProduct: true,
    type: `popularProducts`,
  },

  {
    id: 4,
    img: lettuce,
    title: `Chinese Cabbage`,
    price: 12,
    initialPrice: 24,
    sale: `Sale 50%`,
    category: `vegetables`,
    star: 3,
    tag: `Vegetarian`,
    popularProduct: true,
    type: `popularProducts`,
  },

  {
    id:`5`,
    img: eggplant,
    title: `Egg Plant`,
    price: 14,
    initialPrice: ``,
    category: `vegetables`,
    star: 4,
    tag: `Vegetarian`,
    popularProduct: true,
    type: `popularProducts`,
  },

  // Hot Deals
  {
    id:`6`,
    img: spinch,
    title: `Chinese Cabbage`,
    price: 17,
    category: `vegetables`,
    hotDeals: true,
    type: `hotDeals`,
    star: 4,
  },

  {
    id:`7`,
    img: lettuce,
    title: `Green lettuce`,
    price: 30,
    initialPrice: 15,
    sale: `Sale 50%`,
    category: `vegetables`,
    hotDeals: true,
    type: `hotDeals`,
    star: 5,
  },

  {
    id:`8`,
    img: eggplant,
    title: `Eggplant`,
    price: 13,
    category: `vegetables`,
    hotDeals: true,
    type: `hotDeals`,
    star: 3,
  },

  {
    id:`9`,
    img: cauli,
    title: `Fresh Cauliflower`,
    price: 14,
    category: `vegetables`,
    hotDeals: true,
    type: `hotDeals`,
    star: 4,
  },

  {
    id:`10`,
    img: capcicum,
    title: `Green Capsicum`,
    price: 19,
    category: `vegetables`,
    hotDeals: true,
    type: `hotDeals`,
    star: 5,
  },

  {
    id:`11`,
    img: chilli,
    title: `Green Chilli`,
    price: 11,
    category: `vegetables`,
    hotDeals: true,
    type: `hotDeals`,
    star: 3,
  },

  {
    id:`12`,
    img: potato,
    title: `Big Potatoes`,
    price: 14,
    category: `vegetables`,
    hotDeals: true,
    type: `hotDeals`,
    star: 3,
  },

  {
    id:`13`,
    img: corn,
    title: `Corn`,
    price: 15,
    category: `vegetables`,
    hotDeals: true,
    type: `hotDeals`,
    star: 3,
  },

  {
    id:`14`,
    img: redchilli,
    title: `Red Chilli`,
    price: 17,
    category: `vegetables`,
    hotDeals: true,
    type: `hotDeals`,
    star: 3,
  },

  {
    id:`15`,
    img: tomato,
    title: `Red Tomato`,
    price: 15,
    category: `vegetables`,
    hotDeals: true,
    type: `hotDeals`,
    star: 3,
  },

  {
    id:`16`,
    img: mango,
    title: `Surjapur Mango`,
    price: 18,
    initialPrice: 36,
    sale: `Sale 50%`,
    category: `FreshFruit`,
    hotDeals: true,
    type: `hotDeals`,
    star: 3,
    category: `FreshFruit`,
  },

  // Featured Products
  {
    id:`17`,
    img: salmon,
    title: `Salmon Meat`,
    price: 15,
    initialPrice: 30,
    sale: `Sale 20%`,
    featuredProducts: true,
    star: 3,
    tag: `Healthy`,
    type: `featuredProducts`,
    category: `meat`,
  },

  {
    id:`18`,
    img: pinapple,
    title: `Pinapple`,
    price: 11,
    initialPrice: ``,
    featuredProducts: true,
    star: 4,
    tag: `Healthy`,
    type: `featuredProducts`,
    category: `FreshFruit`,
  },

  {
    id:`19`,
    img: guava,
    title: `Guava`,
    price: 22,
    initialPrice: ``,
    featuredProducts: true,
    star: 4,
    tag: `Healthy`,
    type: `featuredProducts`,
    category: `FreshFruit`,
  },

  {
    id:`20`,
    img: cucumber,
    title: `Cucumber`,
    price: 8,
    initialPrice: 16,
    sale: `Sale 40%`,
    featuredProducts: true,
    star: 5,
    tag: `Healthy`,
    type: `featuredProducts`,
    category: `vegetables`,
  },

  {
    id:`21`,
    img: garlic,
    title: `Garlic`,
    price: 9,
    initialPrice: ``,
    featuredProducts: true,
    star: 4,
    tag: `Healthy`,
    type: `featuredProducts`,
    category: `vegetables`,
  },

  {
    id:`22`,
    img: peach,
    title: `Peach`,
    price: 22,
    initialPrice: ``,
    featuredProducts: true,
    star: 3,
    tag: `Healthy`,
    type: `featuredProducts`,
    category: `FreshFruit`,
  },

  {
    id:`23`,
    img: sharon,
    title: `Sharon Fruit`,
    price: 16,
    initialPrice: ``,
    featuredProducts: true,
    star: 4,
    tag: `Healthy`,
    type: `featuredProducts`,
    category: `FreshFruit`,
  },

  {
    id:`24`,
    img: strawberry,
    title: `Starwberry`,
    price: 15,
    initialPrice: ``,
    featuredProducts: true,
    star: 4,
    tag: `Healthy`,
    type: `featuredProducts`,
    category: `FreshFruit`,
  },

  {
    id:`25`,
    img: kiwi,
    title: `Kiwi`,
    price: 7,
    initialPrice: ``,
    featuredProducts: true,
    star: 3,
    tag: `Healthy`,
    type: `featuredProducts`,
    category: `FreshFruit`,
  },

  {
    id:`26`,
    img: turnip,
    title: `Turnip`,
    price: 17,
    initialPrice: ``,
    featuredProducts: true,
    star: 5,
    tag: `Healthy`,
    type: `featuredProducts`,
    category: `vegetables`,
  },
];

export { AllProductData };
