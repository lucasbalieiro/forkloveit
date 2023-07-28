'use client'

import React, { useEffect, useRef, useCallback } from 'react';

import background from '@/../public/background.png';
import whiteboard from '@/../public/whiteboard.png';
import flags from '@/../public/flags.svg';
import envelope from '@/../public/envelope.png';
import logo from '@/../public/logo.png';

interface DynamicMoldureProps {
  message: string;
  sender: string;
  destination: string;
}

const DynamicMoldureCanvas = ({
  message,
  sender,
  destination,
}: DynamicMoldureProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Function to wrap the text into multiple lines
  const wrapText = useCallback(
    (text: string, x: number, y: number, maxWidth: number) => {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;

      const words = text.split(' ');
      let line = '';
      let lineHeight = 1.2 * 90; // Adjust line height based on your font size
      let currentY = y;

      ctx.font = '90px Caveat';
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && i > 0) {
          ctx.fillText(line, x, currentY);
          line = words[i] + ' ';
          currentY += lineHeight;
        } else {
          line = testLine;
        }
      }

      ctx.fillText(line, x, currentY);
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1920;
    canvas.height = 1080;

    const backgroundImg = new Image();
    backgroundImg.src = background.src;

    const whiteboardImg = new Image();
    whiteboardImg.src = whiteboard.src;

    const flagsImg = new Image();
    flagsImg.src = flags.src;

    const envelopImg = new Image();
    envelopImg.src = envelope.src;

    const logImg = new Image();
    logImg.src = logo.src;

    let imagesLoaded = 0;

    const onImageLoad = () => {
      imagesLoaded++;

      if (imagesLoaded === 5) {
        // Draw the images onto the canvas once all images are loaded
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(whiteboardImg, 100, 100, 1626.15, 975.27); // Adjust the position and size as needed
        ctx.drawImage(flagsImg, 1275, 10, 628.9, 433.2); // Adjust the position and size as needed
        ctx.drawImage(envelopImg, 10, 650, 443.52, 437.02); // Adjust the position and size as needed
        ctx.drawImage(logImg, 90, 750, 289.21, 289.21); // Adjust the position and size as needed

        wrapText(message, 900, 400, 1300);
        ctx.fillText(sender, 1380, 900);
        ctx.fillText(destination, 452.61, 250);
      }
    };

    backgroundImg.onload = onImageLoad;
    whiteboardImg.onload = onImageLoad;
    flagsImg.onload = onImageLoad;
    envelopImg.onload = onImageLoad;
    logImg.onload = onImageLoad;
  }, [background, whiteboard, flags, envelope, logo, destination, sender, message, wrapText]);

  return <canvas ref={canvasRef} />;
};

export default DynamicMoldureCanvas;
