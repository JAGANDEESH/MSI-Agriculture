import { Leaf, Tractor, TreePine, Sprout, ArrowRight } from 'lucide-react';

function Farmer() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-green-50 via-green to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80')] opacity-70 bg-cover bg-center" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Sustainable Agriculture Initiative
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Sustainable Farming at MSI
            </h1>
            <p className="max-w-3xl text-xl text-gray-600 leading-relaxed">
              Pioneering the future of agriculture through regenerative practices,
              farmer empowerment, and ecological harmony.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="text-4xl font-bold text-green-600 mb-2">6 Lakh+</div>
              <p className="text-gray-600">Acres targeted for natural farming transformation</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="text-4xl font-bold text-green-600 mb-2">6 Lakh+</div>
              <p className="text-gray-600">Farmers to be empowered with training and resources</p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-green-100 mb-20">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              At MS International, farming is not just an activity — it's a movement toward healing the earth, 
              empowering farmers, and feeding the world with toxin-free produce. We aim to restore balance 
              between nature and agriculture through regenerative and organic practices.
            </p>
          </div>

          {/* Farming Pillars */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 transition-all hover:shadow-xl hover:scale-[1.02]">
              <div className="bg-green-100 rounded-xl p-4 inline-block mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-600 transition-colors">
                Regenerative Practices
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We promote natural, organic, and chemical-free farming with focus on soil health and biodiversity.
                Our methods ensure sustainable growth while preserving the environment.
              </p>
              <div className="mt-6 flex items-center text-green-600 font-medium">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 transition-all hover:shadow-xl hover:scale-[1.02]">
              <div className="bg-yellow-100 rounded-xl p-4 inline-block mb-6">
                <Tractor className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-yellow-600 transition-colors">
                Farmer Training & FPOs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Capacity-building through education, workshops, and farmer producer organizations (FPOs).
                Empowering farmers with knowledge and resources.
              </p>
              <div className="mt-6 flex items-center text-yellow-600 font-medium">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 transition-all hover:shadow-xl hover:scale-[1.02]">
              <div className="bg-emerald-100 rounded-xl p-4 inline-block mb-6">
                <Sprout className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-emerald-600 transition-colors">
                Seed Sovereignty
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Local seed production and distribution to reduce dependency and enhance resilience.
                Preserving indigenous varieties for future generations.
              </p>
              <div className="mt-6 flex items-center text-emerald-600 font-medium">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 transition-all hover:shadow-xl hover:scale-[1.02]">
              <div className="bg-green-100 rounded-xl p-4 inline-block mb-6">
                <TreePine className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-800 transition-colors">
                Cattle & Goshalas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Integration of indigenous cattle and establishment of Goshalas to support natural fertilization cycles.
                Promoting traditional farming wisdom.
              </p>
              <div className="mt-6 flex items-center text-green-800 font-medium">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Farmer;