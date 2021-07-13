import { useRef, useState } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import MemeSelector from './components/MemeSelector';
import MemeCanvas from './components/MemeCanvas';
import MemeInput from './components/MemeInput';

const App = () => {
  const memeToShare = useRef();
  const [selectedTemplate, setSelectedTemplate] = useState({});
  const [inputs, setInputs] = useState([]);
  const shareMeme = async () => {
    const blob = await domtoimage.toBlob(memeToShare.current);
    saveAs(blob, `meme_${Date.now()}`);
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <MemeSelector setSelectedTemplate={setSelectedTemplate} setInputs={setInputs} />
        <MemeCanvas ref={memeToShare} selectedTemplate={selectedTemplate} />
        <MemeInput
          inputs={inputs}
          setInputs={setInputs}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          shareMeme={shareMeme}
        />
      </div>
    </div>
  );
};

export default App;
