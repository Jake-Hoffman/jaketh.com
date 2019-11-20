import Link from 'next/link';

function getInfo() {
    return [
    { id: 'software-development', title: 'Software Developement', 
      imgURL: 'https://storage.cloud.google.com/jaketh/resources/MonsterSmallest.jpg', 
      info: 'Program design and development in C++, Java, and JavaScript using various frameworks and libraries'},
      { id: 'web-developement', title: 'Web Development', 
      imgURL: 'https://storage.cloud.google.com/jaketh/resources/FoodSmallest.jpg', 
      info: 'Program development for the web using JavaScript, CSS, HTML, and NoSQL, inlcuding use of various databases and online resources'},
      { id: 'art-design', title: 'Art and Design', 
      imgURL: 'https://storage.cloud.google.com/jaketh/resources/WormSmallest.jpg', 
      info: 'Logo design, conceptual art, and illustration using Adobe Photoshop, Adobe Illustrator, and traditional methods' },
    ];
}
  
const ProjectGroup = ({ post }) => (
<div>
    
    <div id="outer">
        <Link href="/p/[id]" as={`/p/${post.id}` } >
            <a>
                <div alt={post.info} id="inner-image" style={{backgroundImage: "url(" + post.imgURL + ")"}}>
                    <div id="inner-filter"></div>
                    <h1 id="title">{post.title}</h1> 
                    <p>
                        {post.info}
                    </p>
                </div>
            </a>
        </Link>
    </div>
    <div id="spacing"></div>

    <style jsx>{`
    #spacing {
        height: 2vh;
    }
    
    p {
        margin-left: 30%;;
        width: 40%;
        font-family: 'Roboto', 'Arial';
        font-size: 1em;
        z-index: 2;
        position: relative;
        top: -18vh;
        text-align: center;
    }

    #title {
        font-family: 'Roboto', 'Arial';
        z-index: 2;
        position: relative;
        top: -30vh;
        text-align: center;
    }

    #outer {
        z-index: 2;
        width: 100%;
        // height: 40vh;
        // background-color: rgb(68, 75, 76);
    }

    #inner-image {
        height: 50vh;
        width: 100%;
        z-index: 2;

        position: relative;
        // opacity: 0.65;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #inner-filter {
        z-index: 1;
        color: white;
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        background-color: rgba(71, 84, 132, 0.49);
    }

    a {
        text-decoration: none;
        color: white;
        // font-family: 'Montserrat', sans-serif;
        font-family: 'Roboto', 'Arial';
    }

    a:hover {
        opacity: 0.6;
    }

    `}</style>
</div>
);

const Abilities = () => (
    <div>
        <div id="container-outer">
            <div id="container-inner">
                {getInfo().map(post => (
                <ProjectGroup key={post.id} post={post} />
                ))}
            </div>
        </div>
        <style jsx>{`
        #container-inner {
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            margin-top: 2vh;
            position: relative;

            color: white;
        }

        #container-outer {
            position: relative;
            height: auto;
            width: 100%;
            z-index: 1;

            display: flex;
            justify-content: center;

            background-color: rgb(39, 42, 43);
        }
        `}</style>
    </div>
);

export default Abilities;