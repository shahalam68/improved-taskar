
  const tasks = [
    {
      "id": crypto.randomUUID(),
      "title": "Learn React",
      "description": "I want to learn react such then i can treat it like a slave and make it do whatever i want to do",
      "tags": ["web", "react", "js"],
      "priority": "high",
      "isFavorite": false
    },
    {
      "id": crypto.randomUUID(),
      "title": "Build a Portfolio Website",
      "description": "I aim to showcase my skills and projects with an impressive portfolio website.",
      "tags": ["web", "portfolio", "design"],
      "priority": "high",
      "isFavorite": false
    },
    {
      "id": crypto.randomUUID(),
      "title": "Master Node.js",
      "description": "I want to become proficient in Node.js to build scalable and efficient server-side applications.",
      "tags": ["web", "nodejs", "javascript"],
      "priority": "high",
      "isFavorite": false
    },
    {
      "id": crypto.randomUUID(),
      "title": "Explore Data Visualization with D3.js",
      "description": "I'm interested in creating interactive and engaging data visualizations using D3.js library.",
      "tags": ["web", "d3.js", "visualization"],
      "priority": "medium",
      "isFavorite": false
    },
    {
      "id": crypto.randomUUID(),
      "title": "Learn Full-Stack Development",
      "description": "My goal is to become proficient in both front-end and back-end development to create fully functional web applications.",
      "tags": ["web", "full-stack", "javascript"],
      "priority": "high",
      "isFavorite": false
    },
    {
      "id": crypto.randomUUID(),
      "title": "Deploy a React Native App",
      "description": "I want to deploy my React Native application to both iOS and Android platforms for real-world usage.",
      "tags": ["mobile", "react-native", "deployment"],
      "priority": "high",
      "isFavorite": false
    }
  ]

  function getAllTasks(){
    return tasks;
}
export { getAllTasks };

