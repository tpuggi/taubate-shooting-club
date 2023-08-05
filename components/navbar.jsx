


function NavBar() {
    return (
        <nav>
            <Logo />

            <NavItems />

            <Facebook />

            <Instagram />
        </nav>
    )
}

import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <p className="text-white text-lg font-semibold">Logo</p>
          </Link>
          {/* Navbar Items */}
          <div className="hidden lg:flex space-x-4">
            <Link href="/">
              <p className="text-white">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-white">About</p>
            </Link>
            <Link href="/services">
              <p className="text-white">Services</p>
            </Link>
            <Link href="/contact">
              <p className="text-white">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;