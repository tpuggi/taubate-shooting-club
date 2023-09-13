import React from "react";
import Pistola from '../public/images/pistola.png';
import bullete from '../public/images/bullete.png'
import Image from "next/image"; 

const List1 = () => {
    return (
        <div className="grid grid-cols-2 gap-8 mx-10 my-4">
            <div className="grid gap-2">
                <div className="grid grid-cols-2 grid-rows-2 gap-8 mx-10 my-4  bg-red-800">
                    <div className="w-80 left-[336px] top-[186px] absolute text-justify text-white">
                        <span className="text-base font-normal leading-snug">
                            Pistola é uma arma de fogo ou o feeder, leve, de{" "}
                        </span>
                        <span className="text-base font-bold leading-snug">cano curto</span>
                        <span className="text-base font-normal leading-snug">
                            . Uma pistola geralmente é uma arma pequena de{" "}
                        </span>
                        <span className="text-base font-bold leading-snug">boa empunhadura</span>
                        <span className="text-base font-normal leading-snug">
                            {" "}
                            e rápido manuseio, feita originalmente para uso pessoal em ações de pequeno alcance.
                        </span>
                    </div>
                    <Image
                        className="w-64 h-52 left-[97.60px] top-[58.55px] origin-top-left"
                        src={Pistola}
                        alt="Pistola"
                    />
                    <div className="left-[99px] top-[33px] absolute text-white text-5xl font-normal leading-loose">
                        PISTOLA
                    </div>
                    <div className="w-60 h-36 left-[336px] top-[25px] absolute">
                        <div className="left-[77px] top-0 absolute text-white text-3xl font-normal leading-loose">
                            Cano curto
                        </div>
                        <div className="left-[77px] top-[30px] absolute text-white text-3xl font-normal leading-loose">
                            Boa empunhadura
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-96 h-80 relative bg-red-800">
                    <div className="w-80 left-[336px] top-[186px] absolute text-justify text-white">
                        <span className="text-base font-normal leading-snug">
                            Pistola é uma arma de fogo ou o feeder, leve, de{" "}
                        </span>
                        <span className="text-base font-bold leading-snug">cano curto</span>
                        <span className="text-base font-normal leading-snug">
                            . Uma pistola geralmente é uma arma pequena de{" "}
                        </span>
                        <span className="text-base font-bold leading-snug">boa empunhadura</span>
                        <span className="text-base font-normal leading-snug">
                            {" "}
                            e rápido manuseio, feita originalmente para uso pessoal em ações de pequeno alcance.
                        </span>
                    </div>
                    <Image
                        className="w-64 h-52 left-[97.60px] top-[58.55px] absolute origin-top-left"
                        src={Pistola}
                        alt="Pistola"
                    />
                    <div className="left-[99px] top-[33px] absolute text-white text-5xl font-normal leading-loose">
                        PISTOLA
                    </div>
                    <div className="w-60 h-36 left-[336px] top-[25px] absolute">
                        <div className="left-[77px] top-0 absolute text-white text-3xl font-normal leading-loose">
                            Cano curto
                        </div>
                        <div className="left-[77px] top-[30px] absolute text-white text-3xl font-normal leading-loose">
                            Boa empunhadura
                        </div>
                    </div>
                </div>
        </div>
    );
};
    

const List2 = () => {
    return (
        <div className="grid grid-cols-2 gap-8 mx-10 my-4">
            <div className="grid gap-2">
                <div className="w-96 h-80 relative bg-red-800">
                    <div className="w-80 left-[336px] top-[186px] absolute text-justify text-white">
                        <span className="text-base font-normal leading-snug">
                            Pistola é uma arma de fogo ou o feeder, leve, de{" "}
                        </span>
                        <span className="text-base font-bold leading-snug">cano curto</span>
                        <span className="text-base font-normal leading-snug">
                            . Uma pistola geralmente é uma arma pequena de{" "}
                        </span>
                        <span className="text-base font-bold leading-snug">boa empunhadura</span>
                        <span className="text-base font-normal leading-snug">
                            {" "}
                            e rápido manuseio, feita originalmente para uso pessoal em ações de pequeno alcance.
                        </span>
                    </div>
                    <Image
                        className="w-64 h-52 left-[97.60px] top-[58.55px] origin-top-left"
                        src={Pistola}
                        alt="Pistola"
                    />
                    <div className="left-[99px] top-[33px] absolute text-white text-5xl font-normal leading-loose">
                        PISTOLA
                    </div>
                    <div className="w-60 h-36 left-[336px] top-[25px] absolute">
                        <div className="left-[77px] top-0 absolute text-white text-3xl font-normal leading-loose">
                            Cano curto
                        </div>
                        <div className="left-[77px] top-[30px] absolute text-white text-3xl font-normal leading-loose">
                            Boa empunhadura
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-96 h-80 relative bg-red-800">
                    <div className="w-80 left-[336px] top-[186px] absolute text-justify text-white">
                        <span className="text-base font-normal leading-snug">
                            Pistola é uma arma de fogo ou o feeder, leve, de{" "}
                        </span>
                        <span className="text-base font-bold leading-snug">cano curto</span>
                        <span className="text-base font-normal leading-snug">
                            . Uma pistola geralmente é uma arma pequena de{" "}
                        </span>
                        <span className="text-base font-bold leading-snug">boa empunhadura</span>
                        <span className="text-base font-normal leading-snug">
                            {" "}
                            e rápido manuseio, feita originalmente para uso pessoal em ações de pequeno alcance.
                        </span>
                    </div>
                    <Image
                        className="w-64 h-52 left-[97.60px] top-[58.55px] absolute origin-top-left"
                        src={Pistola}
                        alt="Pistola"
                    />
                    <div className="left-[99px] top-[33px] absolute text-white text-5xl font-normal leading-loose">
                        PISTOLA
                    </div>
                    <div className="w-60 h-36 left-[336px] top-[25px] absolute">
                        <div className="left-[77px] top-0 absolute text-white text-3xl font-normal leading-loose">
                            Cano curto
                        </div>
                        <div className="left-[77px] top-[30px] absolute text-white text-3xl font-normal leading-loose">
                            Boa empunhadura
                        </div>
                    </div>
                </div>
        </div>
    );
};

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
