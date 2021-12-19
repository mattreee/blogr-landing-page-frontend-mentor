import Logo from '../images/logo.svg';
import ArrowLight from '../images/icon-arrow-light.svg';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navigation">
        <img className='header__logo' src={Logo} alt="" />
        <div className="header__main">
          <div className="header__links">
            <div className="header__menu"> {/* Product */}
              <button>Product <img src={ArrowLight} alt="" /></button>
              <div className="header__options">
                <ul>
                  <li>Overview</li>
                  <li>Pricing</li>
                  <li>Marketplace</li>
                  <li>Features</li>
                  <li>Integrations</li>
                </ul>             
              </div>
            </div>
            <div className="header__menu"> {/* Company */}
              <button>Company <img src={ArrowLight} alt="" /></button>
              <div className="header__options">
                <ul>
                  <li>About</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ul>             
              </div>
            </div>
            <div className="header__menu">{/* Connect */}
              <button>Connect <img src={ArrowLight} alt="" /></button>
              <div className="header__options">
                <ul>
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>LinkedIn</li>
                </ul>             
              </div>
            </div>
          </div>

          <div className="header__user">
            <ul className='header__ul'>
              <a className='header__login' href="https://github.com/mattreee" target='_blank' title='This will redirect you to my GitHub profile' rel="noreferrer">Login</a>
              <a className='header__signup' href="https://github.com/mattreee" target='_blank' title='This will redirect you to my GitHub profile' rel='noreferrer'>Sign Up</a>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="hero__buttons">
          <button className='hero__start'>Start for Free</button>
          <button className='hero__more'>Learn More</button>
        </div>
      </div>
    </header>
  )
}

export default Header
