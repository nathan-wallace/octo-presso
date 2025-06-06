<script>
  // @ts-nocheck
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
    draw(ctx) {}
    update(width, height) {
      this.x += this.dx;
      this.y += this.dy;
      if (this.x < 0 || this.x > width) this.dx *= -1;
      if (this.y < 0 || this.y > height) this.dy *= -1;
    }
    contains(x, y) { return false; }
  }

  class Circle extends Shape {
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 4;
      ctx.stroke();
    }
    contains(x, y) {
      const dx = x - this.x;
      const dy = y - this.y;
      return Math.sqrt(dx * dx + dy * dy) <= this.size;
    }
  }

  class Square extends Shape {
    draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 4;
      ctx.stroke();
    }
    contains(x, y) {
      return (
        x >= this.x - this.size &&
        x <= this.x + this.size &&
        y >= this.y - this.size &&
        y <= this.y + this.size
      );
    }
  }

  class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.shapes = [];
      this.running = true;
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
      if (!this.running) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (const s of this.shapes) {
        s.update(this.canvas.width, this.canvas.height);
        s.draw(this.ctx);
      }
      requestAnimationFrame(() => this.loop());
    }
    handleClick(x, y, createShape) {
      for (let i = this.shapes.length - 1; i >= 0; i--) {
        const s = this.shapes[i];
        if (s.contains(x, y)) {
          this.shapes.splice(i, 1);
          this.shapes.push(createShape());
          return true;
        }
      }
      return false;
    }
  }

  let game;
  let score = 0;
  let time = 30;
  let timer;
  let theme1;
  let theme2;

  onMount(() => {
    const canvas = document.getElementById('game');
    game = new Game(canvas);
    const styles = getComputedStyle(document.documentElement);
    theme1 = styles.getPropertyValue('--color-theme-1').trim() || '#ff3e00';
    theme2 = styles.getPropertyValue('--color-theme-2').trim() || '#4075a6';

    const createRandomShape = () => {
      const size = 20 + Math.random() * 40;
      const color = Math.random() < 0.5 ? theme1 : theme2;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      return Math.random() < 0.5
        ? new Circle(x, y, size, color)
        : new Square(x, y, size, color);
    };

    game.addShape(createRandomShape());
    game.addShape(createRandomShape());
    game.addShape(createRandomShape());

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (game.handleClick(x, y, createRandomShape)) {
        score += 1;
      }
    });

    timer = setInterval(() => {
      time -= 1;
      if (time <= 0) {
        clearInterval(timer);
        game.running = false;
      }
    }, 1000);

    game.loop();
  });
</script>

<div class="hud">
  <p>Score: {score}</p>
  <p>Time: {time}</p>
  {#if time <= 0}
    <p>Game Over!</p>
  {/if}
</div>
<canvas id="game" class="fill"></canvas>

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
  .hud {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0.5rem 1rem;
    font-weight: bold;
    color: var(--color-text);
    z-index: 10;
    background: rgba(255, 255, 255, 0.7);
  }
</style>
