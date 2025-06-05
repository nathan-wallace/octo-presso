<script>
  import { onMount } from 'svelte';

  class Shape {
    constructor(x, y, size, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.dx = Math.random() * 2 - 1;
      this.dy = Math.random() * 2 - 1;
    }

    /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) {}

    /** @param {number} width @param {number} height */
    update(width, height) {
      this.x += this.dx;
      this.y += this.dy;
      if (this.x < 0 || this.x > width) this.dx *= -1;
      if (this.y < 0 || this.y > height) this.dy *= -1;
    }
  }

  class Circle extends Shape {
    /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 4;
      ctx.stroke();
    }
  }

  class Square extends Shape {
    /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 4;
      ctx.stroke();
    }
  }

  class Screensaver {
    constructor(canvas) {
      /** @type {HTMLCanvasElement} */
      this.canvas = canvas;
      /** @type {CanvasRenderingContext2D} */
      this.ctx = canvas.getContext('2d');
      this.shapes = [];
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    addShape(shape) {
      this.shapes.push(shape);
    }

    loop() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (const s of this.shapes) {
        s.update(this.canvas.width, this.canvas.height);
        s.draw(this.ctx);
      }
      requestAnimationFrame(() => this.loop());
    }
  }

  let saver;

  onMount(() => {
    const canvas = document.getElementById('screensaver');
    saver = new Screensaver(canvas);
    const theme1 = getComputedStyle(document.documentElement).getPropertyValue('--color-theme-1').trim() || '#ff3e00';
    const theme2 = getComputedStyle(document.documentElement).getPropertyValue('--color-theme-2').trim() || '#4075a6';
    saver.addShape(new Circle(canvas.width / 4, canvas.height / 2, 60, theme1));
    saver.addShape(new Square((canvas.width * 3) / 4, canvas.height / 2, 60, theme2));
    saver.loop();
  });
</script>

<canvas id="screensaver" class="fill"></canvas>

<style>
  :global(body) {
    margin: 0;
  }
  canvas.fill {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--color-bg-1);
  }
</style>
