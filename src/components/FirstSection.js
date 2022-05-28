import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
// import { scroller } from "react-scroll/modules";

const FirstSection = () => {

  const [pictureIndex, setPictureIndex] = useState(0);
  const htmlCollection = document.getElementsByClassName('Background-images');

  useEffect(() => {
    const interval = setInterval(() => {
      rotateGallery()
    }, 8000);
    return () => clearInterval(interval);
  });

  let isScrolling;
  window.addEventListener('scroll', (event) => {
    window.clearTimeout( isScrolling )

    isScrolling = setTimeout(function() {
      let reviewsY = document.getElementById("reviews-component").getBoundingClientRect().top + window.pageYOffset - 110;
      if (window.scrollY > reviewsY + 100) {
        document.getElementById("down-button").style.transform = "scale(1.25) rotate(180deg)";
        document.getElementById("down-button").style.marginBottom = "22vmin";
      } else {
        document.getElementById("down-button").style.transform = "scale(1.25)";
        document.getElementById("down-button").style.marginBottom = "0vmin";
    }
    }, 66)

  })

  const scrollToSection = () => {

    let servicesY = document.getElementById("Services-component").getBoundingClientRect().top + window.pageYOffset - 100;
    let reviewsY = document.getElementById("reviews-component").getBoundingClientRect().top + window.pageYOffset - 110;
  
    if (window.scrollY <= servicesY ){
       window.scrollTo({top: servicesY, behavior: 'smooth'});
       console.log('first');
    } else if (window.scrollY > servicesY && window.scrollY + 5 < reviewsY) {
      window.scrollTo({top: reviewsY, behavior: 'smooth'});
      console.log('second');
    } else if (window.scrollY + 5 > reviewsY){
      window.scrollTo({top: document.documentElement.scrollTop * 2, behavior: 'smooth'});
      console.log('third');
      console.log(document.documentElement.scrollTop);
    }

    if (window.scrollY + 5 > reviewsY) {
      document.getElementById("down-button").style.transform = "scale(1.25) rotate(180deg)";
      document.getElementById("down-button").style.marginBottom = "22vmin";
      if (window.scrollY > reviewsY) {
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.getElementById("down-button").style.transform = "scale(1.25)";
        document.getElementById("down-button").style.marginBottom = "0vmin";
      }
    } else {
      document.getElementById("down-button").style.transform = "scale(1.25)";
      document.getElementById("down-button").style.marginBottom = "0vmin";
    }
 
    console.log("servicesY, ", servicesY)
    console.log("reviewsY, ", reviewsY)
    console.log("window.scrolly, ", window.scrollY)
    console.log("window y offset, ", window.pageYOffset)
  }

  const setRight = (index) => {
    document.getElementById(`${index}`).style.transform = 'translate(100%)';
    document.getElementById(`${index}`).style.zIndex = '-1';
  }

  const rotateGallery = () => {
    let currentIndex = pictureIndex;
    let nextIndex = currentIndex + 1;

    if (nextIndex === htmlCollection.length) {
      currentIndex = htmlCollection.length - 1;
      nextIndex = 0;
      setPictureIndex(0);
    } else setPictureIndex(pictureIndex + 1);

      if (nextIndex === htmlCollection.length) {
        document.getElementById(`${currentIndex}`).style = 'transform: translate(-100%)';
        document.getElementById(`${nextIndex}`).style = 'transform: translate(0%)';
        setTimeout(function() { setRight(currentIndex)}, 3000);
      } else {
        document.getElementById(`${currentIndex}`).style = 'transform: translate(-100%)';
        document.getElementById(`${nextIndex}`).style = 'transform: translate(0%)';
        setTimeout(function() { setRight(currentIndex)}, 3000);
      }
  }

  return (
    <div id="First-section-component">
      <div className="Wrapper-div"></div>
      <div className="First-section">
        <p className="First-section-text">Best Locksmith and Arms Dealer in Southern Nevada</p>
        <img id="0" className="Background-images" src="https://images.unsplash.com/photo-1629048666499-a1a4fde347a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""></img>
        <img id="1" className="Background-images" style={{transform: "translate(100%"}} src="https://images.unsplash.com/photo-1629048489776-b41f863a2fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""></img>
        <img id="2" className="Background-images" style={{transform: "translate(100%"}} src="https://images.unsplash.com/photo-1612648138792-4202876cd3d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt=""></img>
        <img id="3" className="Background-images" style={{transform: "translate(100%"}} src="https://images.unsplash.com/photo-1602044756164-0688ed14786b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxha2UlMjBtZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt=""></img>
        <img id="4" className="Background-images" style={{transform: "translate(100%"}} src="https://images.unsplash.com/photo-1568661559054-4325ba7fc571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt=""></img>
        <div className="First-section-button">
          <Link to='/quote' className="First-section-button-text">Get a Quote!</Link>
        </div>
        {/* <div className="Skelly-left-wrapper">
          <img src={skelly} className="Skelly-left" alt=""></img>
        </div>
        <div className="Skelly-right-wrapper">
          <img src={skelly} className="Skelly-right" alt=""></img>
        </div> */}
        
        {/* <h2 className="First-section-text-2">Veteran Owned and Operated Since 1995</h2> */}
        {/* <h1 className="First-section-text-2">"For all your security needs!"</h1> */}
      </div>
      <div className="First-section-footer">
        <button className="Navigate-down-button" id="down-button" onClick={scrollToSection}></button>
      </div>
      <Services />
    </div>
  )
}

export default FirstSection;