import React from "react";
import Pistola from '../public/images/pistola.png';
import bullete from '../public/images/bullete.png'
import Image from "next/image"; 

const bulletPoints = [
    {text: "a"},
    {text: "a"},
    {text: "a"},
    {text: "a"},
]

const List = () => {
    return (
        <div className="grid grid-cols-2 gap-2 bg-red-800 text-white h-1/2 w-1/2">
            <div>
                <h1>Pistola</h1>
                <Image src={Pistola} alt="Pistola"/>
            </div>
            <div>
                <div>
                    <ul>
                        {bulletPoints.map((point, idx) => (<li key={idx}><span><Image className="w-[40px]" src={bullete} alt="bullet" /> {point.text}</span></li>))}                        
                    </ul>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus incidunt earum esse ullam vero repudiandae reprehenderit, voluptatum rerum natus totam placeat architecto sint sapiente dolor doloremque nostrum nam optio.
                </div>
            </div>
        </div>
    )
}



export default List
