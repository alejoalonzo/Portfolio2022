import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-particle-animation',
  templateUrl: './particle-animation.component.html',
  styleUrls: ['./particle-animation.component.scss']
})
export class ParticleAnimationComponent implements AfterViewInit {// Exchanged OnInit instead of 


  @ViewChild('scene') canvasRef!: ElementRef;
  @ViewChild('copy') copy: any;
  
  ngAfterViewInit() {
    var canvas = this.canvasRef.nativeElement;
    var copy = this.canvasRef.nativeElement;
    var ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  
    interface Mouse {
      x: number;
      y: number;
    }
    
    let particles: any[] = [];
    let amount: number = 0;
    let mouse: Mouse = { x: 0, y: 0 };
    let radius: number = 1;

      var ww = (canvas.width = window.innerWidth);
      var wh = (canvas.height = window.innerHeight);

      interface Particle {
        x: number;
        y: number;
        dest: {
          x: number;
          y: number;
        };
        r: number;
        vx: number;
        vy: number;
        accX: number;
        accY: number;
        friction: number;
        color: string;
      }
      
      //const colors: string[] = ["#08D9D6", "#FF2E63", "#00ADB5", "#EAEAEA", "#EEEEEE"];
      const colors: string[] = ["#08D9D6",  "#00ADB5", "#EAEAEA", "#EEEEEE"];
      
      class Particle {
        x: number;
        y: number;
        dest: {x: number, y: number};
        r: number;
        vx: number;
        vy: number;
        accX: number;
        accY: number;
        friction: number;
        color: string;
      
        constructor(x: number, y: number) {
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
      
        render() {
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
        }
      }
      function onMouseMove(e: MouseEvent) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }

      function onTouchMove(e: TouchEvent) {
        if (e.touches.length > 0) {
          mouse.x = e.touches[0].clientX;
          mouse.y = e.touches[0].clientY;
        }
      }

      function onTouchEnd(e: TouchEvent) {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      function initScene() {
        ww = canvas.width = window.innerWidth;
        wh = canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = "bold " + ww / 10 + "px Helvetica";//sans-serif
        ctx.textAlign = "center";
        ctx.fillText("ALE", ww / 2, wh / 2 - ww / 13);
        ctx.fillText("WEB", ww / 2, wh / 2);
        // ctx.fillText("DEV", ww / 2, wh / 2 + ww / 13);

        var data = ctx.getImageData(0, 0, ww, wh).data;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "screen";

        particles = [];
        for (var i = 0; i < ww; i += Math.round(ww / 150)) {
          for (var j = 0; j < wh; j += Math.round(ww / 150)) {
            if (data[(i + j * ww) * 4 + 3] > 150) {
              particles.push(new Particle(i, j));
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

      function render(a: number) {
        requestAnimationFrame(render);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < amount; i++) {
          particles[i].render();
        }
      }

      copy.addEventListener("keyup", initScene);
      window.addEventListener("resize", initScene);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("click", onMouseClick);
      window.addEventListener("touchend", onTouchEnd);
      initScene();
      requestAnimationFrame(render);
  }
}
