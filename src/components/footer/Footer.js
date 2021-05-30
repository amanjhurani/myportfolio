import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
        <div className="Footer-background-upper">
            <div className="Footer-content">
                <ul>
                    <li>Scroll to top</li>
                    <li>Blogs</li>
                    <li>Project</li>
                </ul>
            </div>
            <div className="Footer-content-two">
               <a href="https://drive.google.com/file/d/1j-sKX3eK5IQQOXcw0sXtlW_za-H2MM8y/view?usp=sharing" target="_blank"><button className="Footer-resume-button">
                Resume &nbsp;
                <i className="fa fa-file"></i>
               </button></a>
            </div>
        </div>
        <div className="Footer-background-lower">
            <p>@amanjhurani</p>
        </div>
    </div>
  );
}

export default Footer;
