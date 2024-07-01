import React from 'react'
import { companyLinks, featuresLinks, integrationsLinks, resourcesLinks } from './IndexFile'

const FooterSection = () => {
  return <footer className='mt-20 border-t py-10 bg-blue-50'>
    <div className='grid grid-col md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 md:mx-20'>
      <div className='mb-10'>
        <h3 className='text-lg font-bold mb-10'>Company</h3>
        <ul className='space-y-5'>
          {companyLinks.map((items, index)=>(
            <li key={index}>
              <a className='hover:text-gray-400' href= {items.href}>{items.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='mb-10'>
        <h3 className='text-lg font-bold mb-10'>Features</h3>
        <ul className='space-y-5'>
          {featuresLinks.map((items, index)=>(
            <li key={index}>
              <a className='hover:text-gray-400' href= {items.href}>{items.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='mb-10'>
        <h3 className='text-lg font-bold mb-10'>Integrations</h3>
        <ul className='space-y-5'>
          {integrationsLinks.map((items, index)=>(
            <li key={index}>
              <a className='hover:text-gray-400' href= {items.href}>{items.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='text-lg font-bold mb-10'>Resources</h3>
        <ul className='space-y-5'>
          {resourcesLinks.map((items, index)=>(
            <li key={index}>
              <a className='hover:text-gray-400' href= {items.href}>{items.text}</a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </footer>
}

export default FooterSection
