const TemplateItem = ({
  template: { id, url, name, box_count },
  setSelectedTemplate,
  setInputs
}) => {
  const handleClick = () => {
    setSelectedTemplate({ id, url, name });
    setInputs(Array(box_count).fill(''));
  };
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={url} alt={name} width='80px' height='80px' style={{ objectFit: 'cover' }} />
    </div>
  );
};

export default TemplateItem;
