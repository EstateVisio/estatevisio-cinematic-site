'use client';

import React, { useRef, useState } from 'react';

interface PhoneMockupProps {
  videoSrc: string;
  width?: number;
}

export default function PhoneMockup({ videoSrc, width = 320 }: PhoneMockupProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const aspectRatio = 19.5 / 9;
  const height = width * aspectRatio;

  // Proportional measurements based on width
  const borderRadius = width * 0.12;
  const borderWidth = width * 0.035;
  const notchWidth = width * 0.3;
  const notchHeight = width * 0.055;
  const sideButtonWidth = width * 0.018;
  const sideButtonOffset = borderWidth * -1;

  function toggle() {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  }

  return (
    <div
      className="relative flex-shrink-0 select-none"
      style={{ width, height }}
    >
      {/* Side volume buttons (left) */}
      {[0.22, 0.32, 0.42].map((pct, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: sideButtonOffset - sideButtonWidth,
            top: height * pct,
            width: sideButtonWidth,
            height: height * 0.07,
            background: 'linear-gradient(to right, hsl(40 10% 18%), hsl(40 8% 25%))',
            borderRadius: `${sideButtonWidth / 2}px 0 0 ${sideButtonWidth / 2}px`,
            boxShadow: '-1px 0 3px rgba(0,0,0,0.5)',
          }}
        />
      ))}

      {/* Power button (right) */}
      <div
        className="absolute"
        style={{
          right: sideButtonOffset - sideButtonWidth,
          top: height * 0.28,
          width: sideButtonWidth,
          height: height * 0.1,
          background: 'linear-gradient(to left, hsl(40 10% 18%), hsl(40 8% 25%))',
          borderRadius: `0 ${sideButtonWidth / 2}px ${sideButtonWidth / 2}px 0`,
          boxShadow: '1px 0 3px rgba(0,0,0,0.5)',
        }}
      />

      {/* Phone body */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius,
          border: `${borderWidth}px solid transparent`,
          background: `
            linear-gradient(hsl(40 8% 14%), hsl(40 8% 14%)) padding-box,
            linear-gradient(145deg, hsl(40 20% 35%), hsl(40 8% 18%), hsl(40 25% 40%), hsl(40 8% 14%)) border-box
          `,
          boxShadow: `
            0 0 0 1px rgba(0,0,0,0.6),
            inset 0 0 0 1px rgba(255,255,255,0.04),
            0 32px 80px -12px rgba(0,0,0,0.9),
            0 8px 24px -4px rgba(0,0,0,0.7)
          `,
        }}
      >
        {/* Screen area */}
        <div
          className="absolute inset-0 overflow-hidden bg-black"
          style={{ borderRadius: borderRadius - borderWidth * 0.5 }}
        >
          {/* Video */}
          <video
            ref={videoRef}
            src={videoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
          />

          {/* Subtle screen glare */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)',
              borderRadius: borderRadius - borderWidth * 0.5,
            }}
          />

          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
            style={{
              width: notchWidth,
              height: notchHeight,
              background: 'hsl(40 8% 14%)',
              borderRadius: `0 0 ${notchHeight * 0.8}px ${notchHeight * 0.8}px`,
            }}
          >
            {/* Camera dot */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: notchHeight * 0.35,
                height: notchHeight * 0.35,
                background: 'hsl(40 6% 10%)',
                borderRadius: '50%',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
              }}
            />
          </div>

          {/* Play/pause overlay */}
          <button
            onClick={toggle}
            className="absolute inset-0 z-10 flex items-center justify-center group"
            aria-label={playing ? 'Pause video' : 'Play video'}
          >
            <div
              className="transition-all duration-300"
              style={{
                opacity: playing ? 0 : 1,
              }}
            >
              {/* Play button */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: width * 0.18,
                  height: width * 0.18,
                  background: 'rgba(26, 24, 22, 0.65)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(180, 150, 80, 0.35)',
                  borderRadius: '50%',
                }}
              >
                {/* Triangle */}
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: `${width * 0.045}px solid transparent`,
                    borderBottom: `${width * 0.045}px solid transparent`,
                    borderLeft: `${width * 0.07}px solid hsl(40 38% 57%)`,
                    marginLeft: '10%',
                  }}
                />
              </div>
            </div>
          </button>

          {/* Bottom home indicator */}
          <div
            className="absolute bottom-0 left-0 right-0 flex justify-center z-20 pb-1.5"
          >
            <div
              style={{
                width: width * 0.35,
                height: width * 0.012,
                background: 'rgba(255,255,255,0.25)',
                borderRadius: width * 0.01,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
