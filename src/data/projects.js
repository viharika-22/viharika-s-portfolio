import trello from '../assets/trello-img.png'
import randQue from '../assets/rand-que.png'
const projects = [
  {
    id: 1,
    title: "Trello Clone",
    description: "I developed a Trello clone that replicates essential features like creating boards, adding lists within boards, and adding cards within those lists. The app also allows users to search for boards using a top search bar, making it easier to manage tasks and projects. Built with a focus on simplicity and usability.",
    url: "https://github.com/viharika-22/trelloClone/tree/main",
    image: trello, 
    techStack: ['React', 'Redux', 'Toolkit', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    title: "Random Question Picker",
    description: "Struggling to pick a random question for my daily coding practice was a challenge. To solve this, I built an app that helps you easily select coding questions based on difficulty. Now, every day, I can randomly pick a question to practice, helping me stay consistent and improve my skills.",
    url: "https://github.com/viharika-22/randomQuestionPicker",
    image: randQue,
    techStack: ['React', 'JavaScript', 'Custom Randomization Logic']
  },
  // Add more projects here
];

export default projects;
