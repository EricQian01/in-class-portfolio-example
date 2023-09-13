import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./App";

function App() {
  return (
    <div className="App">
      <Avatar
        image="https://randomuser.me/api/portraits/men/23.jpg"
        name="Jack Harlow"
        tagline="whats poppin, brand new whip just hopped in"
      />

      <WorkExperience id="i" profile="Jack Harlow">
        <Company
          name="Boss Baby inc."
          from_date="Jan 2019"
          to_date="Dec 2020"
        />
        <Company
          name="Big Baller Brand."
          from_date="Jan 2021"
          to_date="Dec 2022"
        />
        <Company name="Roblox." from_date="Jan 2022" to_date="Dec 2023" />
      </WorkExperience>
      <Portfolio>
        <Project image="https://picsum.photos/id/1/200/300" />
        <Project image="https://picsum.photos/id/1/200/300" />
        <Project image="https://picsum.photos/id/1/200/300" />
        <Project image="" />
      </Portfolio>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="" />
      </div>
      <div>
        <p className="profile">Hello, I'm {props.name}</p>
        <p className="profile-tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <div>
      <h2>Work Experience</h2>
      <ul className="work">{props.children}</ul>
    </div>
  );
}

function Company(props) {
  return (
    <li>
      <h2 className="work-title">
        <span className="company">{props.name}</span>
        <span className="from">{props.from_date}</span>
        <span className="until">{props.to_date}</span>
      </h2>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    </li>
  );
}

function Portfolio(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">{props.children}</div>
    </div>
  );
}

function Project(props) {
  let image;
  if (props.image) {
    image = "https://placehold.co/600x400";
  } else {
    image = props.image;
  }

  return (
    <div className="project">
      <div className="project-image">
        <img src={props.image} alt="" />
      </div>
      <div className="project-description">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
