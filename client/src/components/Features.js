import React from 'react'

const Features = () => {
  return (
    <div id="features" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TinyClip?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Create short URLs instantly with our optimized infrastructure</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Click Analytics</h3>
              <p className="text-gray-600">Track your link performance with detailed statistics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">API Access</h3>
              <p className="text-gray-600">Integrate URL shortening into your applications</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Features