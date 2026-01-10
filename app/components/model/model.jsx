import React from 'react';

export const Model = ({
  models,
  show = true,
  showDelay = 0,
  cameraPosition = { x: 0, y: 0, z: 8 },
  style,
  className,
  onLoad,
  alt,
  ...rest
}) => {
  const device = models[0]?.type || 'laptop';
  const deviceSrc = models[0]?.url
  const mockImage = models[0]?.texture?.srcSet || null;
  console.log(models)
  return (
    <div
      style={{
        position: 'relative',
        margin: '2rem 0',
        textAlign: 'center',
        display: 'inline-block'
      }}
    >
      {mockImage && (
        <img
          srcSet={mockImage}
          alt="Mock content"
          style={{
            position: 'absolute',
            top: '7.25%',
            left: '30%',
            width: '60%',
            height: '70%',
            objectFit: 'contain',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      )}
      <img
        src={deviceSrc}
        alt={`${device} mockup`}
        style={{
          display: 'block',
          width: models[0]?.width || '100%',
          height: models[0]?.height || '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10
        }}
      />
    </div>
  );
}

export default Model;