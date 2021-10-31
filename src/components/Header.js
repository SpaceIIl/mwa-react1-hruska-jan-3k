import './Header.css';

function Header() {
  return (
    <div className="bc">
        <div className="header">
            <div className="header-left">
                <p>Logo</p>
                <p>Home</p>
                <p>About</p>
                <p>Portfolio</p>
            </div>
            <div className="header-right">
                <p>Contact</p>
            </div>
        </div>
    </div>
  );
}

export default Header;