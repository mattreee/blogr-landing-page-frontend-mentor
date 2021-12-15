import Logo from '../images/logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={Logo} alt="" />

      <div className='footer__column'>
        <h2>Product</h2>
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div className='footer__column'>
        <h2>Company</h2>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className='footer__column'>
        <h2>Connect</h2>
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
