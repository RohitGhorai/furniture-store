import React from "react";
import Link from "next/link";

const Home = () => {
    <div
        style={{
            height: "100vh",
            padding: "20px",
            backgroundColor: "#232323",
            color: "white",
        }}
    >
        <h1 style={{fontSize: "48px", marginBottom: "20px"}}>Homepage</h1>
        <p style={{fontSize: "18px", marginBottom: "30px"}}>This project was generated By </p>
        <ul style={{listStyle: "none", padding: "0"}}>
            <li style={{marginBottom: "10px"}}><Link href="/signin" style={{color: "#87CEFA", textDecoration: "none"}}>Signin</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/home1" style={{color: "#87CEFA", textDecoration: "none"}}>Home1</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/category" style={{color: "#87CEFA", textDecoration: "none"}}>Category</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/productlisttwo" style={{color: "#87CEFA", textDecoration: "none"}}>ProductlistTwo</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/productdetailtwo" style={{color: "#87CEFA", textDecoration: "none"}}>ProductdetailTwo</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/cart" style={{color: "#87CEFA", textDecoration: "none"}}>Cart</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/address" style={{color: "#87CEFA", textDecoration: "none"}}>Address</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/payment" style={{color: "#87CEFA", textDecoration: "none"}}>Payment</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/myaccount" style={{color: "#87CEFA", textDecoration: "none"}}>Myaccount</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/myorder" style={{color: "#87CEFA", textDecoration: "none"}}>Myorder</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/wishlist" style={{color: "#87CEFA", textDecoration: "none"}}>Wishlist</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/register" style={{color: "#87CEFA", textDecoration: "none"}}>Register</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/paymentaddnewcard" style={{color: "#87CEFA", textDecoration: "none"}}>Paymentaddnewcard</Link></li>
            <li style={{marginBottom: "10px"}}><Link href="/addressnewuser" style={{color: "#87CEFA", textDecoration: "none"}}>Addressnewuser</Link></li>
        </ul>
    </div>;
};
export default Home;
