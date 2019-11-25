class Project {
    constructor(title, tags, description, image, page) {
    this.title = title;
    this.tags = tags;
    this.description = description;
    this.image = image;
    this.page = page;
    }
}

function addToProjects(title, tags, description, image, projects, page) {
    var project = new Project(title, tags, description, image, page);
    projects.push(project);
}

const getAllProjects = () => {

    var projects = [];

    addToProjects("Personal Website", ["projects", "web-development", "portfolio"], 
    "The personal website of Jacob Hoffman",
    "https://storage.cloud.google.com/jaketh/resources/BigfootSmaller.jpg", projects,
    <div>hello</div>
    );

    addToProjects("Game of Life", ["projects", "software-development"], 
    "A recreation of Conways \"Game of Life\" made in Java using Swing",
    "https://storage.cloud.google.com/jaketh/resources/BetterGameOfLife.png", projects,
    <div>hello</div>
    );

    addToProjects("Game of Life", ["projects", "web-development"], 
    "A recreation of Conways \"Game of Life\" made in Java using Swing",
    "https://storage.cloud.google.com/jaketh/resources/BirdWithArms.jpg", projects,
    <div>hello</div>
    );

    addToProjects("Game of Life", ["projects", "software-development"], 
    "A recreation of Conways \"Game of Life\" made in Java using Swing",
    "https://storage.cloud.google.com/jaketh/resources/FoodSmallest.jpg", projects,
    <div>hello</div>
    );

    addToProjects("Game of Life", ["projects", "software-development"], 
    "A recreation of Conways \"Game of Life\" made in Java using Swing",
    "https://storage.cloud.google.com/jaketh/resources/MonsterSmallest.jpg", projects,
    <div>hello</div>
    );

    addToProjects("Game of Life", ["projects", "software-development"], 
    "A recreation of Conways \"Game of Life\" made in Java using Swing",
    "https://storage.cloud.google.com/jaketh/resources/FoodSmallest.jpg", projects,
    <div>hello</div>
    );

    addToProjects("Game of Life", ["projects", "art-design"], 
    "A recreation of Conways \"Game of Life\" made in Java using Swing",
    "https://storage.cloud.google.com/jaketh/resources/FoodSmallest.jpg", projects,
    <div>hello</div>
    );

    return projects;
}

export default getAllProjects;