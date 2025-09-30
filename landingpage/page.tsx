"use client";
import Link from "next/link";
import "./ywdh.css";

export default function Navbar() {
  return (
    <div className="latarr">
    <nav className={"navbar"}>
      <div className="logo">
  <img src="gow.png" className="fot" />
</div>
      <ul className={"navLinks"}>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/news">NEWS</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>
        <li>
        </li>
      </ul>
    </nav>
     <div className="namaa"> <h2> Hii, Kenalin Gwe..<span className="namaaa"> Dzakyy</span> </h2></div>
    
     <div className="namaaaa"> <h2> Dari Kelas Frontend Cihuyyy</h2></div>
    

 <div className="tombol"> <h1 style={{marginTop:9}} className="hanya"> More About Me</h1> </div>
 <div className="gajo">
 <img src="gojo.jpg" alt="Gojo" className="avatar" />
 </div>
  <div className="kedua"> 
    <div className="bah"> <h2>About Me</h2></div>
    <div className="bahh"> <p>Since childhood, he grew up in a harsh environment filled with constant battles and rivalry. Every day he was
       forged through physical training, strategy, and courage, until war became an inseparable part of his life. For   
       him, the battlefield was not only a place to risk his life, but also an arena to prove his pride and honor.
       </p> 
    </div>
  </div>
  <div className="juken">
     <img src="juken.jpg" alt="jugen" className="avatar2" />
  </div>
  <div className="tihga">  
    <div className="ahlian">
      <h1 className="judul"> UI/UX Design </h1> 
      <p className="dess"> A keyboard is an input device used to enter letters, numbers, symbols, and commands into a computer. 
        It commonly uses the QWERTY layout and functions mainly for typing, controlling the system,
         and giving instructions to the computer.</p>
    <div className="tomboll"> 
      <h1 style={{marginTop:9}}> Contact Me</h1>
       </div>
       </div>
       <div className="ahlian">
      <h1 className="judul"> Frontend Design </h1> 
      <p className="dess"> A keyboard is an input device used to enter letters, numbers, symbols, and commands into a computer. 
        It commonly uses the QWERTY layout and functions mainly for typing, controlling the system,
         and giving instructions to the computer.</p>
    <div className="tomboll"> 
      <h1 style={{marginTop:9}}> Contact Me</h1>
       </div>
       </div>
       <div className="ahlian">
      <h1 className="judul"> Brickbatt🌊 </h1> 
      <p className="dess"> A keyboard is an input device used to enter letters, numbers, symbols, and commands into a computer. 
        It commonly uses the QWERTY layout and functions mainly for typing, controlling the system,
         and giving instructions to the computer.</p>
    <div className="tomboll"> 
      <h1 style={{marginTop:9}}> Contact Me</h1>
       </div>
       </div>
  </div>
  <div className="skills-section">
      {/* Judul */}
      <h1 className="title">
        My <span className="highlight">Skills </span>
      </h1>

      {/* Container Skill */}
      <div className="skills-container">
        {/* Left: Skill Bars */}
        <div className="left">
          {/* Judul kiri */}
          <div className="subtitle-wrap">
            <h1 className="subtitle">Technical Skills</h1>
            <div className="underline"></div>
          </div>

          {/* HTML */}
          <div className="skill">
            <div className="skill-header">
              <span>
                <i className="fa-brands fa-html5 html-icon"></i> HTML
              </span>
              <span className="percent">90%</span>
            </div>
            <div className="bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>

          {/* CSS */}
          <div className="skill">
            <div className="skill-header">
              <span>
                <i className="fa-brands fa-css3-alt css-icon"></i> CSS
              </span>
              <span className="percent">60%</span>
            </div>
            <div className="bar">
              <div className="progress" style={{ width: "60%" }}></div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="skill">
            <div className="skill-header">
              <span>
                <i className="fa-brands fa-js js-icon"></i> JavaScript
              </span>
              <span className="percent">45%</span>
            </div>
            <div className="bar">
              <div className="progress" style={{ width: "45%" }}></div>
            </div>
          </div>

          {/* Python */}
          <div className="skill">
            <div className="skill-header">
              <span>
                <i className="fa-brands fa-python python-icon"></i> Python
              </span>
              <span className="percent">50%</span>
            </div>
            <div className="bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>

          {/* React */}
          <div className="skill">
            <div className="skill-header">
              <span>
                <i className="fa-brands fa-react react-icon"></i> React
              </span>
              <span className="percent">75%</span>
            </div>
            <div className="bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="right">
          <div className="subtitle-wrap">
            <h1 className="subtitle">Professional Skills</h1>
            <div className="underline"></div>
          </div>

          {/* Circle Progress */}
          <div className="circle-grid">
            <div className="circle-item">
              <svg className="circle">
                <circle cx="56" cy="56" r="50" className="circle-bg" />
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  className="circle-progress"
                  strokeDasharray="314"
                  strokeDashoffset="31"
                />
              </svg>
              <span className="circle-text">90%</span>
              <p className="circle-label">Creativity</p>
            </div>

            <div className="circle-item">
              <svg className="circle">
                <circle cx="56" cy="56" r="50" className="circle-bg" />
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  className="circle-progress"
                  strokeDasharray="314"
                  strokeDashoffset="63"
                />
              </svg>
              <span className="circle-text">80%</span>
              <p className="circle-label">Communication</p>
            </div>

            <div className="circle-item">
              <svg className="circle">
                <circle cx="56" cy="56" r="50" className="circle-bg" />
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  className="circle-progress"
                  strokeDasharray="314"
                  strokeDashoffset="79"
                />
              </svg>
              <span className="circle-text">75%</span>
              <p className="circle-label">Problem Solve</p>
            </div>

            <div className="circle-item">
              <svg className="circle">
                <circle cx="56" cy="56" r="50" className="circle-bg" />
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  className="circle-progress"
                  strokeDasharray="314"
                  strokeDashoffset="47"
                />
              </svg>
              <span className="circle-text">85%</span>
              <p className="circle-label">Team Work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="skills-section">
      {/* Judul */}
      <h1 className="titlee">
        My <span className="highlight">  Character </span>
      </h1>
      </div>
      <div className="aturaja">
        <div > <img src="cameraship.jpg" alt="cameraman"className="fotoo" /></div>
        <div ><img src="laser.jpg" alt="laser"className="fotoo" /></div>
         <div ><img src="plunger.jpg" alt="laser"className="fotoo"/></div>
      </div>
      <div className="aturajaa">
        <div > <img src="tvm.jpg" alt="cameraman"className="fotoo" /></div>
        <div ><img src="tvdaddy.jpg" alt="laser"className="fotoo" /></div>
         <div ><img src="large.jpg" alt="laser"className="fotoo"/></div>
      </div>
  
  
    







    </div>
  );
}