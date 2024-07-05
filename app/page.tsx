import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Govleah</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Govleah</h2>
            <p className="text-xl mb-6">Your platform for providing feedback on government policies and initiatives.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">Get Started</button>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">User-Friendly Interface</h3>
                <p>Easy to navigate platform for submitting and reviewing feedback.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Real-Time Updates</h3>
                <p>Stay updated with the latest policy changes and feedback.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Secure and Anonymous</h3>
                <p>Provide feedback securely and anonymously.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-200 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">1. Register</h3>
                <p>Sign up and create your account to start providing feedback.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">2. Submit Feedback</h3>
                <p>Provide feedback on various government policies and initiatives.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">3. Stay Updated</h3>
                <p>Receive updates and track the impact of your feedback.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-xl mb-6">Have questions or need assistance? Reach out to us!</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">Contact Support</button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Govleah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
