import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Details from "../Pages/Details";
import Products from "../Pages/Products";
import Mobile from "../Pages/Mobile";
import Laptop from "../Pages/Laptop";
import Account from "../Pages/Account";
import Android from "../Pages/Android";
import AndroidPhones from "../Pages/AndroidPhones";
import Angular from "../Pages/Angular";
import Backend from "../Pages/Backend";
import CloudRun from "../Pages/CloudRun";
import CloudServices from "../Pages/CloudServices";
import ComputeEngine from "../Pages/ComputeEngine";
import Django from "../Pages/Django";
import AWS from "../Pages/AWS";
import EC2 from "../Pages/EC2";
import Electronics from "../Pages/Electronics";
import EthnicWear from "../Pages/EthnicWear";
import Fashion from "../Pages/Fashion";
import Firestore from "../Pages/Firestore";
import Frontend from "../Pages/Frontend";
import GamingLaptops from "../Pages/GamingLaptops";
import GoogleCloud from "../Pages/GoogleCloud";
import IPhones from "../Pages/IPhones";
import Ios from "../Pages/Ios";
import Java from "../Pages/Java";
import Jeans from "../Pages/Jeans";
import Kotlin from "../Pages/Kotlin";
import Lambda from "../Pages/Lambda";
import Laptops from "../Pages/Laptops";
import Laravel from "../Pages/Laravel";
import Men from "../Pages/Men";
import MobileDevelopment from "../Pages/MobileDevelopment";
import Mobiles from "../Pages/Mobiles";
import Node from "../Pages/Node";
import Notifications from "../Pages/Notifications";
import ObjectiveC from "../Pages/ObjectiveC";
import OfficeLaptops from "../Pages/OfficeLaptops";
import Orders from "../Pages/Orders";
import Privacy from "../Pages/Privacy";
import Profile from "../Pages/Profile";
import React1 from "../Pages/React1";
import S3 from "../Pages/S3";
import Security from "../Pages/Security";
import Settings from "../Pages/Settings";
import Shirts from "../Pages/Shirts";
import Swift from "../Pages/Swift";
import Tops from "../Pages/Tops";
import Vue from "../Pages/Vue";
import WebDevelopment from "../Pages/WebDevelopment";
import Whishlists from "../Pages/Whishlists";
import Women from "../Pages/Women";

export const AllRouter = createBrowserRouter([
    // {
    //     path:"/",
    //     element:<MainLayout/>,
    //     children:[
    //         {
    //             path:"home",
    //             element:<Home/>
    //         },
    //         {
    //             path:"about",
    //             element:<About/>
    //         },
    //         {
    //             path:"contact",
    //             element:<Contact/>
    //         },
    //         {
    //             path:"services",
    //             element:<Services/>
    //         },
    //         {
    //             path:":id",
    //             element:<Details/>
    //         },
    //         {
    //             path:"products",
    //             element:<Products/>,
    //             children:[
    //                 {
    //                     path:"mobile",
    //                     element:<Mobile/>
    //                 },
    //                 {
    //                     path:"laptop",
    //                     element:<Laptop/>
    //                 }
    //             ]
    //         }
    //     ]
    // }


    
  {
    element: <Home/>,
    path: "/home",
    icon: "home",
  },

  {
    element: <About/>,
    path: "/about",
    icon: "info",
  },

  {
    title: "Services",
    path: "/services",
    icon: "services",
    children: [
      {
        title: "WebDevelopment",
        path: "web-dev",
        children: [
          {
            title: "Frontend",
            path: "frontend",
            children: [
            {
              title: "React1",
              path: "react",
            },
            {
              title: "Vue",
              path: "vue",
            },
            {
              title: "Angular",
              path: "angular",
            },
            ],
          },
          {
            title: "Backend",
            path: "backend",
            children: [
              {
                title: "Node.js",
                path: "node",
              },
              {
                title: "Django",
                path: "django",
              },
              {
                title: "Laravel",
                path: "laravel",
              }
            ],
          },
        ],
      },

      {
        title: "MobileDevelopment",
        path: "mobile-dev",
        children: [
          {
            title: "Android",
            path: "android",
            children: [
              { title: "Kotlin", path: "kotlin" },
              { title: "Java", path: "java" },
            ],
          },
          {
            title: "IOS",
            path: "ios",
            children: [
              { title: "Swift", path: "swift" },
              { title: "ObjectiveC", path: "objc" },
            ],
          },
        ],
      },

      {
        title: "CloudServices",
        path: "cloud",
        children: [
          {
            title: "AWS",
            path: "aws",
            children: [
              { title: "EC2", path: "ec2" },
              { title: "Lambda", path: "lambda" },
              { title: "S3", path: "s3" },
            ],
          },
          {
            title: "GoogleCloud",
            path: "gcp",
            children: [
              { title: "ComputeEngine", path: "compute" },
              { title: "CloudRun", path: "run" },
              { title: "Firestore", path: "firestore" },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Products",
    path: "/products",
    children: [
      {
        title: "Electronics",
        path: "electronics",
        children: [
          {
            title: "Mobiles",
            path: "mobiles",
            children: [
              { title: "AndroidPhones", path: "android" },
              { title: "IPhones", path: "iphone" },
            ],
          },
          {
            title: "Laptops",
            path: "laptops",
            children: [
              { title: "GamingLaptops", path: "gaming" },
              { title: "OfficeLaptops", path: "office" },
            ],
          },
        ],
      },
      {
        title: "Fashion",
        path: "fashion",
        children: [
          {
            title: "Men",
            path: "men",
            children: [
              { title: "Shirts", path: "shirts" },
              { title: "Jeans", path: "jeans" },
            ],
          },
          {
            title: "Women",
            path: "women",
            children: [
              { title: "Tops", path: "tops" },
              { title: "EthnicWear", path: "ethnic" },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Account",
    path: "/account",
    children: [
      { title: "Profile", path: "profile" },
      { title: "Orders", path: "orders" },
      { title: "Wishlist", path: "wishlist" },
      {
        title: "Settings",
        path: "settings",
        children: [
          { title: "Security", path: "security" },
          { title: "Notifications", path: "notifications" },
          { title: "Privacy", path: "privacy" },
        ],
      },
    ],
  },

]);