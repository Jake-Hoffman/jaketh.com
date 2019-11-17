const NameSlide = () => (

        <div>
        <div id="main-image">
            <img src="https://storage.cloud.google.com/jaketh/resources/Bigfoot.jpg" alt="Bigfoot" />
            <div id="main-image-filter">&nbsp;
                <h1>Jake Hoffman</h1>
            </div>
        </div>
        <div id="spacer"></div>
        <style jsx>{`
            #spacer {
                position: relative;
                height: 100vh:
            }

            h1,
            a {
            font-family: 'Arial';
            }

            h1 {
            font-size: 4em;
            top: 40%;
            position: absolute;
            left: calc( 50% - 250px );
            width: 500px;
            display: flex;
            justify-content: center;
            }

            ul {
            padding: 0;
            }

            li {
            list-style: none;
            margin: 5px 0;
            }

            a {
            text-decoration: none;
            color: blue;
            }

            a:hover {
            opacity: 0.6;
            }

            img {
            display: relative;
            margin: 0;
            position: fixed;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            color: white;
            object-fit: cover;
            background-position: bottom;
            background-attachment: fixed;
            }

            #main-image {
            position: relative;
            top 0;
            }

            #main-image-filter {
            color: white;
            width: 100%;
            height: 95vh;
            position: absolute;
            top: 0;
            background-color: rgba(71, 84, 132, 0.49);
        }
        `}</style>
    </div>
);

export default NameSlide;