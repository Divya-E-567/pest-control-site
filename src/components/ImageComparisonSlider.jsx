import { useState } from 'react';

function ImageComparisonSlider({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, containerRect) => {
    const x = clientX - containerRect.left;
    let percentage = (x / containerRect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, container);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches.length === 0) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, container);
  };

  return (
    <div
      className="comparison-slider"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      style={{
        position: 'relative',
        width: '100%',
        height: '380px',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(11, 41, 64, 0.1)',
        cursor: 'ew-resize',
        userSelect: 'none',
        border: '1px solid rgba(220, 239, 227, 0.4)'
      }}
    >
      {/* After image is the background */}
      <img
        src={afterImage}
        alt="After pest treatment"
        style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
      />
      <div
        className="slider-label after-label"
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          background: 'rgba(10, 48, 37, 0.85)',
          color: '#ffd166',
          padding: '4px 12px',
          borderRadius: '8px',
          fontSize: '0.8rem',
          fontWeight: '700',
          backdropFilter: 'blur(4px)',
          zIndex: 4
        }}
      >
        {afterLabel}
      </div>

      {/* Before image is absolute overlapped and clipped */}
      <div
        className="before-image-wrap"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: `${position}%`,
          overflow: 'hidden',
          transition: isDragging ? 'none' : 'width 0.1s ease',
          pointerEvents: 'none'
        }}
      >
        <img
          src={beforeImage}
          alt="Before pest treatment"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            maxWidth: 'none'
          }}
        />
        <div
          className="slider-label before-label"
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            background: 'rgba(18, 52, 74, 0.85)',
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: '700',
            backdropFilter: 'blur(4px)'
          }}
        >
          {beforeLabel}
        </div>
      </div>

      {/* Vertical Slider divider line */}
      <div
        className="slider-line"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: '3px',
          background: '#ffd166',
          pointerEvents: 'none',
          zIndex: 5,
          transition: isDragging ? 'none' : 'left 0.1s ease',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)'
        }}
      >
        {/* Central sliding button handle */}
        <div
          className="slider-handle-btn"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#08271e',
            border: '3px solid #ffd166',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffd166',
            fontWeight: 'bold',
            fontSize: '14px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
          }}
        >
          ↔
        </div>
      </div>
    </div>
  );
}

export default ImageComparisonSlider;
