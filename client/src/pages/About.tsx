import { Link } from 'react-router-dom';
// import redDress from '../red_dress.png';
import { aboutData } from '../data/about';

// divide to 6-7 sections 
const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
    
      
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">About {aboutData.company.name}</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            {aboutData.company.mission}
          </p>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{aboutData.stats.customers.toLocaleString()}+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{aboutData.stats.products.toLocaleString()}+</div>
              <div className="text-gray-400">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{aboutData.stats.countries}+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{aboutData.stats.years}+</div>
              <div className="text-gray-400">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{aboutData.story.title}</h2>
          <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            {aboutData.story.content}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {aboutData.company.values.map((value, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* members */}

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aboutData.team.map((member) => (
              <div key={member.id} className="bg-black p-6 rounded-lg">
                <div className="aspect-square w-full mb-4 rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-3">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-300">{aboutData.company.vision}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Fashion Journey</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of premium fashion pieces and be part of our story.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About; 