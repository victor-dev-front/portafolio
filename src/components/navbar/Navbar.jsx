import logo from '../../assets/img/logo.png';


const Navbar = () => {
    return ( 
        <>
            <nav>
                <a href="/">
                    <img src={logo} alt="logotipo"/>
                </a>
            </nav>
        </>
     );
}
 
export default Navbar;