import React, { useEffect, useState } from 'react'
import './style.css'
import { useLanguage } from '../LanguageContext';


const ExampleCoffeeYield = () => {
  const { language } = useLanguage();
  const apiURI = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    captcha: '',
    key: '',
    file: null
  });

  const [captchaSrc, setCaptchaSrc] = useState(``);
  const [isCaptchaLoading, setIsCaptchaLoading] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [yieldResult, setYieldResult] = useState({

    avg_confidence_per_image: null,
    avg_fruit_count_per_image: null,
    estimated_fruit_count: null,
    estimated_yield_green_kg: null,
    estimated_yield_kg: null,
    estimated_yield_parchment_kg: null,
    output_images: [],

  });







  // Load CAPTCHA on component mount
  useEffect(() => {
    refreshCaptcha();
  }, []);


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const selectedFile = files[0];
      if (selectedFile && (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png' || selectedFile.type === 'image/jpg')) {
        setFormData({
          ...formData,
          file: selectedFile
        });
        setError('');
      } else {
        setFormData({
          ...formData,
          file: null
        });
        setError('Please upload a valid image file (jpg, jpeg, or png).');
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const refreshCaptcha = async (e) => {
    setIsCaptchaLoading(true);
    const response = await fetch(`${apiURI}/api/captcha?${new Date().getTime()}`);
    const data = await response.json();
    setCaptchaSrc(data.img);
    setFormData({ ...formData, key: data.key });

    setIsCaptchaLoading(false);



  }

  const submitExample = async (e) => {
    e.preventDefault();




    /*  let res = [
        {
          "avg_confidence": 0.7008276924772082,
          "fruit_count": 106,
          "id": -1,
          "in": "f1926cda-6462-4b9f-9f63-17e51cf145b7_1633b1c7-e3d7-46c2-b37d-4c3bee282916.png",
          "out": "https://s3.amazonaws.com/croppie-images/output/coffee/760645a4-b85c-4886-b872-72b769b5f717_0599570b-900a-45f7-9330-e22a49fbf581.png"
        
        }
      ];
      setYieldResult(res[0]);
      return;
  */
    setIsFormSubmitting(true);

    setYieldResult({
      avg_confidence_per_image: null,
      avg_fruit_count_per_image: null,
      estimated_fruit_count: null,
      estimated_yield_green_kg: null,
      estimated_yield_kg: null,
      estimated_yield_parchment_kg: null,
      output_images: [],
    });

    setError('');
    try {

      //   console.log(formData);
      const data = new FormData();
      data.append('captcha', formData.captcha);
      data.append('key', formData.key);
      data.append('file', formData.file);

      const response = await fetch(`${apiURI}/api/yield/coffee/example`, {
        method: 'POST',
        body: data
      });


      let res;
      try {

        res = await response.json();
        //console.log(res);


        if (response.ok) {
          setYieldResult(res);
        }


      } catch (parseError) {
        console.error(parseError);
        throw new Error('Failed to parse response');
      }

      if (!response.ok) {
        const errorMessage = res?.message || response.statusText || 'An error occurred';
        throw new Error(errorMessage);
      }


    } catch (error) {
      console.error(error);
      setError(error.message);
    }
    setIsFormSubmitting(false);
    refreshCaptcha();
  };

  return (
    <section id="example" className='example-container'>
      <h2> {language === 'es' ? 'Ejemplo en vivo' : 'Live Demo'}</h2>
      <section className='row'>


        <p> {language === 'es' ? `Pruebe el ejemplo en vivo. 
      Cargue una imagen de una planta de café con cerezas de café y deje que el algoritmo cuente la cantidad. 
      Actualmente, el algoritmo está limitado a un máximo de 300 cerezas por imagen.` :
          `Try out the live example. 
        Upload a picture of a coffee plant with coffee cherries and let the algorithm count their number. 
      Currently the algorithm is limited to maximum 300 cherries per image.`
        }</p>

      </section>
      <section className='wrap'>
        <form onSubmit={submitExample} >
          <fieldset disabled={isFormSubmitting}>

            <div className='row'>
              <label htmlFor="image">
                {language === 'es' ? 'Imagen  (jpg, jpeg, png)' : 'Image (jpg, jpeg, png)'}:</label>
              <input
                type="file"
                id="image"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange}

              />
            </div>

            <br></br><br></br>


            <div className='row'>
              <img src={captchaSrc} alt="CAPTCHA Image" />
              <button type="button" onClick={refreshCaptcha} disabled={isCaptchaLoading}>
                {language === 'es' ? 'Actualizar' : 'Refresh'}

              </button>

            </div>
            <div className='row'>
              <label htmlFor="captcha">Captcha:</label>
              <input
                type="text"
                id="captcha"
                name="captcha"
                placeholder="Enter CAPTCHA"
                value={formData.captcha}
                onChange={handleChange}
              />
            </div>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            <button type="submit" disabled={isFormSubmitting}>
              {isFormSubmitting ? (language === 'es' ? 'Enviando...' : 'Submitting...') :


                (language === 'es' ? 'Enviar' : 'Submit')}
            </button>

          </fieldset>
        </form>

        <div className='result-container'>

          {yieldResult.output_images.length == 0 && <span> {language === 'es' ? 'Resultado' : 'Result'}</span>}
          {isFormSubmitting && <div className="spinner"></div>}

          {yieldResult.output_images.length > 0 &&
            <img src={yieldResult.output_images[0]} alt="Result Image" />
          }
          <p>
            {yieldResult?.avg_fruit_count_per_image && <span> {language === 'es' ? 'Conteo de frutas' : 'Fruit count'}: {yieldResult.avg_fruit_count_per_image}</span>}
            <br></br>
            {yieldResult?.avg_confidence_per_image && <span> {language === 'es' ? 'Confianza' : 'Confidence'}: {Math.round(yieldResult.avg_confidence_per_image * 100)}%</span>}
          </p>
        </div>





      </section>






    </section>


  )
}

export default ExampleCoffeeYield