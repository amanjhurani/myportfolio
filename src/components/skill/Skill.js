import './Skill.css';
import home from "../../assets/img/city2.svg";           

function Skill() {
  return (
    <div className="Skill">
        <div className="Skill-background">
            <img className="Skill-image" src={home} alt="" />
            <div className="Skill-introduction">
              <p>
              I am currently pursuing <span>Computer Engineering</span> from Government Engineering College, Rajkot. <br /><br /> I am highly passionate about <span>computing</span> and <span>creating elegant abstractions</span> to solve <span>challenging problems</span>. I am comfortable in programming in a variety of multiple programming languages. I am particularly interested in <span>backend development</span>. I have been an active participant in the various competitive contests held on <span>Codechef</span>, <span>Codeforces</span> and <span>Google</span>😀😀😀.
              </p>
            </div>
        </div>
    </div>
  );
}

export default Skill;
