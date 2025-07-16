import MGRBus from '../assets/MGR_bus.jpeg'
import vaigaiImg from '../assets/Vaigai.jpeg';
import MeenakshiAmman from '../assets/Meenakshi-Amman.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-light"
      style={{
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/0/04/Meenakshi_Amman_Temple_in_Madurai.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container px-4 py-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', borderRadius: '15px', padding: '3rem !important' }}>
        <div className="row justify-content-center">
          <div className="col-md-10 text-center p-5 rounded shadow">
            <h1 className="display-3 fw-bold text-warning mb-4 animate__animated animate__fadeInDown">
              🚌 Madurai Bus Route Finder
            </h1>
            <p className="lead text-white-75 mb-5 animate__animated animate__fadeInUp">
              Welcome to the ancient city of **Madurai**, often called the "Athens of the East"!
              This bustling metropolis, nestled on the banks of the Vaigai River, is renowned for its rich history, vibrant culture, and magnificent temples.
              Our Bus Route Finder helps you navigate the temple city with ease, providing live access to local bus routes, stops, and schedules.
              Whether you're visiting the iconic *Meenakshi Amman Temple*, exploring the grand *Thirumalai Nayakkar Palace*, or commuting to the expansive *Mattuthavani Bus Stand*, we've got you covered.
            </p>
            
          </div>
        </div>

       

        {/* Madurai Highlights */}
        <div className="row mt-5 text-dark g-4">
          <h2 className="text-center text-warning mb-4 animate__animated animate__fadeIn">Madurai Highlights</h2>
          <div className="col-md-4 mb-4 animate__animated animate__fadeInLeft">
            <div className="card h-100 shadow-lg border-0 rounded-3" style={{ backgroundColor: '#212529' }}> {/* Dark background for cards */}
              <img
                src={MeenakshiAmman}
                className="card-img-top rounded-top-3"
                alt="Meenakshi Temple"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column text-light"> {/* Text color for card body */}
                <h5 className="card-title text-info fw-bold">Meenakshi Amman Temple</h5> {/* Changed to text-info */}
                <p className="card-text text-white-75 flex-grow-1">
                  A masterpiece of Dravidian architecture, this ancient temple is the heart and soul of Madurai. Its towering gopurams are adorned with thousands of vibrant sculptures, depicting mythological tales. It's easily accessible by numerous city bus routes.
                </p>
                <a href="https://en.wikipedia.org/wiki/Meenakshi_Amman_Temple" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-warning mt-auto">Read More</a> {/* Changed to outline-warning */}
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 animate__animated animate__fadeInUp">
            <div className="card h-100 shadow-lg border-0 rounded-3" style={{ backgroundColor: '#212529' }}>
              <img
                src={MGRBus}
                className="card-img-top rounded-top-3"
                alt="Mattuthavani Bus Stand"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column text-light">
                <h5 className="card-title text-info fw-bold">Mattuthavani MGR Bus Stand</h5>
                <p className="card-text text-white-75 flex-grow-1">
                  One of the largest integrated bus terminals in South Tamil Nadu, connecting Madurai with major cities, towns, and suburban areas. It's a key hub for local and inter-city travel.
                </p>
                <a href="https://en.wikipedia.org/wiki/Mattuthavani_Integrated_Bus_Terminus" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-warning mt-auto">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 animate__animated animate__fadeInRight">
            <div className="card h-100 shadow-lg border-0 rounded-3" style={{ backgroundColor: '#212529' }}>
              <img
                src={vaigaiImg}
                className="card-img-top rounded-top-3"
                alt="Vaigai River"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column text-light">
                <h5 className="card-title text-info fw-bold">Vaigai River & Cultural Significance</h5>
                <p className="card-text text-white-75 flex-grow-1">
                  The lifeline of Madurai, the Vaigai River holds immense cultural and historical importance. Many festivals, like the Chithirai Festival, are celebrated on its banks, and numerous bus routes crisscross the areas along the river.
                </p>
                <a href="https://en.wikipedia.org/wiki/Vaigai_River" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-warning mt-auto">Read More</a>
              </div>
            </div>
          </div>
        </div>

        ---

        {/* More About Madurai */}
        <div className="row mt-5 pt-4 text-light">
          <h2 className="text-center text-warning mb-4 animate__animated animate__fadeIn">Discover More of Madurai</h2>
          <div className="col-lg-6 mb-4 animate__animated animate__fadeInLeft">
            <div className="p-4 bg-dark rounded shadow-sm h-100"> {/* Changed to full bg-dark */}
              <h3 className="text-info fw-bold mb-3">Historical Marvels</h3>
              <p className="text-white-75">
                Beyond the Meenakshi Temple, Madurai boasts the stunning **Thirumalai Nayakkar Palace**, a 17th-century architectural marvel showcasing a blend of Dravidian and Islamic styles. Don't miss the sound and light show there! The **Gandhi Memorial Museum**, housed in the historic Tamukkam Palace, offers deep insights into Mahatma Gandhi's life and India's freedom struggle. For ancient Jain heritage, explore the{' '}
                **Samanar Hills** with its historic caves and sculptures.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-4 animate__animated animate__fadeInRight">
            <div className="p-4 bg-dark rounded shadow-sm h-100"> {/* Changed to full bg-dark */}
              <h3 className="text-info fw-bold mb-3">Culinary Delights & Crafts</h3>
              <p className="text-white-75">
                Madurai is a paradise for foodies! Indulge in local specialties like the famous **Kari Dosa** (a unique non-vegetarian dosa), the cooling **Jigarthanda** beverage, and the softest **"Malli Poo Idli"** (jasmine flower idli). The city is also renowned for its traditional arts and crafts, especially its high-quality **textiles** (like the Madurai Sungudi sarees) and the fragrant{' '}
                **Madurai Malli** (jasmine flowers), which are exported worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;