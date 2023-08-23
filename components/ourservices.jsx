import SomeImage from "../public/images/SomeImage.png";

import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
    return (
        <div className="text-white mt-32">
                <p className="text-[80px] neue_montreal-font pl-10">
                Nossos Serviços
                </p>
                <p className="text-[25px] pl-10 pt-5">
                Realizamos diversos <strong>cursos de capacitação</strong> com convênio para aplicar os <br></br>testes exigidos para a <strong>aquisição</strong> de armas de fogo, <strong>renovação</strong> de registros <br></br>ou <strong>expedição</strong> de Certificado de Registro de CAC (Colecionador - Atirador ou <br></br> Caçador).
                </p>
                <div className="grid grid-cols-2 gap-3 pb-20">
                        <div className="mr-2 pl-10 pt-10">
                        <Image
                                src={SomeImage}
                            />
                        </div>
                        <div className="ml-2 pr-10 pt-10">
                                <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
                                        <p className="text-[32px]">Manutenção de Armamentos</p>
                                </div>
                                <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-28">
                                        <p className="text-[22px]">O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a <a href="https://www.cammoarts.com.br/">Cammo Arts Custom</a>.</p>
                                </div>
                        </div>
                        <div className="ml-2 pl-10 pt-10">
                                <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
                                        <p className="text-[32px]">Manutenção de Armamentos</p>
                                </div>
                                <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-28">
                                        <p className="text-[22px]">O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a <a href="https://www.cammoarts.com.br/">Cammo Arts Custom</a>.</p>
                                </div>
                        </div>
                        <div className="mr-2 pl-20 pt-10">
                        <Image
                                src={SomeImage}
                            />
                        </div>
                        <div className="mr-2 pl-10 pt-10">
                        <Image
                                src={SomeImage}
                            />
                        </div>
                        <div className="ml-2 pr-10 pt-10">
                                <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
                                        <p className="text-[32px]">Manutenção de Armamentos</p>
                                </div>
                                <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-28">
                                        <p className="text-[22px]">O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a <a href="https://www.cammoarts.com.br/">Cammo Arts Custom</a>.</p>
                                </div>
                        </div>
                        <div className="ml-2 pl-10 pt-10">
                                <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
                                        <p className="text-[32px]">Manutenção de Armamentos</p>
                                </div>
                                <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-28">
                                        <p className="text-[22px]">O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a <a href="https://www.cammoarts.com.br/">Cammo Arts Custom</a>.</p>
                                </div>
                        </div>
                        <div className="mr-2 pl-20 pt-10">
                        <Image
                                src={SomeImage}
                            />
                        </div>
                        <div className="mr-2 pl-10 pt-10">
                        <Image
                                src={SomeImage}
                            />
                        </div>
                        <div className="ml-2 pr-10 pt-10">
                                <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
                                        <p className="text-[32px]">Manutenção de Armamentos</p>
                                </div>
                                <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-28">
                                        <p className="text-[22px]">O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a <a href="https://www.cammoarts.com.br/">Cammo Arts Custom</a>.</p>
                                </div>
                        </div>
                </div>
        </div>
    );
};

export default OurServices;
