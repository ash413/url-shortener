import React, { useState } from 'react'

const Main = () => {

    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        
    }

  return (
    <div>
        <div>
            <div>
                <h1>Shorten Your Links, Expand Your Reach</h1>
                <p>Create short, memorable links in seconds with TinyClip's powerful URL shortener</p>
            </div>

            <div>
                <form>
                    <input
                        type='url'
                        value={URL}
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


        </div>
    </div>
  )
}

export default Main