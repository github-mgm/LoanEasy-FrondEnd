import React from "react";
import './App.css';
import { FaHome, FaCarAlt, FaChild, FaTree, FaWineGlass, FaBitcoin, FaBuilding, FaBusinessTime, FaPlaneDeparture, FaBriefcase } from "react-icons/fa";

function Homepage() {
    return (
        <div>
      <div classname="div1">
        <nav>

            <label class="logo">LoanEasy.Com</label>
                        <ul>
                            <li><a class="active"href="#">What is LoanEasy?</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a  href="#">Happy Customers</a></li>
                            <li><a href="#">Sign in</a></li>
                        </ul>

        </nav>

        <div className="heading1">Let's find you the</div>
        <br></br>
        <div className="heading2"><b>Best Loan!</b></div>
        
        <div className="icon1">
          <FaHome />
          <p className="p1">Home Loan</p>
        </div>
       
        <div className="icon2">
          <FaCarAlt />
          <p className="p2">Car Loan</p>
        </div>

        <div className="icon3">
          <FaChild />
          <p className="p3">Student Loan</p>
        </div>
        
        <div className="icon4">
          <FaTree />
          <p className="p4">Agriculture Loan</p>
        </div>

        <div className="icon5">
          <FaWineGlass />
          <p className="p5">Marriage Loan</p>
        </div>

        <div className="icon6">
          <FaBitcoin />
          <p className="p6">Bitcoin</p>
        </div>

        <div className="icon7">
          <FaBuilding />
          <p className="p7">Construction Loan</p>
        </div>

        <div className="icon8">
          <FaBusinessTime />
          <p className="p8">Business Loan</p>
        </div>

        <div className="icon9">
          <FaPlaneDeparture />
          <p className="p9">Vacation Loan</p>
        </div>
        
        <div className="icon10">
          <FaBriefcase />
          <p className="p10">Personal Loan</p>
        </div>
        <br></br>

        <p className="heading4">Also Buy</p>

        <p className="head1">Non-working Spouse Plan</p>
        <p className="head2">Home Building & items</p>
        <p className="head3">Arogya Sanjeevani</p>
      

      <div className="heading5">What makes  </div>
      <br></br>
      <div className="heading8"><b>LoanEasy</b> the</div>
      <div className="heading6"><b>Best</b> place to buy</div>
      <br></br>
      <div className="heading7">Loan in <b>India</b>?</div>
      </div>

      <div className="box1">
        <b>Over 9 million</b>
        <br></br>
        <p>customers trust us & have bought their loans on LoanEasy</p>
      </div>

      <div className="box2">
        <b>The Best interest rate</b>
        <br></br>
        <p>You will find the best interest rates for all the available loans</p>
      </div>
    </div>
    )
}
         
                
    



export default Homepage;

