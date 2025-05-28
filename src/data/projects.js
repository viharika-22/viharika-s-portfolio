import trello from '../assets/trello-img.png'
import randQue from '../assets/rand-que.png'
const projects = [
  {
    id: 1,
    title: "Trello Clone",
    description: "I developed a Trello clone that replicates essential features like creating boards, adding lists within boards, and adding cards within those lists. The app also allows users to search for boards using a top search bar, making it easier to manage tasks and projects.",
    liveUrl: "https://viharika-22.github.io/trelloClone/", // Example live site URL
    githubUrl: "https://github.com/viharika-22/trelloClone/tree/main",
    image: trello,
    techStack: ['React', 'Redux', 'Toolkit', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    title: "Random Question Picker",
    description: "Built an app to randomly select coding questions by difficulty, helping improve skills with daily practice.",
    liveUrl: "https://codesandbox.io/p/sandbox/randomquestionpicker-5tn5w3",  // no live site
    githubUrl: "https://github.com/viharika-22/randomQuestionPicker",
    image: randQue,
    techStack: ['React', 'JavaScript', 'Custom Randomization Logic']
  },
];


export default projects;
