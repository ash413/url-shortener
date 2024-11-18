import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#api" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
                <li><a href="#careers" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#help" className="hover:text-white">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li><a href="#status" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white">Terms</a></li>
                <li><a href="#security" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© 2024 TinyClip. All rights reserved.</p>
          </div>
        </div>
      </div>
  )
}

export default Footer