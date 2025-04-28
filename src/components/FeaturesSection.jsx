import React from 'react'

function FeaturesSection() {
    return (
        <section className="py-20 px-6 bg-violet-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Features</h2>
          <p className="text-gray-600">Explore the amazing features we offer</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-600">Experience lightning-fast speed and efficiency.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">Built with security at its core to protect your data.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p className="text-gray-600">Seamless integration with your existing workflow.</p>
          </div>
        </div>
      </section>
    )
}

export default FeaturesSection
