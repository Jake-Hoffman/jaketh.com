import Link from 'next/link';

function getInfo() {
    return [
      { id: 'art-design', title: 'Art and Design' },
      { id: 'software-development', title: 'Software Developement' },
      { id: 'web-developement', title: 'Web Development' }
    ];
}
  
const PostLink = ({ post }) => (
<div>
    
    <div>
        {/* <img src ="https://storage.cloud.google.com/jaketh/resources/Monster.jpg" /> */}
        <div>

        </div>
        <div>
            <Link href="/p/[id]" as={"/p/${post.id}"} class="basic-link info-box-link">
                <a>{post.title}</a>
            </Link>
        </div>
    </div>

    <style jsx>{`

    div{
        display: flex;
        margin-top: 64px;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: white;
        // font-family: 'Montserrat', sans-serif;
        font-family: 'Roboto', 'Arial';
        font-size: 2em;
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
                <PostLink key={post.id} post={post} />
                ))}
            </div>
        </div>
        <style jsx>{`
        #container-inner {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            margin-top: 16px;
            position: relative;

            color: white;
        }

        #container-outer {
            top: 95vh;

            position: relative;
            height: 500px;
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