import { forwardRef } from 'react';

const MemeCanvas = forwardRef(({ selectedTemplate: { url, name } }, ref) => {
  return (
    <div className='col-md-6'>
      <img src={url} alt={name} ref={ref} className='img-fluid' />
    </div>
  );
});

export default MemeCanvas;
