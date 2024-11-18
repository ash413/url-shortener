import React, { useState } from 'react';

const Main = () => {

    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        setShowSuccess(true);
        setError('');

      try {
        const response = await fetch('/api/shorten', {
          method:'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify( { longUrl: url } )
        });
      
        const data = await response.json();

        if(!response.ok){
          throw new Error(data.msg || 'Something went wrong');
        }

        setShortUrl(data.shortUrl);
        setShowSuccess(true);
        setUrl('')

      } catch (error) {
        setError(error.message)
        setShowSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <div className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-gray-900 mb-4'>Shorten Your Links, Expand Your Reach</h1>
                <p className='text-xl text-gray-600 mb-8'>Create short, memorable links in seconds with TinyClip's powerful URL shortener</p>
            </div>

            <div className='max-2-2xl mx-auto'>
                <form onSubmit={handleSubmit} className='flex gap-4'>
                    <input
                        type='url'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder='Paste your long URL here'
                        className='flex-1 p-3 border rounded-md focus:outline-none focus:ring-blue-500'
                        required
                    />
                    <button
                        type='submit'
                        disabled={isLoading}
                        className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 diabled:opacity-50'
                    >
                        {isLoading ? 'Shortening...' : 'Shorten URL'}
                    </button>
                </form>
            </div>

            <div>
            {showSuccess && (
              <div className="mt-6">
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="flex items-center justify-between max-w-xl mx-auto">
                    <span className="font-medium text-green-800">{shortUrl}</span>
                      <button
                        onClick={(e) => {
                          navigator.clipboard.writeText(shortUrl);
                          // Optional: Add a copied notification
                          const btn = e.target;
                          btn.textContent = 'Copied!';
                          setTimeout(() => btn.textContent = 'Copy', 2000);
                        }}
                        className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors"
                      >
                        Copy
                      </button>
                  </div>
                </div>
              </div>
            )}
            </div>

            {error && (
              <div className="mt-6">
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <span className="text-red-800">{error}</span>
                </div>
              </div>
            )}
        </div>
    </div>
  )
}

export default Main