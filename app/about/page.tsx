import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Seyyone | 25+ Years of Healthcare KPO & Technology Solutions',
  description: 'Learn about Seyyone - a trusted partner with 25+ years of excellence in Healthcare KPO services and Technology solutions, serving 150+ clients across 8 countries.',
  keywords: 'about seyyone, healthcare kpo company, software development company, medical transcription company, technology solutions provider'
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                About Seyyone
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  25+ Years
                </span>
                <br />
                <span className="text-gray-900">of Excellence</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                Since 1999, Seyyone has been transforming businesses through innovative Healthcare KPO services 
                and cutting-edge Software Development solutions. We are your trusted partner in digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Founded in Coimbatore, India, Seyyone began with a vision to bridge the gap between 
                    healthcare providers and technology solutions. Over two decades, we have evolved into 
                    a comprehensive service provider serving clients across USA, Canada, Australia, Ireland, 
                    Germany, Netherlands, UK, and India.
                  </p>
                  <p>
                    Our journey started with a focus on healthcare back-office services, recognizing the 
                    critical need for HIPAA-compliant, accurate medical transcription and billing services. 
                    Today, we&rsquo;ve expanded our expertise to include cutting-edge software development, 
                    AI/ML solutions, and cloud services.
                  </p>
                  <p>
                    With a team of 150+ dedicated professionals, we&rsquo;ve successfully completed over 100+ 
                    projects, maintaining our commitment to integrity, innovation, collaboration, excellence, 
                    customer focus, and accountability.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-sm text-gray-700">Employees</div>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                  <div className="text-sm text-gray-700">Countries</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <div className="text-sm text-gray-700">Projects</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                  <div className="text-sm text-gray-700">Years</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These values guide everything we do, from client relationships to internal operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Integrity',
                  description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.',
                  color: 'blue'
                },
                {
                  title: 'Innovation',
                  description: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions.',
                  color: 'purple'
                },
                {
                  title: 'Collaboration',
                  description: 'We work closely with our clients and team members to achieve shared goals and success.',
                  color: 'green'
                },
                {
                  title: 'Excellence',
                  description: 'We strive for the highest quality in everything we do, exceeding expectations consistently.',
                  color: 'orange'
                },
                {
                  title: 'Customer Focus',
                  description: 'We prioritize our clients needs and work tirelessly to deliver value and satisfaction.',
                  color: 'red'
                },
                {
                  title: 'Accountability',
                  description: 'We take responsibility for our actions and deliver on our commitments with reliability.',
                  color: 'indigo'
                }
              ].map((value, index) => (
                <div key={value.title} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className={`w-12 h-12 bg-${value.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                    <div className={`w-6 h-6 bg-${value.color}-600 rounded-full`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Message */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Leadership Message
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;At Seyyone, we believe in the power of technology and expertise to transform businesses. 
                  Our commitment to excellence, innovation, and client success has been the driving force 
                  behind our 25+ year journey. We&rsquo;re not just a service provider; we&rsquo;re a strategic partner 
                  dedicated to your growth and success.&rdquo;
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Seyyone Leadership Team</div>
                  <div className="text-sm text-gray-600">Coimbatore, India</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}