import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

class Project {
    constructor(title, tags, description, image) {
    this.title = title;
    this.tags = tags;
    this.description = description;
    this.image = image;
    }
}

function addToProjects(title, tags, description, image, projects) {
    var project = new Project(title, tags, description, image);
    projects.push(project);
}

function getAllProjects() {

    var projects = [];

    addToProjects("Personal Website", ["projects", "web-development", "portfolio"], 
    "The personal website of Jacob Hoffman",
    "URL", projects);
    addToProjects("Game of Life", ["projects", "software-development"], 
    "A recreation of Conways \"Game of Life\" made in Java using Swing",
    "URL", projects);
    return projects;
}

const ProjectPost = ({post}) => (
    <div>
        <h1>{post.title}</h1>
    </div>
);

const ProjectGuide = () => {

    var projects = getAllProjects();


    const router = useRouter();
    const { id } = router.query;
    projects = projects.filter(p => (p.tags.indexOf(id) > -1));

    var pageDescription;

    switch (id) {
        case "projects":
          pageDescription = {
            title: "All Projects",
            description: "A comprehensive list of all projects by Jake Hoffman"
          }
          break;
        case "software-development":
            pageDescription = {
              title: "Software Based Projects",
              description: "All software developed by Jake Hoffman"
            }
          break;
        case "web-developement":
            pageDescription = {
              title: "Web Based Projects",
              description: "All projects based on the web by Jake Hoffman"
            }
          break;
        case "portfolio":
            pageDescription = {
              title: "Design Based Projects",
              description: "All design based projects including websites by Jake Hoffman"
            }
          break;
        case "art-design":
            pageDescription = {
              title: "Illustration and Logo Design Projects",
              description: "All purely creative projects by Jake Hoffman"
            }
          break;
        default: 
        pageDescription = {
          title: "All Projects",
          description: "A comprehensive list of all projects by Jake Hoffman"
        }
        break;
    }

  return (
    <Layout>
      <div>
        <h1 id="title">{pageDescription.title}</h1>
        <p id="description">{pageDescription.description}</p>
        {projects.map(post => (
          <ProjectPost post={post} />
          ))}
      </div>
      <style jsx>{`
      #title {
        color: white;
        font-size: 2em;
        font-family: 'Roboto', sans-serif;

        padding-left: 32px;
        padding-top: 32px;
      }

      #description {
        color: white;
        font-size: 1em;
        font-family: 'Roboto', sans-serif;
        padding-left: 32px;
      }
      `}</style>
    </Layout>
  );
};

// ProjectGuide.getInitialProps = async () => {
//   return {};
// }

export default ProjectGuide;