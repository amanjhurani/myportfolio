import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/js/animation';
import React from 'react'
import home from "../../assets/img/city2.svg";           


class Banner extends React.Component {

    componentDidMount() {
        function ball(name) {
            // DOM Object
            this.name= name;
            this.obj= document.getElementById(name);
            // Size
            this.size= {
              x: this.obj.offsetWidth, 
              y: this.obj.offsetHeight
            }
            // Parent size
            this.sizeParent= {
              x: this.obj.offsetParent.offsetWidth, 
              y: this.obj.offsetParent.offsetHeight
            }
            // Minimum position
            this.posMin= {
              x: this.size.x/2, 
              y: this.size.y/2
            }
            // Maximum position
            this.posMax= {
              x: (this.sizeParent.x-this.size.x/2)-20,
              y: (this.sizeParent.y-this.size.y/2)-10
            }
            // Actual position
            this.pos= {
              x: this.posMin.x, 
              y: this.posMin.y
            };
            // Actual speed
            this.speed= {
              x: 0, 
              y: 0
            };  
            // Update time
            var time= (new Date()).getTime()/1000;
            
            // Move to new position
            this.move= function(x, y){
              // Limit
              this.pos.x= Math.min(this.posMax.x,
                Math.max(this.posMin.x, x));
              this.pos.y= Math.min(this.posMax.y,
                Math.max(this.posMax.y, y));
              // Updated
              time= (new Date()).getTime()/1000;
            };
            
            // Paint
            this.paint= function(){
              
              // Bounce calculation
              // pos= current position
              // min= minimum position
              // max= maximum position
              // move= movement
              // Return new postion and bounce=true if bounced
              var bounced;
              function bounce(pos, min, max, move){
                var range= max-min;
                // Normalize to [-2*range .. +2*range]
                if (move < 0) {
                  move= -(-move%(2*range));
                } else {
                  move= move%(2*range);          
                }
                // New position without bounces
                var npos= pos+move;
                // Bounce on min side
                if (pos-min < -move && -move < range) {
                  bounced= true;
                  return 2*min-npos;
                }
                // Bounce on max side
                if (max-pos < move && move < range) {
                  bounced= true;
                  return 2*max-npos;
                }
                // No bounce, or even number of bounces
                bounced= false;
                return (npos+2*range)%(2*range);
              }
              
              // Delta t
              var now= (new Date()).getTime()/1000;
              var dt= now-time;
              time= now;
              // Move
              this.pos.x= bounce(
                this.pos.x, 
                this.posMin.x, this.posMax.x,
                this.speed.x*dt
              );
              if (bounced) { this.speed.x= -this.speed.x; }
              this.pos.y= bounce(
                this.pos.y, 
                this.posMin.y, this.posMax.y,
                this.speed.y*dt
              );
              if (bounced) { this.speed.y= -this.speed.y; }
              
              // Move
              this.obj.style.left= (this.pos.x-this.size.x/2) + "px";
              this.obj.style.top= (this.pos.y-this.size.y/2) + "px";
            } 
          }
          
          // Balls
          var redball= new ball("redball");
          var greenball= new ball("greenball");
          var blueball= new ball("blueball");
          var aball= new ball("aball");
          var bball= new ball("bball");
          var eball= new ball("eball");
          var cball= new ball("cball");
          var dball= new ball("dball");
          var fball= new ball("fball");
          var gball= new ball("gball");
          var hball= new ball("hball");
          var iball= new ball("iball");
          var jball= new ball("jball");
          var kball= new ball("kball");

          var balls= [ redball, greenball, blueball, aball, bball, cball, eball, dball, fball, gball, hball, iball, kball, jball ];
          
          // Random speed
          function randomSpeed(i) {
            balls[i].speed.x= 800*(Math.random()-0.5);
            balls[i].speed.y= 800*(Math.random()-0.5);
          }
          
          // Initial speed
          for (var i= 0; i < balls.length; i++) {
            randomSpeed(i);
          }
          
          // Play
          window.setInterval(function(){
            randomSpeed(Math.floor(6*Math.random()));
          }, 2000);
          
          // Paint
          window.setInterval(function(){
            redball.paint();
            greenball.paint();
            blueball.paint();
            aball.paint();
            bball.paint();
            cball.paint();
            dball.paint();
            eball.paint();
            fball.paint();
            gball.paint();
            hball.paint();
            iball.paint();
            jball.paint();
            kball.paint();
          }, 15);
          
    }
  render () {
    return (
    <div className="Banner">
        <div className="Banner-background">
          <div className="emojis">
            <div id="redball">😀</div>
            <div id="greenball">😁</div>
            <div id="blueball">😂</div>
            <div id="aball">🤣</div>
            <div id="bball">😅</div>
            <div id="cball">😆</div>
            <div id="dball">😋</div>
            <div id="eball">😎</div>
            <div id="fball">🥰</div>
            <div id="gball">🥱</div>
            <div id="hball">😐</div>
            <div id="iball">😛</div>
            <div id="jball">😜</div>
            <div id="kball">😴</div>
          </div>
            
            <div className="Banner-heading">
                <p>Hi,</p>
                <p>I'm Aman Jhurani😀</p>
                <p className="Banner-subheading">I'm exploring a new digital world.</p>
                <div className="Banner-icon">
                    <ul>
                    <li><a target="_blank" href="https://github.com/amanjhurani"><i className="fa fa-github"></i></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/amanjhurani/"><i className="fa fa-linkedin"></i></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/amanjhurani/"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )};
}

export default Banner;
