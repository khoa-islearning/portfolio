import "@/styles/components/Navbar.sass";
export default function Navbar() {
    return (
        <div className="navbar">
            <a href="/#" className="nav-item first-child">
                Home
            </a>
            <a href="/#about" className="nav-item">
                About Me
            </a>
            <a href="/" className="nav-item">
                Works
            </a>
            <a href="/" className="nav-item">
                Blog
            </a>
            <a href="/" className="nav-item">
                Contact Me
            </a>
        </div>
    );
}
