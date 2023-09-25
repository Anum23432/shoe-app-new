
import React, { useState, useEffect } from 'react';

function ProfilePictureUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Load the selected image from local storage when the component mounts
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageDataURL = e.target.result;
        setSelectedImage(imageDataURL);

        // Save the selected image to local storage
        localStorage.setItem('profileImage', imageDataURL);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className='up-1'>
    </div>
    <div><br/>
    
      <h1 className='head5'>Account Settings</h1><br/>
      {selectedImage ? (
        <div className='up-2'>
          <img className="profile-img" src={selectedImage} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        </div>
      ) : (
        <div className='up-3'>
          <p className='pro-det'>No profile picture selected.</p>
        </div>
      )}
      
      <input className='input-img' type="file" accept="image/*" onChange={handleImageChange} />
    </div><br/>

    <section className='about'>
      <h3 className='about1'>About Me</h3>
      <p className='about2'>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc</p>
    </section>
    </>
  );
}

export default ProfilePictureUploader;

