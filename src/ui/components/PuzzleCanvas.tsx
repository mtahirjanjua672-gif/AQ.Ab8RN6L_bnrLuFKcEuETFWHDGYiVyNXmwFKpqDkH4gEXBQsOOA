/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - 2D Canvas Puzzle Visualizer
 * High-DPI responsive canvas rendering for geometric & structural teasers
 */

import React, { useEffect, useRef } from 'react';
import { VisualSpec } from '../../domain/models';

interface PuzzleCanvasProps {
  spec?: VisualSpec;
  width?: number;
  height?: number;
  theme?: 'dark' | 'light' | 'system';
}

export const PuzzleCanvas: React.FC<PuzzleCanvasProps> = ({
  spec,
  width = 320,
  height = 180,
  theme = 'dark',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high-DPI retina displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Color palette
    const isDark = theme !== 'light';
    const bgColor = isDark ? '#0B192C' : '#F8FAFC';
    const strokeColor = isDark ? '#38BDF8' : '#0284C7';
    const accentColor = '#06B6D4';
    const goldColor = '#F59E0B';
    const textColor = isDark ? '#F1F5F9' : '#0F172A';
    const gridLineColor = isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(2, 132, 199, 0.25)';

    // Clear background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    if (!spec) {
      // Default geometric backdrop: neural connection network
      drawDefaultNeuralGrid(ctx, width, height, strokeColor, isDark);
      return;
    }

    switch (spec.type) {
      case 'sequence_shapes':
        drawShapeSequence(ctx, width, height, spec.data, strokeColor, accentColor, goldColor, textColor);
        break;
      case 'matrix_grid':
        drawMatrixGrid(ctx, width, height, spec.data, strokeColor, accentColor, goldColor, gridLineColor);
        break;
      case 'sudoku_grid':
        drawSudokuGrid(ctx, width, height, spec.data, strokeColor, goldColor, textColor, gridLineColor);
        break;
      default:
        drawDefaultNeuralGrid(ctx, width, height, strokeColor, isDark);
        break;
    }
  }, [spec, width, height, theme]);

  return (
    <div className="relative flex items-center justify-center rounded-2xl overflow-hidden border border-cyan-900/40 shadow-inner bg-[#0B192C]/70">
      <canvas
        ref={canvasRef}
        style={{ width: `${width}px`, height: `${height}px` }}
        className="block touch-none"
        aria-label="Cognitive Puzzle Visual Specification"
      />
    </div>
  );
};

// Helper 1: Default Neural Grid
function drawDefaultNeuralGrid(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  strokeColor: string,
  isDark: boolean
) {
  const nodes = [
    { x: w * 0.2, y: h * 0.3 },
    { x: w * 0.5, y: h * 0.2 },
    { x: w * 0.8, y: h * 0.35 },
    { x: w * 0.35, y: h * 0.7 },
    { x: w * 0.65, y: h * 0.65 },
  ];

  ctx.strokeStyle = isDark ? 'rgba(6, 182, 212, 0.35)' : 'rgba(2, 132, 199, 0.35)';
  ctx.lineWidth = 2;

  // Draw connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      ctx.beginPath();
      ctx.moveTo(nodes[i].x, nodes[i].y);
      ctx.lineTo(nodes[j].x, nodes[j].y);
      ctx.stroke();
    }
  }

  // Draw nodes
  nodes.forEach((pt, idx) => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = idx === 1 ? '#F59E0B' : strokeColor;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();
  });
}

// Helper 2: Draw Sequence Shapes
function drawShapeSequence(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  data: Record<string, any>,
  strokeColor: string,
  accentColor: string,
  goldColor: string,
  textColor: string
) {
  const symbols = data.symbols || data.shapes || ['circle', 'square', 'circle', 'square', 'unknown'];
  const count = symbols.length;
  const slotWidth = w / (count + 1);
  const cy = h / 2;

  symbols.forEach((sym: string, i: number) => {
    const cx = slotWidth * (i + 1);
    const radius = Math.min(22, slotWidth * 0.36);

    ctx.save();
    ctx.lineWidth = 2.5;

    if (sym === '★' || sym === 'star') {
      ctx.fillStyle = goldColor;
      ctx.strokeStyle = '#FBBF24';
      drawStar(ctx, cx, cy, 5, radius, radius * 0.5);
      ctx.fill();
      ctx.stroke();
    } else if (sym === '◆' || sym === 'diamond') {
      ctx.fillStyle = accentColor;
      ctx.strokeStyle = strokeColor;
      ctx.beginPath();
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx + radius, cy);
      ctx.lineTo(cx, cy + radius);
      ctx.lineTo(cx - radius, cy);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (sym === '●' || sym === 'circle') {
      ctx.fillStyle = strokeColor;
      ctx.strokeStyle = accentColor;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    } else if (sym === 'square') {
      ctx.fillStyle = '#3B82F6';
      ctx.strokeStyle = '#60A5FA';
      ctx.beginPath();
      ctx.rect(cx - radius * 0.85, cy - radius * 0.85, radius * 1.7, radius * 1.7);
      ctx.fill();
      ctx.stroke();
    } else if (sym === '⬡' || sym === 'hexagon') {
      ctx.fillStyle = '#8B5CF6';
      ctx.strokeStyle = '#A78BFA';
      drawPolygon(ctx, cx, cy, radius, 6);
      ctx.fill();
      ctx.stroke();
    } else if (sym === 'unknown' || sym === '?') {
      // Question mark placeholder
      ctx.strokeStyle = goldColor;
      ctx.strokeRect(cx - radius, cy - radius, radius * 2, radius * 2);
      ctx.font = 'bold 20px system-ui';
      ctx.fillStyle = goldColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('?', cx, cy);
    } else {
      ctx.font = 'bold 22px system-ui';
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(sym, cx, cy);
    }
    ctx.restore();
  });
}

