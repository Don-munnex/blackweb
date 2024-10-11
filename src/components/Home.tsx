import React from "react";
import '../index.css';
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";

const Home: React.FC = () => {
    return (
        <> 
            <nav className="bg-grey-700 p-4 shadow-md rounded-b-lg p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">
                    <a href="#">
                    <p style={{fontSize: "50px"}} className="text-green-500 italic text-xl">Black <br></br>web</p>
                    </a>
                    </div>
                    <div className="space-x-8">
                    <a href="#" className="text-gray-300 hover:text-green-500">Home</a>
                    <a href="#" className="text-gray-300 hover:text-green-500">About</a>
                    <a href="#" className="text-gray-300 hover:text-green-500">Services</a>
                    <a href="#" className="text-gray-300 hover:text-green-500">Contact</a>
                    </div>
                </div>
            </nav>
            <div className="mt-10">
                <ImageSlider />
                <Footer />
            </div>
        </>
    );
};
export default Home;