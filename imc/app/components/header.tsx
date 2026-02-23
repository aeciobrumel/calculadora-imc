import logo from '../assets/powered.png';
import Image from 'next/image';
const Header = () => {
    return (
        <header className='flex w-full'>
            <Image src={logo} className='w-auto h-auto' alt="Logo da calculadora de IMC" />
        </header>
    );
}
export default Header;