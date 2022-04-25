import * as AOS from 'aos';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { faGithub, faLinkedinIn, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faFolderOpen, faMailBulk, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'portfolioAngular';
  faCoffee = faCoffee;
  faFolderOpen = faFolderOpen;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  faYoutube = faYoutube;
  faSun = faSun;
  faMoon = faMoon;
  faArrowDown = faArrowDown;
  faWhatsapp = faWhatsapp;
  faMailBulk = faMailBulk;
  //efecto------------------
  @ViewChild('scene') scene: any;
  @ViewChild('copy') copy: any;

  @ViewChild('navbar')
  navbar!: ElementRef;

  constructor(){
   
  }

  ngOnInit(): void {
    AOS.init(); 
  
 
  // -----------------------------------------------------NAVBAR-------------------
  var posAnteriorScrol = document.documentElement.scrollTop;
  
  window.onscroll = function(){
      esconderMostrarMenu()
  };
    const esconderMostrarMenu = () =>{
      var posActualScrol = document.documentElement.scrollTop;
      if(posAnteriorScrol>posActualScrol){
         this.navbar.nativeElement.style.top="0"; 
        //document.getElementById("navbar").style.top = "0"
      }else
        this.navbar.nativeElement.style.top="-70px"; 
        //document.getElementById("navbar").style.top = "-100px"
        posAnteriorScrol = posActualScrol;
    }  
  
  }

/*
  //-----------------effect  title---------------------------------------------
  titleParticlesALE() {
    var copy = this.copy.nativeElement;
    var canvas = this.scene.nativeElement,
    ctx = canvas.getContext("2d"),
    particles: any[] = [],
    amount = 0,
    mouse = { x: 0, y: 0 },
    radius = 1;
  
    var colors = ["#468966", "#FFF0A5", "#FFB03B", "#B64926", "#8E2800"];
  
    // var copy = document.querySelector("#copy");
    var ww = (canvas.width = window.innerWidth);
    var wh = (canvas.height = window.innerHeight);
  
    function Particle(this: any, x: number, y: number) {
      this.x = Math.random() * ww;
      this.y = Math.random() * wh;
      this.dest = {
        x: x,
        y: y,
      };
      this.r = Math.random() * 5 + 2;
      this.vx = (Math.random() - 0.5) * 20;
      this.vy = (Math.random() - 0.5) * 20;
      this.accX = 0;
      this.accY = 0;
      this.friction = Math.random() * 0.05 + 0.94;
  
      this.color = colors[Math.floor(Math.random() * 6)];
    }
  
    Particle.prototype.render = function () {
      this.accX = (this.dest.x - this.x) / 1000;
      this.accY = (this.dest.y - this.y) / 1000;
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;
  
      this.x += this.vx;
      this.y += this.vy;
  
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
      ctx.fill();
  
      var a = this.x - mouse.x;
      var b = this.y - mouse.y;
  
      var distance = Math.sqrt(a * a + b * b);
      if (distance < radius * 70) {
        this.accX = (this.x - mouse.x) / 100;
        this.accY = (this.y - mouse.y) / 100;
        this.vx += this.accX;
        this.vy += this.accY;
      }
    };
  
    function onMouseMove(e: { clientX: number; clientY: number; }) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
  
    function onTouchMove(e: any) {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }
  
    function onTouchEnd() {
      mouse.x = -9999;
      mouse.y = -9999;
    }
  

    function initScene(this: any): void {
      ww = canvas.width = window.innerWidth;
      wh = canvas.height = window.innerHeight;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      
      ctx.font = "bold " + ww / 10 + "px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(copy.value, ww / 2, wh / 2);
  
      var data = ctx.getImageData(0, 0, ww, wh).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";
  
      particles = [];
      for (var i = 0; i < ww; i += Math.round(ww / 150)) {
        for (var j = 0; j < wh; j += Math.round(ww / 150)) {
          if (data[(i + j * ww) * 4 + 3] > 150) {
            particles.push(Particle(i, j));
          }
        }
      }
      amount = particles.length;
    }
  
    function onMouseClick() {
      radius++;
      if (radius === 5) {
        radius = 0;
      }
    }
  
    function render() {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < amount; i++) {
        particles[i].render();
      }
    }
    
    this.copy.addEventListener("keyup", initScene);
    window.addEventListener("resize", initScene);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("click", onMouseClick);
    window.addEventListener("touchend", onTouchEnd);
    initScene();
    requestAnimationFrame(render);
  }
*/
}
