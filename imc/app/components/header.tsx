import logo from '../assets/powered.png';
import Image from 'next/image';
const Header = () => {
    return (
        <header className=' '>
            <Image src={logo} alt="Logo da calculadora de IMC" width={150} />
        </header>
    );
}
export default Header;