
import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { useIsMobile } from '@/hooks/use-mobile';

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const mousePosition = useRef({ x: 0, y: 0 });
  const isDark = theme === 'dark';
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    
    // Track touch position for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePosition.current = { 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        };
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    // Create particles - fewer on mobile for better performance
    const particles: Particle[] = [];
    const particleCount = isMobile 
      ? Math.min(Math.floor(window.innerWidth / 20), 40) 
      : Math.min(Math.floor(window.innerWidth / 10), 100);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + (isMobile ? 0.8 : 1),
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    // Animation loop - optimized for mobile
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach((particle) => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.current.x - particle.x, 2) + 
          Math.pow(mousePosition.current.y - particle.y, 2)
        );
        
        // Reduce interaction distance on mobile for better performance
        const maxDistance = isMobile ? 150 : 200;
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(
            mousePosition.current.y - particle.y,
            mousePosition.current.x - particle.x
          );
          
          // Reduce force on mobile for smoother interactions
          const forceFactor = isMobile ? 0.01 : 0.02;
          particle.speedX += Math.cos(angle) * force * forceFactor;
          particle.speedY += Math.sin(angle) * force * forceFactor;
        }
        
        // Limit speed - lower on mobile
        const maxSpeed = isMobile ? 1.0 : 1.5;
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed;
          particle.speedY = (particle.speedY / speed) * maxSpeed;
        }
        
        // Apply friction - more on mobile for stability
        particle.speedX *= isMobile ? 0.97 : 0.98;
        particle.speedY *= isMobile ? 0.97 : 0.98;
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary conditions
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark 
          ? `rgba(255, 255, 255, ${particle.opacity})` 
          : `rgba(30, 64, 175, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Draw connections - fewer on mobile
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(30, 64, 175, 0.05)';
      ctx.lineWidth = 0.5;
      
      // Optimize by drawing fewer connections on mobile
      const connectionDistance = isMobile ? 80 : 120;
      const step = isMobile ? 2 : 1; // Skip particles on mobile
      
      for (let i = 0; i < particles.length; i += step) {
        for (let j = i + 1; j < particles.length; j += step) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDark, isMobile]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 -z-10 opacity-70"
    />
  );
}
