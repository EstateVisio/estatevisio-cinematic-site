'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  label?: string;
  className?: string;
}

export function VideoPlayer({ src, poster, label, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [buffered, setBuffered] = useState(0);
  const [loading, setLoading] = useState(false);

  const formatTime = (s: number) => {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const scheduleHide = useCallback(() => {
    clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShowControls(false), 2800);
  }, []);

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (playing) scheduleHide();
  }, [playing, scheduleHide]);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  }, []);

  const handleContainerClick = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  const toggleFullscreen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) el.requestFullscreen();
    else document.exitFullscreen();
  }, []);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const v = videoRef.current;
    const bar = progressRef.current;
    if (!v || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  useEffect(() => {
    return () => clearTimeout(hideTimerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-charcoal border border-gold/20 hover:border-gold/35 transition-colors duration-500 cursor-pointer select-none aspect-video ${className ?? ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => { if (playing) setShowControls(false); }}
      onClick={handleContainerClick}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onPlay={() => { setPlaying(true); scheduleHide(); }}
        onPause={() => { setPlaying(false); setShowControls(true); clearTimeout(hideTimerRef.current); }}
        onEnded={() => { setPlaying(false); setProgress(0); setCurrentTime(0); setShowControls(true); }}
        onTimeUpdate={() => {
          const v = videoRef.current;
          if (!v) return;
          setCurrentTime(v.currentTime);
          setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
          if (v.buffered.length > 0) {
            setBuffered((v.buffered.end(v.buffered.length - 1) / v.duration) * 100);
          }
        }}
        onLoadedMetadata={() => {
          const v = videoRef.current;
          if (v) setDuration(v.duration);
        }}
        onWaiting={() => setLoading(true)}
        onCanPlay={() => setLoading(false)}
      />

      {!playing && (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/40 via-transparent to-charcoal/20 pointer-events-none" />
      )}

      {loading && playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
        </div>
      )}

      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center" onClick={handleContainerClick}>
          <div className="w-20 h-20 rounded-full border border-gold/55 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-500 hover:scale-110 backdrop-blur-sm">
            <Play className="h-8 w-8 text-gold ml-1.5" />
          </div>
        </div>
      )}

      {label && !playing && (
        <p className="absolute bottom-16 left-6 text-cloud-white/50 text-xs tracking-[0.14em] uppercase pointer-events-none">
          {label}
        </p>
      )}

      <div
        className="absolute bottom-0 left-0 right-0 transition-opacity duration-300 pointer-events-none"
        style={{ opacity: showControls ? 1 : 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent pointer-events-none" />
        <div className="relative px-4 pb-4 pt-8 pointer-events-auto" onClick={e => e.stopPropagation()}>
          <div
            ref={progressRef}
            className="mb-3 h-[3px] bg-cloud-white/10 relative cursor-pointer group/bar"
            onClick={handleSeek}
          >
            <div className="absolute left-0 top-0 h-full bg-cloud-white/15 transition-[width] duration-200" style={{ width: `${buffered}%` }} />
            <div className="absolute left-0 top-0 h-full bg-gold transition-[width] duration-100" style={{ width: `${progress}%` }} />
            <div
              className="absolute top-1/2 w-3 h-3 rounded-full bg-gold border-2 border-charcoal -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity shadow-[0_0_8px_hsl(40_38%_47%/0.6)]"
              style={{ left: `${progress}%` }}
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="text-cloud-white/75 hover:text-gold transition-colors duration-200 flex-shrink-0" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? <Pause className="w-[1.1rem] h-[1.1rem]" /> : <Play className="w-[1.1rem] h-[1.1rem]" />}
            </button>
            <button className="text-cloud-white/75 hover:text-gold transition-colors duration-200 flex-shrink-0" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
              {muted ? <VolumeX className="w-[1.1rem] h-[1.1rem]" /> : <Volume2 className="w-[1.1rem] h-[1.1rem]" />}
            </button>
            <span className="text-cloud-white/40 text-[0.7rem] tracking-wider tabular-nums font-light">
              {formatTime(currentTime)} <span className="text-cloud-white/20">/</span> {formatTime(duration)}
            </span>
            <div className="flex-1" />
            {label && playing && (
              <span className="text-cloud-white/25 text-[0.65rem] tracking-[0.12em] uppercase hidden sm:block">{label}</span>
            )}
            <button className="text-cloud-white/75 hover:text-gold transition-colors duration-200 flex-shrink-0" onClick={toggleFullscreen} aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}>
              {isFullscreen ? <Minimize className="w-[1.1rem] h-[1.1rem]" /> : <Maximize className="w-[1.1rem] h-[1.1rem]" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
