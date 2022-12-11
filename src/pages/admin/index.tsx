import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const AdminPage: React.FC = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        useEffect( () => {
          const CMS = require('netlify-cms-app');
          const uploadcare = require('netlify-cms-media-library-uploadcare');

          CMS.registerMediaLibrary(uploadcare)
          CMS.init();

          const netlifyIdentity = require('netlify-identity-widget');
          netlifyIdentity.init({
            container: '#netlify-modal', // defaults to document.body
            locale: 'en' // defaults to 'en'
          });
        }, [])

        return <div id='netlify-modal' />;
      }}
    </BrowserOnly>
  );
};

export default AdminPage;