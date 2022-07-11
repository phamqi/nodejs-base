import { useEffect } from "react";

Background.propTypes = {};

function Background(props) {
  const data = [
    "http://localhost:3000/css.png",
    "http://localhost:3000/reactjs.png",
    "http://localhost:3000/vsc.png",
    "http://localhost:3000/sass.png",
    "http://localhost:3000/nodejs.png",
    "http://localhost:3000/sandwich.png",
    "http://localhost:3000/javascript.png",
    "http://localhost:3000/html.png",
  ];
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dataLength = data.length;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    class Ball {
      constructor(x, y, velx, vely, img) {
        this.x = x;
        this.y = y;
        this.velx = velx;
        this.vely = vely;
        this.img = img;
      }
      drawImageRotated(rot) {
        ctx.setTransform(1, 0, 0, 1, this.x, this.y);
        ctx.rotate(rot);
        ctx.drawImage(this.img, -20 / 2, -20 / 2);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }
      updateBall() {
        if (this.x + 10 >= width || this.x - 10 <= 0) {
          this.velx = -this.velx;
        }
        if (this.y + 10 >= height || this.y - 10 <= 0) {
          this.vely = -this.vely;
        }
        this.x += this.velx;
        this.y += this.vely;
      }
    }
    function random(min, max) {
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (num === 0) {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
      }
      return num;
    }
    const balls = [];
    let h;
    for (h = 0; h < dataLength; h++) {
      console.log(data, h);
      let img = new Image();
      img.src = data[h];
      console.log(data[h]);
      const ball = new Ball(
        random(2, width),
        random(2, height),
        random(-1, 1),
        random(-1, 1),
        img
      );
      balls.push(ball);
    }
    function loop(time) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, width, height);
      for (let i = 0; i < balls.length; i++) {
        balls[i].drawImageRotated(time / 1000);
        balls[i].updateBall();
      }
      requestAnimationFrame(loop);
    }
    loop();
  }, []);
  return <canvas id="canvas" className="canvas"></canvas>;
}

export default Background;
