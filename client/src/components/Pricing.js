import React from 'react'

const Pricing = () => {
  return (
    <div id="pricing" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-3xl font-bold mb-4">$0<span className="text-gray-500 text-lg">/month</span></p>
              <ul className="space-y-3 mb-6">
                <li>✓ 1000 links per month</li>
                <li>✓ Basic analytics</li>
                <li>✓ API access</li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200">
                Get Started
              </button>
            </div>
            <div className="border rounded-lg p-6 bg-blue-50 border-blue-200">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-4">$9<span className="text-gray-500 text-lg">/month</span></p>
              <ul className="space-y-3 mb-6">
                <li>✓ Unlimited links</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Custom domains</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Choose Pro
              </button>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <ul className="space-y-3 mb-6">
                <li>✓ Everything in Pro</li>
                <li>✓ SLA guarantee</li>
                <li>✓ Dedicated support</li>
                <li>✓ Custom integration</li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Pricing