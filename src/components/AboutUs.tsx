import { motion } from "framer-motion";
import eco from "../assets/Ecological.jpg";
import integrated from "../assets/integratedPerma.jpg";
import indfarm from "../assets/indianfarm.jpg";
import natimg from "../assets/naturalimg.webp";
import groupfarm from "../assets/group-farming-2.jpg";
import carbon from "../assets/carbon.jpg";
import organic from "../assets/organic_product.webp";
import techfarm from "../assets/AgriTech.jpg";
import rainwater from "../assets/RainWater.jpg";
import farming from "../assets/farming.jpg";
import landscaping from "../assets/landscaping.jpg";
import buildingFarming from "../assets/building_farming.webp"
import { a } from "framer-motion/client";
const bgMain = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bgMain})` }}
      />
      
      <div className="relative px-4 sm:px-10 md:px-20 py-16 space-y-20 bg-white/80 backdrop-blur-md">
        {/* About Us Intro */}
        <section className="text-center space-y-8 mt-24">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-green-800 tracking-tight leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            "How we live is what makes us real"
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Are you looking to create a sustainable and harmonious lifestyle for your future generation?  
            Build a healthier life with what you have and where you are?  
            Join the next big ecological revolution — you're at the right place!
          </motion.p>
          <motion.p
            className="text-lg font-semibold text-green-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We are a sustainable organisation offering consulting and high-quality management services
            to build a wholesome future for humankind.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">Who We Are</h2>
            <p className="text-lg text-green-800 font-semibold">Indian Organic Farms Association (MSInternational)</p>
          </motion.div>
        </section>

        {/* Vision and Mission */}
        <section className="grid gap-12 md:grid-cols-2">
          <CardWithMotion title="Our Vision" description="To lead future human generations towards a 'Sustainable Harmonious Wholesome Life'." delay={0.1} />
          <CardWithMotion title="Our Mission" description="To provide comprehensive and high-quality environmental project consulting and management services." delay={0.2} />
        </section>

        {/* Our Goals */}
        <section className="space-y-8">
          <motion.h2
            className="text-3xl font-bold text-green-700 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Goals Towards a Sustainable Lifestyle
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <GoalCard key={goal} goal={goal} delay={index * 0.05} />
            ))}
          </div>
        </section>

        {/* What We Do */}
        <motion.section
          className="space-y-6 p-6 rounded-xl bg-gradient-to-br from-green-100 to-green-50 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-green-700 text-center">What We Do</h2>
          <div className="text-lg text-gray-700 space-y-4 text-center max-w-5xl mx-auto">
            <p>
              MSInternational is building a future where people and nature thrive together. 
              We work directly with individuals, companies, and community groups to promote stewardship of natural assets.
            </p>
            <p>
              Our work focuses on collaborating with everyone—individuals, governments, NGOs, and corporates—to create change at the scale and speed our planet demands.
            </p>
          </div>
        </motion.section>

        {/* Our Projects */}
        <section className="space-y-14">
          <motion.h2
            className="text-3xl font-bold text-green-700 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Projects
          </motion.h2>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} delay={0.2 + i * 0.2} />
          ))}
        </section>

        {/* Footer Concepts */}
        <section className="space-y-8">
          <motion.h2
            className="text-3xl font-bold text-green-700 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Key Concepts We Embrace
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {concepts.map((concept, index) => (
              <ConceptCard key={concept.text} text={concept.text} imageSrc={concept.imageSrc} delay={index * 0.05} />
            ))}
          </div>
        </section>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 p-4 bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </motion.button>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-8 mt-16">
        <p>&copy; 2025 MSInternational. All rights reserved.</p>
      </footer>
    </div>
  );
};

const CardWithMotion = ({ title, description, delay = 0 }: { title: string, description: string, delay?: number }) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all text-center space-y-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold text-green-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const GoalCard = ({ goal, delay = 0 }: { goal: string, delay?: number }) => (
  <motion.div
    className="p-4 rounded-lg bg-white hover:bg-green-100 shadow hover:shadow-lg text-center transition-all"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <p className="text-green-800 font-semibold">{goal}</p>
  </motion.div>
);

const ProjectCard = ({ title, description, benefits, delay = 0 }: { title: string, description: string, benefits: string[], delay?: number }) => (
  <motion.div
    className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all space-y-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold text-green-700">{title}</h3>
    <p className="text-gray-700">{description}</p>
    <ul className="list-disc list-inside text-gray-600 space-y-1">
      {benefits.map((benefit, idx) => (
        <li key={idx}>{benefit}</li>
      ))}
    </ul>
  </motion.div>
);

const ConceptCard = ({ text, imageSrc, delay = 0 }: { text: string, imageSrc: string, delay?: number }) => (
  <motion.div
    className="p-4 bg-white rounded-md shadow hover:shadow-lg text-center transition-all hover:bg-green-50"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="relative">
      <img
        src={imageSrc}
        alt={text}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <p className="text-green-700 font-semibold">{text}</p>
    </div>
  </motion.div>
);

// Constants
const goals = [
  "Satisfy Human Food and Clothing",
  "Enhance Environmental Quality and Natural Resources",
  "Use Nonrenewable Resources More Efficiently",
  "Take Better Advantage of On-Farm Resources",
  "Employ Natural & Biological Controls for Pests & Disease",
  "Sustain the Economic Viability of Farming",
  "Catch & Store Rain Water",
  "Grow Your Own Food",
  "Create Your Own Resources",
  "Build a Sustainable Shelter",
  "Reduce or Create Zero Waste",
  "Happier & Healthier Lifestyle"
];

const projects = [
  {
    title: "Project #1: 25 Cents Sustainable Integrated Farming",
    description: "Build a profitable, sustainable farm even with just 25 cents of land. A game-changing model for small landholders.",
    benefits: ["Economic Viability", "Higher Productivity", "Increased Profitability", "Balanced Food Sources", "Efficient Resource Recycling", "Healthier Lifestyle Benefits"]
  },
  {
    title: "Project #2: Do-Nothing Agroforestry",
    description: "A natural, minimal-intervention forest creation method. No tillage, no pruning, no fertilizer, no pesticides—just pure nature!",
    benefits: ["80% less labor", "Natural investment for future generations", "Self-sustaining ecosystems"]
  },
  {
    title: "Project #3: Therapeutic Forestry",
    description: "Create healing spaces with multifunctional herbal plants and trees. A natural way to boost mental and physical well-being.",
    benefits: ["Stress Reduction", "Happiness & Mental Health Improvement", "Enhanced Creativity & Mood"]
  },
  {
    title: "Project #4: Galactic Park",
    description: "An agroforest created based on your birth Nakshatras for holistic spiritual, mental, and physical harmony.",
    benefits: ["Personalized Health and Well-being", "Spiritual Connection through Trees", "Divine Atmosphere Creation"]
  },
  {
    title: "Project #5: Industry-Based Agroforestry",
    description: "Commercial forestry with trees like sandalwood, timber, and medicinal plants — ideal for businesses and industrialists.",
    benefits: ["Timber and Plywood Industries", "Oil and Biodiesel Industries", "Matchwood and Pulp Industries"]
  }
];

const concepts = [
  {
    text: "Ecological Sustainable Living",
    imageSrc:eco,
  },
  {
    text: "Integrated Permaculture Design",
    imageSrc: integrated,
  },
  {
    text: "Natural & Organic Farming",
    imageSrc: indfarm,
  },
  {
    text: "Indian Traditional Herbal Cultivation",
    imageSrc: natimg,
  },
  {
    text: "Community Farming",
    imageSrc: groupfarm,
  },
  {
    text: "Eco-friendly Buildings",
    imageSrc: buildingFarming,
  },
  {
    text: "Environmental Forests for Carbon Footprint",
    imageSrc: carbon,
  },
  {
    text: "Organic Product Value Addition",
    imageSrc: organic,
  },
  {
    text: "Agri Automation and Mechanisation",
    imageSrc:   techfarm,
  },
  {
    text: "Rainwater Harvesting",
    imageSrc: rainwater,
  },
  {
    text: "Agri Empowerment Training",
    imageSrc: farming,
  },
  {
    text: "Landscaping",
    imageSrc: landscaping,
  }
];

export default AboutUs;