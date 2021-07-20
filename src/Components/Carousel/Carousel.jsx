import { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './carousel.scss'

export const Carousel = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const data = [
    {
      id: "0",
      title: "Random Meal Generator",
      github: 'https://github.com/huirayj/random-meal-generator',
      desc:
        "A site that uses TheMealDB and TheCocktailDB API's to create a random pairing of recipes of each.",
      img: 'assets/images/Carousel/random-meal-generator.jpg',
      alt: 'Random meal generator site',
      deployed: 'https://huirayj.github.io/random-meal-generator/'
    },
    {
      id: "1",
      title: "Forum Friends",
      github: 'https://github.com/huirayj/forum-friends',
      desc:
        "A messaging site made with Handlebars.js, Sequelize, and Express server.",
      img:
        "assets/images/Carousel/forum-friends.png",
      alt: 'Forum Friends site',
      deployed: 'https://forum-friends.herokuapp.com/'
    },
    {
      id: "2",
      title: "Employee Tracker",
      github: 'https://github.com/huirayj/employee-tracker',
      desc: 'A CLI app that manages employees.',
      img:
        "assets/images/Portfolio/cli/employee-tracker.png",
      alt: 'Employee Tracker demo',
      deployed: 'https://github.com/huirayj/employee-tracker'
    },
    {
      id: "3",
      title: "Team Profile Generator",
      github: 'https://github.com/huirayj/team-profile-generator',
      desc: 'A CLI app that generates cards of team member information.',
      img: "assets/images/Portfolio/cli/team-profile-generator.png",
      alt: 'Team member cards.',
      deployed: 'https://github.com/huirayj/team-profile-generator'
    },
    {
      id: "4",
      title: "Fitness Tracker",
      github: 'https://github.com/huirayj/workout-tracker',
      desc: 'A site that logs cardio and resistance workouts.',
      img: "assets/images/Portfolio/server/fitness-tracker.png",
      alt: 'Two graphs.',
      deployed: 'https://workout-tracker-huirayj.herokuapp.com/'
    },
    {
      id: "5",
      title: "Budget Tracker",
      github: 'https://github.com/huirayj/budget-tracker',
      desc: "A budget tracking site with PWA design in mind.",
      img: "assets/images/Portfolio/database/budget-tracker.png",
      alt: 'A line chart.',
      deployed: 'https://budget-tracker-huirayj.herokuapp.com/'
    },
    {
      id: "6",
      title: "TBD",
      github: 'https://github.com/huirayj',
      desc:
        "Work In Progress.",
      img:
        "assets/images/Carousel/work-in-progress.jpg",
      alt: 'Work in Progress.',
      deployed: 'https://github.com/huirayj'
    },
  ];

  const handleClick = dir => {
    (dir === 'right')
      ? setCurrSlide((currSlide < data.length) ? currSlide + 1 : 0)
      : setCurrSlide((currSlide > 0) ? currSlide - 1 : 2);
  };

  return (
    <div className="carousel" id="carousel">
      <div
        className="slider"
        style={{ transform: `translateX(-${currSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <a href={d.github} target="_blank" rel="noopener noreferrer">
                    <h2>{d.title}</h2>
                  </a>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <a href={d.deployed} target="_blank" rel="noopener noreferrer">
                  <img
                    src={d.img}
                    alt={d.alt}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ChevronLeftIcon className='icon left' onClick={() => handleClick()} />
      <ChevronRightIcon className='icon right' onClick={() => handleClick('right')} />
    </div>
  )
}

export default Carousel