// Helper 3: Draw Matrix Grid
function drawMatrixGrid(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  data: Record<string, any>,
  strokeColor: string,
  accentColor: string,
  goldColor: string,
  gridLineColor: string
) {
  const rows = data.rows || 3;
  const cols = data.cols || 3;
  const gridSize = Math.min(w * 0.65, h * 0.8);
  const startX = (w - gridSize) / 2;
  const startY = (h - gridSize) / 2;
  const cellW = gridSize / cols;
  const cellH = gridSize / rows;

  // Grid outline
  ctx.strokeStyle = gridLineColor;
  ctx.lineWidth = 2;
  for (let r = 0; r <= rows; r++) {
    ctx.beginPath();
    ctx.moveTo(startX, startY + r * cellH);
    ctx.lineTo(startX + gridSize, startY + r * cellH);
    ctx.stroke();
  }
  for (let c = 0; c <= cols; c++) {
    ctx.beginPath();
    ctx.moveTo(startX + c * cellW, startY);
    ctx.lineTo(startX + c * cellW, startY + gridSize);
    ctx.stroke();
  }

  // Draw points/dots
  if (data.points && Array.isArray(data.points)) {
    data.points.forEach(([r, c]: [number, number]) => {
      const cx = startX + c * cellW + cellW / 2;
      const cy = startY + r * cellH + cellH / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, Math.min(cellW, cellH) * 0.28, 0, Math.PI * 2);
      ctx.fillStyle = strokeColor;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();
    });
  }

  // Highlight specific single cell
  if (data.highlight) {
    const [hr, hc] = data.highlight;
    const cx = startX + hc * cellW + cellW / 2;
    const cy = startY + hr * cellH + cellH / 2;
    drawStar(ctx, cx, cy, 5, cellW * 0.35, cellW * 0.18);
    ctx.fillStyle = goldColor;
    ctx.fill();
  }
}

// Helper 4: Draw Sudoku Grid
function drawSudokuGrid(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  data: Record<string, any>,
  strokeColor: string,
  goldColor: string,
  textColor: string,
  gridLineColor: string
) {
  const size = Math.min(w * 0.65, h * 0.85);
  const startX = (w - size) / 2;
  const startY = (h - size) / 2;
  const cell = size / 4;

  ctx.lineWidth = 1.5;
  ctx.strokeStyle = gridLineColor;

  for (let i = 0; i <= 4; i++) {
    ctx.beginPath();
    ctx.lineWidth = i % 2 === 0 ? 3 : 1;
    ctx.strokeStyle = i % 2 === 0 ? strokeColor : gridLineColor;
    ctx.moveTo(startX, startY + i * cell);
    ctx.lineTo(startX + size, startY + i * cell);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(startX + i * cell, startY);
    ctx.lineTo(startX + i * cell, startY + size);
    ctx.stroke();
  }

  // Draw numbers if row or box provided
  ctx.font = 'bold 20px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (data.row) {
    data.row.forEach((num: number, c: number) => {
      const cx = startX + c * cell + cell / 2;
      const cy = startY + 1 * cell + cell / 2;
      if (num === 0) {
        ctx.fillStyle = goldColor;
        ctx.fillText('?', cx, cy);
      } else {
        ctx.fillStyle = textColor;
        ctx.fillText(String(num), cx, cy);
      }
    });
  } else if (data.box) {
    data.box.forEach((rArr: number[], r: number) => {
      rArr.forEach((num: number, c: number) => {
        const cx = startX + c * cell + cell / 2;
        const cy = startY + r * cell + cell / 2;
        if (num === 0) {
          ctx.fillStyle = goldColor;
          ctx.fillText('?', cx, cy);
        } else {
          ctx.fillStyle = textColor;
          ctx.fillText(String(num), cx, cy);
        }
      });
    });
  } else {
    // Default mini sudoku demo layout
    const sample = [
      [1, 2, 3, 4],
      [3, 4, 1, 2],
      [2, 1, 4, 3],
      [4, 3, 2, 1],
    ];
    sample.forEach((rArr, r) => {
      rArr.forEach((num, c) => {
        const cx = startX + c * cell + cell / 2;
        const cy = startY + r * cell + cell / 2;
        ctx.fillStyle = (r === 1 && c === 2) ? goldColor : textColor;
        ctx.fillText((r === 1 && c === 2) ? '?' : String(num), cx, cy);
      });
    });
  }
}

// Utility: Draw Star
function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  spikes: number,
  outerRadius: number,
  innerRadius: number
) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
}

// Utility: Draw Regular Polygon
function drawPolygon(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  sides: number
) {
  if (sides < 3) return;
  const angle = (Math.PI * 2) / sides;
  ctx.beginPath();
  for (let i = 0; i < sides; i++) {
    const x = cx + radius * Math.cos(i * angle - Math.PI / 2);
    const y = cy + radius * Math.sin(i * angle - Math.PI / 2);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
}
