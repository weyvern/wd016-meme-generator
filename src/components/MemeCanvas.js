const MemeCanvas = ({ selectedTemplate: { url, name } }) => {
  return (
    <div className='col-md-6'>
      <img src={url} alt={name} className='img-fluid' />
    </div>
  );
};

export default MemeCanvas;
