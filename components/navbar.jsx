
import logoImage from '../public/images/logoTSC.png';
import botaoFace from '../public/images/Facebookicon.png';
import botaoInsta from '../public/images/Instagramicon.png';

import Link from 'next/link';
const Navbars = () => {
  return (
    <>
      <hr className="border-t" />
      <nav className="bg-gradient-to-b from-gray-700 to-gray-900 p-4">
        <div className="container mx-auto">
          <div className='flex w-full'>
            {/* Logo */}
            <div className="flex justify-center items-center p-5">
              <Link href="/home">
                <img src='../public/images/logoTSC.png' className="h-10" />
              </Link>
            </div>
            <div className='w-full flex flex-col'>
            {/* Navbar Items */}
            <div className='pl-20 p-3'>
                <hr className="px-20" />
            </div>
              <div className="flex justify-around items-center space-x-4 w-full pl-20">
                <Link href="/home">
                  <p className="text-white">Home</p>
                </Link>
                <Link href="/services">
                  <p className="text-white">Serviços</p>
                </Link>
                <Link href="/cursos">
                  <p className="text-white">Cursos</p>
                </Link>
                <Link href="/contact">
                  <p className="text-white">Contato</p>
                </Link>
                <Link href="/faq">
                  <p className="text-white">FAQ</p>
                </Link>
                <Link href="/sejaSocio">
                  <p className="text-white">Seja Sócio</p>
                </Link>
              </div>
              <div className='pl-20 p-3'>
                <hr className="px-20" />
              </div>
            </div>
            <div className='flex items-center pr-10'>
                <Link href="/botaoFace">
                  <img src={botaoFace} className="h-10" />
                </Link>
                <Link href="/botaoInsta">
                  <img src={botaoInsta} className="h-10" />
                </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="w-[1440px] h-[110px] relative bg-gradient-to-b from-neutral-700 to-neutral-900">
    <div className="w-[181px] h-[111px] left-[39px] top-[-1px] absolute justify-center items-center inline-flex">
        <img className="w-[181px] h-[111px]" src="https://via.placeholder.com/181x111" />
    </div>
    <img className="w-[173px] h-[110px] left-[1220px] top-0 absolute" src="https://via.placeholder.com/173x110" />
    <div className="w-[672px] h-[51px] left-[256px] top-[25px] absolute">
        <div className="w-[817px] h-[0px] left-0 top-0 absolute border border-white"></div>
        <div className="w-[817px] h-[0px] left-0 top-[51px] absolute border border-white"></div>
        <div className="left-[18px] top-[18px] absolute text-center text-white text-xl font-bold">Home</div>
        <div className="left-[135px] top-[18px] absolute text-center text-white text-xl font-bold">Serviços</div>
        <div className="left-[289px] top-[18px] absolute text-center text-white text-xl font-bold">Cursos</div>
        <div className="left-[438px] top-[18px] absolute text-center text-white text-xl font-bold">Contato</div>
        <div className="left-[590px] top-[18px] absolute text-center text-white text-xl font-bold">FAQ</div>
        <div className="left-[696px] top-[18px] absolute text-center text-white text-xl font-bold">Seja Sócio</div>
    </div>
    <img className="w-[42px] h-[42px] left-[1106px] top-[29px] absolute" src="https://via.placeholder.com/42x42" />
    <img className="w-[42px] h-[42px] left-[1167px] top-[29px] absolute" src="https://via.placeholder.com/42x42" />
</div>
  )
}
export default Navbar;

