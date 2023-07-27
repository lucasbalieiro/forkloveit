'use client'
import { useEffect, useRef } from 'react';

interface DynamicMoldureProps {
    backgroundPath: string
    whiteboardPath: string
    flagsPath: string
    envelopPath: string
    logoPath: string
    message: string
    sender: string
    destination: string
}

const DynamicMoldureCanvas = ({
  backgroundPath,
  whiteboardPath,
  flagsPath,
  envelopPath,
  logoPath,
  message,
  sender,
  destination
} : DynamicMoldureProps) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width=1920
    canvas.height=1080

    const backgroundImg = new Image();
    backgroundImg.src = backgroundPath;

    const whiteboardImg = new Image();
    whiteboardImg.src = whiteboardPath;

    const flagsImg = new Image();
    flagsImg.src = flagsPath;

    const envelopImg = new Image();
    envelopImg.src = envelopPath;

    const logImg = new Image();
    logImg.src = logoPath;

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
  }, [backgroundPath, whiteboardPath, flagsPath, envelopPath, logoPath, destination, sender, message]);

  return <canvas ref={canvasRef} />;
};

export default DynamicMoldureCanvas;
