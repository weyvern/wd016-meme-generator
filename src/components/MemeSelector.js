import { useState, useEffect, useCallback } from 'react';
import TemplateItem from './TemplateItem';

const MemeSelector = ({ setSelectedTemplate, setInputs }) => {
  const [templates, setTemplates] = useState([]);

  const getMemeTemplates = useCallback(async () => {
    try {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setTemplates(data.data.memes);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMemeTemplates();
  }, [getMemeTemplates]);

  return (
    <div className='col-md-3' style={{ height: '600px', overflowY: 'scroll' }}>
      <div className='row'>
        {templates.map(template => (
          <TemplateItem
            key={template.id}
            template={template}
            setSelectedTemplate={setSelectedTemplate}
            setInputs={setInputs}
          />
        ))}
      </div>
    </div>
  );
};

export default MemeSelector;
