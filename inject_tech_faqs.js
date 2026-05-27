const fs = require('fs');
const path = require('path');

const techPages = [
  {
    path: 'app/technology/ai-ml-solutions/page.tsx',
    faqItems: [
      { question: 'What AI/ML models do you specialize in?', answer: 'We specialize in a wide range of AI/ML models including Large Language Models (LLMs), Computer Vision, Predictive Analytics, and Natural Language Processing (NLP) solutions.' },
      { question: 'How do you ensure data privacy when building AI models?', answer: 'We follow strict data anonymization and encryption protocols. All training data is secured, and we offer on-premise deployment options for highly sensitive applications.' },
      { question: 'Can you integrate AI into our existing legacy systems?', answer: 'Yes, we build custom API wrappers and microservices that allow modern AI capabilities to seamlessly interface with your existing legacy infrastructure.' }
    ],
    themeColor: 'purple'
  },
  {
    path: 'app/technology/analytics-reporting/page.tsx',
    faqItems: [
      { question: 'What BI tools do you work with?', answer: 'We have deep expertise in PowerBI, Tableau, Looker, and custom dashboard development using React and D3.js.' },
      { question: 'Can you handle real-time data streaming?', answer: 'Absolutely. We build robust data pipelines using tools like Apache Kafka and AWS Kinesis to provide real-time analytics and reporting.' },
      { question: 'How do you ensure data accuracy in reports?', answer: 'Our data engineering process includes automated data validation, anomaly detection, and rigorous ETL testing before data ever reaches your dashboards.' }
    ],
    themeColor: 'emerald'
  },
  {
    path: 'app/technology/cloud-solutions/page.tsx',
    faqItems: [
      { question: 'Which cloud providers do you support?', answer: 'We are certified partners and have extensive experience with AWS, Microsoft Azure, and Google Cloud Platform (GCP).' },
      { question: 'How do you handle cloud migration with zero downtime?', answer: 'We use blue-green deployment strategies, database replication, and meticulous traffic routing to ensure seamless migrations with zero or minimal disruption.' },
      { question: 'Do you offer ongoing cloud management?', answer: 'Yes, we provide 24/7 cloud monitoring, cost optimization, and managed DevOps services to keep your infrastructure running efficiently.' }
    ],
    themeColor: 'sky'
  },
  {
    path: 'app/technology/mobile-solutions/page.tsx',
    faqItems: [
      { question: 'Do you build native or cross-platform apps?', answer: 'We offer both. We build native apps using Swift and Kotlin, and cross-platform apps using React Native and Flutter, depending on your project requirements and budget.' },
      { question: 'Do you handle the App Store submission process?', answer: 'Yes, we manage the entire lifecycle from development and testing to Apple App Store and Google Play Store submission and approval.' },
      { question: 'How do you ensure mobile app security?', answer: 'We implement secure local storage, robust API authentication (like OAuth 2.0), certificate pinning, and regular penetration testing.' }
    ],
    themeColor: 'blue'
  },
  {
    path: 'app/technology/remote-hardware-infra/page.tsx',
    faqItems: [
      { question: 'What kind of remote infrastructure do you manage?', answer: 'We manage servers, networking equipment, remote desktops, VPNs, and endpoint security across distributed global teams.' },
      { question: 'How quickly can you provision new hardware?', answer: 'Through our partner networks and automated cloud provisioning, we can typically deploy new virtual hardware within hours and coordinate physical hardware delivery within days.' },
      { question: 'Is your remote infrastructure compliant with industry standards?', answer: 'Yes, we configure all infrastructure to comply with SOC 2, HIPAA, or ISO 27001 standards depending on your industry requirements.' }
    ],
    themeColor: 'slate'
  },
  {
    path: 'app/technology/software-services/page.tsx',
    faqItems: [
      { question: 'What is your software development methodology?', answer: 'We follow Agile/Scrum methodologies, ensuring regular sprint deliveries, continuous feedback loops, and transparent communication throughout the project lifecycle.' },
      { question: 'Who owns the source code once the project is complete?', answer: 'You do. Upon project completion and final payment, we transfer full intellectual property rights and source code ownership to your organization.' },
      { question: 'Do you provide maintenance after launch?', answer: 'Yes, we offer comprehensive Service Level Agreements (SLAs) that cover bug fixes, security patches, and feature updates post-launch.' }
    ],
    themeColor: 'orange'
  },
  {
    path: 'app/technology/talent-management/page.tsx',
    faqItems: [
      { question: 'How do you vet your technical talent?', answer: 'Our rigorous vetting process includes deep technical interviews, live coding assessments, system design evaluations, and soft-skills screening. Only top-tier candidates make the cut.' },
      { question: 'Can we hire developers on a project or dedicated basis?', answer: 'We offer flexible engagement models. You can hire dedicated full-time developers to augment your team, or engage us on a fixed-bid project basis.' },
      { question: 'How quickly can you onboard new developers to our team?', answer: 'Depending on the technology stack, we can typically onboard dedicated developers to your team within 1 to 3 weeks.' }
    ],
    themeColor: 'violet'
  }
];

techPages.forEach(page => {
  const fullPath = path.join(__dirname, page.path);
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${fullPath}, does not exist.`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  // Skip if already has FAQ
  if (content.includes('faqItems = [')) {
    console.log(`Skipping ${fullPath}, already has FAQ.`);
    return;
  }

  // 1. Add framer-motion imports if missing, or update
  if (!content.includes('AnimatePresence')) {
    if (content.includes("import { motion } from 'framer-motion'")) {
      content = content.replace("import { motion } from 'framer-motion'", "import { motion, AnimatePresence } from 'framer-motion'");
    } else {
      content = "import { motion, AnimatePresence } from 'framer-motion';\n" + content;
    }
  }

  // 2. Add ChevronDown to lucide-react imports
  if (!content.includes('ChevronDown')) {
    content = content.replace(/import \{([^}]+)\} from 'lucide-react'/, (match, p1) => {
      return `import {${p1}, ChevronDown} from 'lucide-react'`;
    });
  }

  // 3. Add state variables and FAQ items inside the component
  const componentMatch = content.match(/export default function \w+\(\) \{\n/);
  if (componentMatch) {
    const injectionStr = `  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = ${JSON.stringify(page.faqItems, null, 4)};

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
`;
    // Insert after the first useState if it exists, otherwise right after component declaration
    if (content.includes('const [isModalOpen, setIsModalOpen] = useState(false)')) {
      content = content.replace('const [isModalOpen, setIsModalOpen] = useState(false)', 'const [isModalOpen, setIsModalOpen] = useState(false)\n' + injectionStr);
    } else {
      content = content.replace(componentMatch[0], componentMatch[0] + injectionStr);
    }
  }

  // 4. Inject schema into <head> or right after <>
  content = content.replace('<Navigation />', '<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />\n      <Navigation />');

  // 5. Inject the FAQ Section before CTA
  const faqSection = `
        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Frequently Asked <span className="bg-gradient-to-r from-${page.themeColor}-600 to-${page.themeColor}-600 bg-clip-text text-transparent">Questions</span>
                </h2>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-${page.themeColor}-300 hover:shadow-md">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left"
                    >
                      <span className="text-lg font-bold text-gray-900">{item.question}</span>
                      <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className={\`text-${page.themeColor}-600 transition-colors \${openFaq === index ? 'text-${page.themeColor}-700' : ''}\`} size={24} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                          <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
`;
  content = content.replace('{/* CTA Section */}', faqSection + '\n        {/* CTA Section */}');

  fs.writeFileSync(fullPath, content);
  console.log(`Updated ${fullPath}`);
});
