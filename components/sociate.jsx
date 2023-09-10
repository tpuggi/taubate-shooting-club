import Image from "next/image";
import Link from "next/link";
import arma from "../public/images/armaPrin.png";

function sociate () {
        return (
            <div className="">
                <div className="text-white">
                    <h1 className="pt-32 text-[50px] text-center bebas_neue-font">SEJA SÓCIO DO TAUBATÉ SHOOTING CLUB</h1>
                    <h3 className="text-[25px] text-red-800 text-center montserrat-font">Defesa, Esporte ou Lazer – Pratique em segurança com profissionais qualificados.</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 pb-20 pt-10">
                    <div className="pl-14">
                        <div className="pb-4">
                            <Image src={arma} alt="foto da arma" />
                        </div>
                        <div className="text-white text-[19px] origin-top-left bg-neutral-900 mt-1 p-10 pb-18">
                            <p className="mb-4 inter-font">Uma estrutura moderna e funcional, que facilita a vida de quem quer praticar esporte, treinar defesa ou melhorar habilidades técnicas. O Taubaté Shooting Club está situado em local privilegiado, localizado no Shopping The Place (Via Auto Shopping), com amplo estacionamento, fácil acesso e segurança.</p> 
                            <p className="mb-4 inter-font">Seja Sócio! O Taubaté Shooting Club é uma excelente opção para a família. Economize tempo e venha até o Clube em posse de seus documentos originais (RG e CPF) e um comprovante original de endereço!</p>
                        </div>
                    </div>
                    <div>
                        <div className="ml-2 pl-8 pr-10">
                            <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 text-white">
                                <p className="text-[32px] bebas_neue-font text-center">Benefícios de ser associado:</p>
                            </div>
                            <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-18 text-white">
                                <div className="text-[19px]">
                                    <p className="mb-4 inter-font">• Uso gratuito do estande de tiro com hora marcada. Sócio não espera para atirar!</p>
                                    <p className="mb-4 inter-font">• Acesso gratuito e irrestrito ao acervo do clube – armas e equipamentos diferenciados.</p>
                                    <p className="mb-4 inter-font">• Descontos exclusivos em competições, cursos, produtos e munições.</p>   
                                    <p className="mb-4 inter-font">• Participação em treinamentos e cursos exclusivos.</p>
                                    <p className="mb-4 inter-font">• Direito de trazer um convidado (CAC) por mês, gratuitamente.</p>
                                    <p className="mb-4 inter-font">• Assessoria especializada para aquisição de armas, obtenção de porte de arma e registro de Colecionador, Atirador e Caçador no Exército (CR).</p>
                                    <p className="mb-4 inter-font">• Desconto na Aquisição de Armas.</p>
                                    <p className="mb-4 inter-font">• Descontos progressivos (Bônus) na renovação e apresentação de novos sócios.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white pl-12 pr-12 items-center text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-9 pb-20">
                    <div>
                        <div className="origin-top-left bg-gradient-to-b from-red-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3 text-white">
                                <p className="text-[32px] bebas_neue-font text-center">Plano 01:</p>
                        </div>
                        <div className="origin-top-left mt-1 p-10 pb-18 text-white bg-red-900">
                                <div className="text-[19px]">
                                    <p className="mb-4 inter-font">• Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequuntur eos ratione facere eveniet omnis accusantium, aut dolores assumenda nulla incidunt, neque ea quo culpa accusamus debitis repellat repellendus. Facilis?</p>
                                    <Image src={arma} alt="foto da arma" />
                                    <button
                                    className="bg-red-800 shadow border border-black border-opacity-20 text-center text-3xl pr-16 pl-16 pt-4 pb-4 font-extrabold hover:shadow-2xl mt-8"
                                    style={{
                                    fontWeight: "bold",
                                    fontSize: "25px",
                                    border: "2px solid white",
                                    fontFamily: "neue_montreal",
                                    }}
                                >
                                    SAIBA MAIS
                                </button>
                                </div>
                        </div>
                    </div>
                    <div>
                        <div className="origin-top-left bg-gradient-to-b from-red-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3 text-white">
                                <p className="text-[32px] bebas_neue-font text-center">Plano 02:</p>
                        </div>
                        <div className="origin-top-left bg-red-900 mt-1 p-10 pb-18 text-white">
                                <div className="text-[19px]">
                                    <p className="mb-4 inter-font">• Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam distinctio aspernatur vel quasi, soluta molestiae quae placeat sed nesciunt obcaecati quam, quaerat eveniet qui inventore hic maiores, sapiente neque?</p>
                                    <Image src={arma} alt="foto da arma" />
                                    <button
                                    className="bg-red-800 shadow border border-black border-opacity-20 text-center text-3xl pr-16 pl-16 pt-4 pb-4 font-extrabold hover:shadow-2xl mt-8"
                                    style={{
                                    fontWeight: "bold",
                                    fontSize: "25px",
                                    border: "2px solid white",
                                    fontFamily: "neue_montreal",
                                    }}
                                >
                                    SAIBA MAIS
                                </button>
                                </div>
                        </div>
                    </div>
                    <div>
                        <div className="origin-top-left bg-gradient-to-b from-red-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3 text-white">
                                <p className="text-[32px] bebas_neue-font text-center">Plano 03:</p>
                        </div>
                        <div className="origin-top-left bg-red-900 mt-1 p-10 pb-18 text-white">
                                <div className="text-[19px]">
                                    <p className="mb-4 inter-font">• Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tenetur, cumque obcaecati iure molestiae laborum veritatis rem aut perspiciatis, soluta reiciendis optio. Rerum voluptates quos autem soluta commodi eos quidem.</p>
                                    <Image src={arma} alt="foto da arma" />
                                    <button
                                    className="bg-red-800 shadow border border-black border-opacity-20 text-center text-3xl pr-16 pl-16 pt-4 pb-4 font-extrabold hover:shadow-2xl mt-8"
                                    style={{
                                    fontWeight: "bold",
                                    fontSize: "25px",
                                    border: "2px solid white",
                                    fontFamily: "neue_montreal",
                                    }}
                                >
                                    SAIBA MAIS
                                </button>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
);
};
export default sociate;
