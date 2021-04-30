/** @format */

export const projectData = [
  {
    name: 'League Stats',
    image: process.env.PUBLIC_URL + '/images/league-stats.png',
    description: `Inspired by my love for gaming I decided to make an app using
    the Riot API for League of Legends. This app displays various
    user information from ranked info, mastery info, and details
    about match history.`,
    tech: `React, Redux, Express.js, Node.js`,
    note: `This project is still in progress. A working prototype can
    be found on the site link.`,
    link: `https://league-stats.com/`,
    github: `https://github.com/dspark410/league-of-legends-app`,
  },
  {
    name: 'Covid-19 Tracker',
    image: process.env.PUBLIC_URL + '/images/covidtracker.png',
    description: `In light of the situation in 2020 and the Coronavirus, I
    decided to make a Covid-19 tracker that displays live data for
    the world and each country.`,
    tech: `React, React-Leaflet, Chart.js, Bootstrap`,
    note: null,
    link: `https://main.d3tcy20w66t5z5.amplifyapp.com/`,
    github: `https://github.com/dspark410/covid-19-tracker`,
  },
  {
    name: 'React Portfolio',
    image: process.env.PUBLIC_URL + '/images/react-portfolio.png',
    description: `After graduating from bootcamp, I wanted to display all my
    projects with a new portfolio using React so here it is!`,
    tech: `React, Email.js, Material-UI, Bootstrap, AOS`,
    note: null,
    link: `https://david-s-park.com`,
    github: `https://github.com/dspark410/react-portfolio`,
  },
  {
    name: 'Hi Ho',
    image: process.env.PUBLIC_URL + '/images/hiho.png',
    description: `For my final group project during bootcamp, we created a job
    search application using ZipRecruiter's API to retrieve job
    listing info and utilized the Numbeo API to display cost of
    living data for the city searched.`,
    tech: `MongoDB, Express.js, React, Node.js, Material-UI`,
    note: `Due to ZipRecruiter API access expiration, the job searching
    functionality was edited to use the USAjobs API.`,
    link: `https://hi-ho-job-search.herokuapp.com/`,
    github: `https://github.com/dspark410/hi-ho-frontend`,
  },
  {
    name: 'Smasual',
    image: process.env.PUBLIC_URL + '/images/smasual.png',
    description: `For my second group project during bootcamp, we created a
    simple dating application that allowed the user to find a date
    by gender orientation, age preference, and location using
    zipcodes. The user could then contact a potential match via
    email.`,
    tech: `MySQL, HTML, CSS, JavaScript, Express.js, Node.js,
    Nodemailer, Firebase.`,
    note: `Due to a limited database of users there may be unavailable
    matches based on user specified criteria.`,
    link: `https://radiant-spire-72704.herokuapp.com/`,
    github: `https://github.com/dspark410/Smasual`,
  },
  {
    name: 'Travel Nurses Job Spot',
    image: process.env.PUBLIC_URL + '/images/nurse.png',
    description: `My first group project during bootcamp was an application
    dedicated for travel nurses. The application allowed the user
    to select two cities and compare the salary and cost of living
    expenses, which ultimately, led the user to make a more
    informed decision about the job.`,
    tech: `HTML, CSS, jQuery, Bootstrap`,
    note: `Unfortunately, the current API key has expired. A working product will be pushed to proudction soon`,
    link: `https://dspark410.github.io/travel-nurse-app/`,
    github: `https://github.com/dspark410/Travel-Nurse-App`,
  },
]
