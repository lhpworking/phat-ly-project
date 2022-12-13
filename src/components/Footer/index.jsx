import "./footer.scss"

export default function Footer() {

  return (
    <footer>
      <div className="container-fluid">
        <div className="author">
          <p>Phat Ly</p>
          <p>Frontend developer</p>
        </div>
        <ul className="links">
          <li><a className="link" href="https://www.frontendmentor.io/profile/lhpworking" target="_blank">Frontend Mentor</a></li>
          <li><a className="link" href="https://github.com/lhpworking" target="_blank">Github</a></li>
          <li><a className="link" href="https://www.linkedin.com/in/lhngpht/" target="_blank">Linkedin</a></li>
        </ul>
        <div className="copyright">
          <p>&copy; Designed & Developed by Phat Ly.</p>
          <p>All rights reserved 2022.</p>
        </div>

      </div>

    </footer >

  )
}
