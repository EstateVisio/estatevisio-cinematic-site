import { ReactNode } from 'react';

interface TextRendererProps {
  children: string;
  className?: string;
}

type ColorVariant = 'default' | 'gold' | 'white';

type StyleState = {
  bold: boolean;
  color: ColorVariant;
};

type MarkerDef = {
  type: 'bold' | 'gold' | 'white';
  open: string;
  close: string;
};

const MARKERS: MarkerDef[] = [
  { type: 'bold', open: '**', close: '**' },
  { type: 'gold', open: '{{', close: '}}' },
  { type: 'white', open: '[[', close: ']]' },
];

const applyMarkerToStyle = (style: StyleState, marker: MarkerDef): StyleState => {
  if (marker.type === 'bold') return { ...style, bold: true };
  if (marker.type === 'gold') return { ...style, color: 'gold' };
  return { ...style, color: 'white' };
};

const classesForStyle = (style: StyleState): string => {
  const classes: string[] = [];
  if (style.color === 'gold') classes.push('text-gold');
  if (style.color === 'white') classes.push('text-cloud');
  if (style.bold) classes.push('font-bold');
  else if (style.color !== 'default') classes.push('font-semibold');
  return classes.join(' ');
};

const TextRenderer = ({ children, className = '' }: TextRendererProps) => {
  const renderWithStacking = (text: string): ReactNode[] => {
    const nodes: ReactNode[] = [];
    let buffer = '';
    let i = 0;
    const styleStack: { marker: MarkerDef; style: StyleState }[] = [];
    let currentStyle: StyleState = { bold: false, color: 'default' };

    const flushBuffer = () => {
      if (!buffer) return;
      const classNameForSpan = classesForStyle(currentStyle);
      if (classNameForSpan) {
        nodes.push(<span className={classNameForSpan} key={nodes.length}>{buffer}</span>);
      } else {
        nodes.push(buffer);
      }
      buffer = '';
    };

    const matchAt = (index: number, token: string) => text.startsWith(token, index);

    while (i < text.length) {
      if (styleStack.length > 0) {
        const top = styleStack[styleStack.length - 1];
        if (matchAt(i, top.marker.close)) {
          flushBuffer();
          styleStack.pop();
          currentStyle = styleStack.length > 0 ? styleStack[styleStack.length - 1].style : { bold: false, color: 'default' };
          i += top.marker.close.length;
          continue;
        }
      }

      let opened = false;
      for (const marker of MARKERS) {
        if (matchAt(i, marker.open)) {
          flushBuffer();
          const newStyle = applyMarkerToStyle(currentStyle, marker);
          styleStack.push({ marker, style: newStyle });
          currentStyle = newStyle;
          i += marker.open.length;
          opened = true;
          break;
        }
      }
      if (opened) continue;

      buffer += text[i];
      i += 1;
    }

    flushBuffer();
    return nodes;
  };

  return (
    <span className={className}>
      {renderWithStacking(children)}
    </span>
  );
};

export default TextRenderer;
