'use client'

import background from "@/../public/background.png";
import whiteboard from "@/../public/whiteboard.png";
import flags from "@/../public/flags.svg"
import envelope from "@/../public/envelope.png"
import logo from "@/../public/logo.png"
import { useEffect, useRef } from 'react';

interface DynamicMoldureProps {
    message: string
    sender: string
    destination: string
}

const DynamicMoldureCanvas = ({
  message,
  sender,
  destination
} : DynamicMoldureProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement | null;
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

        const fontSize = 101;
        const fontFamily = 'Caveat';
        const textColor = '#000';

        const destinationX = 452.61;
        const destinationY = 296.16; 

        const messageX = 800;
        const messageY = 500;

        const senderX = 1300;
        const senderY = 900

        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillText(message, messageX, messageY);
        ctx.fillText(sender, senderX, senderY);
        ctx.fillText(destination, destinationX, destinationY);

      }
    };

    backgroundImg.onload = onImageLoad;
    whiteboardImg.onload = onImageLoad;
    flagsImg.onload = onImageLoad;
    envelopImg.onload = onImageLoad;
    logImg.onload = onImageLoad;
  }, [background, whiteboard, flags, envelope, logo, destination, sender, message]);

  return <canvas ref={canvasRef} />;
};

export default DynamicMoldureCanvas;
