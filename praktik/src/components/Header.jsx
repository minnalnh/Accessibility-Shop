import Settings from './Settings';

const Header = () => {
    return (
        <div className="header">
            <h1>Clothing.com</h1>
            <p>Find Your Own Style</p>
            <hr></hr>

            <div>
                <Settings />
            </div>
            
            <nav>
                <ul className="navbar">
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>

        </div>

    )
}

export default Header;