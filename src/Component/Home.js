import React, {useState, setTimeout, useEffect} from "react";
import dish from '../images/dish.jpg';
import food from '../images/food.jpg';
import noddles from '../images/noddles.jpg'
import download from '../images/download.jpg'
import DishDetails from "./DishDetails";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';//react-redux used to select that state u want to fetch
import { increment } from "../action";


export function Home() {
 const images = [dish,food,noddles]; // to list the images for time interval
 const counter = useSelector(state=>state.counter);//fetch counter//react redux
 const dispatch = useDispatch();//to dispatch the increment.. react redux
  const [sideImage, setSideimage] = useState(download); //this displays the image "download"
   const [sideImageCount, setSideimageCount] = useState(0); // 
    
   //to set time interval
    useEffect(() => {
      setInterval(() => {



        setSideimage(images[sideImageCount]);
        setSideimageCount((sideImageCount+1)%3)// to increase image time count
    }, 3000)
 })



return(
  <div> 
  <div className='container'>
    <div className="row">
        <div className="col-md-9">
          <p>{counter}</p>{/*display the fetch counter here.. react redux*/}
          <button onClick={()=>dispatch(increment())}>increment</button> {/*react redux*/}
       <p>the newv yHHNEOJIHL,KPJ
    HKEKJYU;LKITYYTFVJHMKHYFHBgfgiks bstsbn  canm yu pleas etell ur girfriend to see if u can see tjhe guys that did u bad s
    HTGUJNMSYUYHIOKMLKNBJGIUJOIKo 8i can piput t6hennm int therur opkace thpugvxcdtr
    gfgvhjjhsnv  can u opleaSES</p>
    </div>
  
    <div className="col-md-3">
     <img src={sideImage}></img>
    </div>
    </div>
  <button><Link to='/form'>Link</Link></button>
    <DishDetails/>
  </div>
  </div>
    )
}