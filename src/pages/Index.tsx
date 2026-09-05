
import React from 'react';
import Header from '@/components/Header';
import ProductGenerator from '@/components/ProductGenerator';
import AIPromptOptimizer from '@/components/AIPromptOptimizer';
import StatsCard from '@/components/StatsCard';
import { Zap, Image, Copy, Download } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI Product Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Generate produk affiliate berkualitas tinggi dengan AI. Buat deskripsi yang converting, 
            optimize prompt untuk hasil maksimal, dan tingkatkan conversion rate Anda.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <StatsCard
              title="Products Generated"
              value="10,247"
              description="+12% from last month"
              icon={Zap}
              color="text-blue-600"
            />
            <StatsCard
              title="AI Prompts Optimized"
              value="8,531"
              description="+18% conversion boost"
              icon={Image}
              color="text-purple-600"
            />
            <StatsCard
              title="Affiliate Links"
              value="15,623"
              description="Ready to use"
              icon={Copy}
              color="text-green-600"
            />
            <StatsCard
              title="Success Rate"
              value="94%"
              description="Customer satisfaction"
              icon={Download}
              color="text-orange-600"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <AIPromptOptimizer />
          <ProductGenerator />
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Fitur Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Smart Generation</h3>
              <p className="text-gray-600">Generate produk dengan AI terdepan yang menghasilkan konten berkualitas tinggi dan converting</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Image Generation</h3>
              <p className="text-gray-600">Buat gambar produk yang menarik secara otomatis untuk meningkatkan visual appeal</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Copy className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">One-Click Export</h3>
              <p className="text-gray-600">Export affiliate links dan konten dengan satu klik, siap untuk dipromosikan</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">AI Product Generator</h3>
          </div>
          <p className="text-gray-400 mb-6">Tingkatkan affiliate marketing Anda dengan kekuatan AI</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
