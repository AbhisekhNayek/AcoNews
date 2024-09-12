import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-6 text-center'>
      <div className='container mx-auto'>
        <p className='mb-2'>&copy; 2024 Acowale News. All Rights Reserved.</p>
        <p>Powered by <a href="https://gnews.io" className="text-blue-400 hover:text-blue-600">GNews API</a></p>
        <div className='mt-4'>
          <a href='/privacy-policy' className='text-sm text-gray-400 hover:text-white mx-2'>Privacy Policy</a>
          <a href='/terms-of-service' className='text-sm text-gray-400 hover:text-white mx-2'>Terms of Service</a>
          <a href='/contact' className='text-sm text-gray-400 hover:text-white mx-2'>Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
