import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="bpflix-nav-content">
                    <h1>BPFlix - Movie Catalog</h1>
                    <a href="https://github.com/brennopereiradev/_BPFlix" target="_blank" rel="noreferrer">
                        <div className="bpflix-contact-container">
                            <GithubIcon />
                            <p className="bpflix-contact-link">/BPFlix</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;