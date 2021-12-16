import PhonesSVG from '../images/illustration-phones.svg';

const Main = () => {
  return (
    <main className="main">

      <section className="main__first">
        <div className="section">
          <h2 className="section__title">Designed for the future</h2>
          <div className="section__text">
            <h3 className="section__subtitle">Introducing an extensible editor</h3>
            <p className="section__paragraph">
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
            </p>

            <h3 className="section__subtitle">Robust content management</h3>
            <p className="section__paragraph">
            Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
        </div>
      </section>

      <section className="main__second">
        <div className="phones-div">
          <img src={PhonesSVG} alt="" />
        </div>
        <div className="section">
          <h2 className='section__subtitle'>State of the Art Infrastructure</h2>
          <p className='section__paragraph'>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </section>

      <section className="main__third">
        <div className="section">
          <h2 className='section__subtitle'>Free, open, simple</h2>
          <p className='section__paragraph'>
            Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
          </p>

          <h2 className='section__subtitle'>Powerful tooling</h2>
          <p className='section__paragraph'>
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Main
