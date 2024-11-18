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
        setIsLoading(false);

      try {
        const response = await fetch('/api/shorten', {
          method:'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify( { longurl: url } )
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
      }
    };

  return (
    <div>
        <div>
            <div>
                <h1>Shorten Your Links, Expand Your Reach</h1>
                <p>Create short, memorable links in seconds with TinyClip's powerful URL shortener</p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='url'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder='Paste your long URL here'
                        className=''
                        required
                    />
                    <button
                        type='submit'
                        disabled={isLoading}
                        className=''
                    >
                        {isLoading ? 'Shortening...' : 'Shorten URL'}
                    </button>
                </form>
            </div>

            <div>
            {showSuccess && (
              <div className="mt-6">
                    <div className="flex items-center justify-between max-w-xl mx-auto p-2">
                      <span className="font-medium">{shortUrl}</span>
                      <button
                        onClick={() => navigator.clipboard.writeText(shortUrl)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        Copy
                      </button>
                    </div>
              </div>
            )}
            </div>


        </div>
    </div>
  )
}

export default Main