import React, { useEffect, useRef } from "react";
import { Cell, Universe } from "wasm-game-of-life";
import { memory } from "wasm-game-of-life/wasm_game_of_life_bg.wasm";

const CELL_SIZE = 5;
const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#000000";

const universe = Universe.new();
const width = universe.width();
const height = universe.height();

const drawCanvas = (canvas: HTMLCanvasElement) => {
  canvas.width = (CELL_SIZE + 1) * width + 1;
  canvas.height = (CELL_SIZE + 1) * height + 1;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Failed to get canvas context");
    return;
  }

  const renderLoop = () => {
    universe.tick();
    drawGrid(ctx);
    drawCells(ctx);
    requestAnimationFrame(renderLoop);
  };

  requestAnimationFrame(renderLoop);
};

const drawGrid = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.strokeStyle = GRID_COLOR;

  // Vertical lines.
  for (let i = 0; i <= width; i++) {
    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
  }

  // Horizontal lines.
  for (let j = 0; j <= height; j++) {
    ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
    ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
  }

  ctx.stroke();
};

const drawCells = (ctx: CanvasRenderingContext2D) => {
  const getIndex = (row: number, column: number) => {
    return row * width + column;
  };

  const cellsPtr = universe.cells();
  const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

  ctx.beginPath();

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const idx = getIndex(row, col);
      ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;
      ctx.fillRect(
        col * (CELL_SIZE + 1) + 1,
        row * (CELL_SIZE + 1) + 1,
        CELL_SIZE,
        CELL_SIZE
      );
    }
  }

  ctx.stroke();
};

export const GameOfLifeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Failed to get canvas");
      return;
    }
    drawCanvas(canvas);
  });
  return <canvas ref={canvasRef}></canvas>;
};
