import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (

    <div className = 'container'>
        <div>
            <Link href="/">
                <a style={linkStyle}>Jaketh.com</a>
            </Link>
            <Link href="/projects">
                <a style={linkStyle}>Projects</a>
            </Link>
            <Link href="/blog">
                <a style={linkStyle}>Blog</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </div>
        <div>
            <Link href="/contact">
                <a style={linkStyle}>Contact</a>
            </Link>
        </div>
        <style jsx>{`       

                .container {
                    padding-top: 30px;
                    padding-bottom: 30px;
                    padding-left: 10px;
                    padding-right: 10px;

                    z-index: 1000;

                    background: rgb(71, 84, 232);
                    background: -webkit-linear-gradient(right, rgb(71, 84, 232), rgb(183, 71, 232),);
                    background: -o-linear-gradient(left, rgb(183, 71, 232), rgb(71, 84, 232));
                    background: -moz-linear-gradient(left, rgb(183, 71, 232), rgb(71, 84, 232));
                    background: linear-gradient(to left, rgb(183, 71, 232), rgb(71, 84, 232));
                }

                div {
                    padding-left: 12px;
                    padding-right: 12px;

                    display: flex;
                    justify-content: space-between;
                }

                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: white;
                    font-family: 'Roboto', Arial, sans-serif;
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
    
    </div>

);

export default Header;