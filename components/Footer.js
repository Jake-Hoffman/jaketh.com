import Link from 'next/link';

const Footer = () => (

    <div>
        <div id="bottom-nav">
            <div id="bottom-nav-item-1" className="bottom-nav-items">  
                <p>©2019 Jacob Hoffman</p>      
            </div>
            <div id="bottom-nav-right">
                <div id="bottom-nav-item-2" className="bottom-nav-items">
                        <a href="https://www.instagram.com/jakethoffman/">Social Media</a>
                </div>
                <div id="bottom-nav-item-3" className="bottom-nav-items">
                    <Link href="#">
                        <a>Contact&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                    </Link>
                </div>     
                <div id="bottom-nav-item-3" className="bottom-nav-items">
                    <Link href="#">
                        <a>Resources&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                    </Link>
                </div>
            </div>
        </div>
        <style jsx>{`

        p, a {
            font-family: 'Roboto', sans-serif;
            font-size: 8pt;
            color: white;
            text-decoration: none;
            font-weight: 0;
        }

        p {
            position: relative;
            top: -10px;
        }

        #bottom-nav-right {
            display: inline-flex;
            flex-direction: row-reverse;
        }

        #bottom-nav {
            background: rgb(71, 84, 232);
            background: -webkit-linear-gradient(right, rgb(71, 84, 232), rgb(183, 71, 232));
            background: -o-linear-gradient(left, rgb(183, 71, 232), rgb(71, 84, 232));
            background: -moz-linear-gradient(left, rgb(183, 71, 232), rgb(71, 84, 232));
            background: linear-gradient(to left, rgb(183, 71, 232), rgb(71, 84, 232));
            
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 16px;
            width: 100%;
            height: 12px;
            position: fixed;
            bottom: 0;

            z-index: 0;
            margin-right: 50px;

            display: inline-flex;
            justify-content: space-between;
            overflow: hidden;
        }

        .bottom-nav-items {
            display: inline-flex;
        }
        
        // #bottom-nav-item-1 {
        //     padding-left: 16px;
        //     float: left;
            
        // }
        
        #bottom-nav-item-2 {
            padding-right: 32px;    
            float: right;
        }
        
        // #bottom-nav-item-3 {
        //     float: right;
        // }
        `}</style>
    </div>
    

);

export default Footer;