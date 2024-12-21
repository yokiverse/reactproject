import React from "react";
import { Link } from "react-router-dom";
import { FaLessThan } from "react-icons/fa6";
import img1 from './img/sample1.png';
import img2 from './img/sample2.png';
import img3 from './img/sample3.png';
import img4 from './img/sample4.png';

const Digital=()=>{
    return(
        <div className="Digital">
      <div className="title">
        <Link to="/AddDetails">
          <div className="less">
          <FaLessThan className="lessthan" />
          </div>
        </Link>
        <p>
          Additional <br></br> Details
        </p>
      </div>
      <hr />
      <div className="img">
        <img src={img1} alt="sample" srcset="" />
        <div className="rate"><p>$293.26</p></div>
      </div>
      <h4>Sample images</h4>
      <div className="imgone">
        <img src={img2} alt="sample" srcset="" />
        <div className="rate"><p>$293.26</p></div>
      </div>
      <h4>Ubran Classics Vintage flared jeans in midstone whashed</h4>
      <div className="imgtwo">
        <img src={img3} alt="image 1" srcset="" />
        </div>
        <div className="logo">
        <div className="imgthree">
        <img src={img4} alt="image 2" srcset="" />
        </div>
        <h4>Amos Burton</h4>
        </div>
        <div className="para-one">
            <h3>Wedding photographer in London </h3>
            <div className="rate">
                <p className="coust">$1.00</p>
                <p>Lorem , provident numquam minus assumenda! Expedita commodi dolorem laborum placeat quaerat?</p>
                <hr />
                <div className="yes">
                    <p>Ariel dron footage</p>
                    <h4>Yes</h4>
                </div>
                <hr />
                <div className="day">
                    <p>Express turnaround time</p>
                    <h4>14 days</h4>
                </div>
            </div>
        </div>
        <h4>Benifits</h4>
        <div className="para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur vel libero, assumenda dignissimos veritatis.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis non laboriosam labore eos porro, perferendis rerum harum dolorem esse quibusdam repellendus aspernatur atque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias mollitia reiciendis, odit omnis placeat porro assumenda saepe perferendis nulla rerum perspiciatis sit, aliquid aut non!</p>
        </div>
           <Link to='/Digital-Product' className="link-text"> <button className="next-button">Buy for $199</button></Link>
           
      </div>
    )
}
export default Digital;