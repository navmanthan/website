import { useEffect, useRef } from 'react';

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const TAU = Math.PI * 2;
const STILL_FRAME_TIME = 3;
const COLORS = ['139, 109, 255', '59, 130, 246', '34, 211, 238'];
const DEPTH_ALPHA = [0.12, 0.26, 0.5, 0.92];
const ORBITS = [
  { radius: 1.2, tiltX: 1.15, tiltZ: 0.35, speed: 0.34 },
  { radius: 1.34, tiltX: 1.42, tiltZ: -0.5, speed: -0.22 },
];

/**
 * A sphere of points being slowly churned around its axis, after "manthan" (churning).
 * Canvas 2D keeps this free of a WebGL dependency; it pauses offscreen and honors reduced motion.
 */
export function ManthanField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = window.innerWidth < 768 ? 800 : 1700;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const y = 1 - (i / (count - 1)) * 2;
      const ring = Math.sqrt(1 - y * y);
      const theta = i * GOLDEN_ANGLE;
      positions[i * 3] = Math.cos(theta) * ring;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * ring;
    }

    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const draw = (time: number) => {
      pointer.x += (pointer.targetX - pointer.x) * 0.04;
      pointer.y += (pointer.targetY - pointer.y) * 0.04;

      ctx.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) * 0.33;
      const centerX = width / 2;
      const centerY = height / 2;
      const tilt = -0.42 + pointer.y * 0.16;
      const cosTilt = Math.cos(tilt);
      const sinTilt = Math.sin(tilt);
      const twist = 1.6 + Math.sin(time * 0.25) * 0.55;

      const paths = COLORS.map(() => DEPTH_ALPHA.map(() => new Path2D()));

      for (let i = 0; i < count; i += 1) {
        const x = positions[i * 3];
        const y = positions[i * 3 + 1];
        const z = positions[i * 3 + 2];

        const angle = time * 0.18 + y * twist + pointer.x * 0.35;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const rotatedX = x * cos - z * sin;
        const rotatedZ = x * sin + z * cos;
        const swell = 1 + 0.08 * Math.sin(y * 9 - time) + 0.05 * Math.sin(rotatedX * 5 + time * 0.7);

        const px = rotatedX * swell;
        const py = y * swell * cosTilt - rotatedZ * swell * sinTilt;
        const pz = y * swell * sinTilt + rotatedZ * swell * cosTilt;
        const perspective = 2.8 / (2.8 - pz);

        const depth = Math.min(0.999, Math.max(0, (pz + 1.15) / 2.3));
        const depthIndex = Math.floor(depth * DEPTH_ALPHA.length);
        const colorIndex = Math.min(COLORS.length - 1, Math.floor(((y + 1) / 2) * COLORS.length));
        const sx = centerX + px * radius * perspective;
        const sy = centerY + py * radius * perspective;
        const size = (0.45 + depth * 1.15) * Math.max(1, radius / 240);

        const path = paths[colorIndex][depthIndex];
        path.moveTo(sx + size, sy);
        path.arc(sx, sy, size, 0, TAU);
      }

      DEPTH_ALPHA.forEach((alpha, depthIndex) => {
        COLORS.forEach((color, colorIndex) => {
          ctx.fillStyle = `rgba(${color}, ${alpha})`;
          ctx.fill(paths[colorIndex][depthIndex]);
        });
      });

      ORBITS.forEach((orbit) => {
        const cosX = Math.cos(orbit.tiltX);
        const sinX = Math.sin(orbit.tiltX);
        const cosZ = Math.cos(orbit.tiltZ);
        const sinZ = Math.sin(orbit.tiltZ);

        const project = (angle: number) => {
          const ox = Math.cos(angle) * orbit.radius;
          const oz = Math.sin(angle) * orbit.radius;
          const oy = -oz * sinX;
          const depthZ = oz * cosX;
          const perspective = 2.8 / (2.8 - depthZ * 0.6);
          return {
            x: centerX + (ox * cosZ - oy * sinZ) * radius * perspective,
            y: centerY + (ox * sinZ + oy * cosZ) * radius * perspective,
          };
        };

        ctx.beginPath();
        for (let step = 0; step <= 96; step += 1) {
          const point = project((step / 96) * TAU);
          if (step === 0) ctx.moveTo(point.x, point.y);
          else ctx.lineTo(point.x, point.y);
        }
        ctx.strokeStyle = 'rgba(148, 163, 255, 0.16)';
        ctx.lineWidth = 1;
        ctx.stroke();

        const node = project(time * orbit.speed);
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 14);
        glow.addColorStop(0, 'rgba(103, 232, 249, 0.55)');
        glow.addColorStop(1, 'rgba(103, 232, 249, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(node.x - 14, node.y - 14, 28, 28);
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.4, 0, TAU);
        ctx.fillStyle = '#cffafe';
        ctx.fill();
      });
    };

    const loop = (now: number) => {
      draw(now / 1000);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      if (!running) draw(STILL_FRAME_TIME);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.targetX = event.clientX / window.innerWidth - 0.5;
      pointer.targetY = event.clientY / window.innerHeight - 0.5;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibilityObserver.observe(canvas);

    if (!reduceMotion) window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
