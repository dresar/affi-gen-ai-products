
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Image, Copy, Download } from 'lucide-react';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  affiliateLink: string;
  tags: string[];
}

const ProductGenerator = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [generatedProducts, setGeneratedProducts] = useState<Product[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAIPrompt = () => {
    if (!productName || !category || !targetAudience) {
      toast.error('Mohon isi semua field terlebih dahulu');
      return;
    }

    const optimizedPrompt = `Buatkan deskripsi produk affiliate yang menarik untuk "${productName}" dalam kategori ${category}. 
    Target audience: ${targetAudience}. 
    
    Sertakan:
    - Headline yang eye-catching
    - 3-5 benefit utama
    - Call-to-action yang persuasif
    - Keywords SEO yang relevan
    - Emotional triggers yang tepat untuk target audience
    
    Format deskripsi harus engaging dan conversion-oriented.`;

    setAiPrompt(optimizedPrompt);
    toast.success('AI Prompt berhasil dioptimasi!');
  };

  const generateProduct = async () => {
    if (!aiPrompt) {
      toast.error('Generate AI prompt terlebih dahulu');
      return;
    }

    setIsGenerating(true);

    // Simulasi AI generation
    setTimeout(() => {
      const newProduct: Product = {
        id: Date.now().toString(),
        name: productName,
        description: `${productName} adalah solusi terbaik untuk ${targetAudience}. Dengan fitur unggulan dan kualitas premium, produk ini memberikan value maksimal untuk kebutuhan Anda. Dapatkan sekarang dengan harga special!`,
        price: `$${Math.floor(Math.random() * 500 + 50)}`,
        category: category,
        imageUrl: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000000) + 1500000000000}?w=400&h=300&fit=crop`,
        affiliateLink: `https://affiliate.link/${productName.toLowerCase().replace(/\s+/g, '-')}`,
        tags: [category, targetAudience, 'trending', 'bestseller']
      };

      setGeneratedProducts(prev => [newProduct, ...prev]);
      setIsGenerating(false);
      toast.success('Produk berhasil digenerate!');
    }, 2000);
  };

  const copyAffiliateLink = (link: string) => {
    navigator.clipboard.writeText(link);
    toast.success('Affiliate link berhasil dicopy!');
  };

  return (
    <div className="space-y-8">
      {/* Generator Form */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <Zap className="w-6 h-6 text-blue-600" />
            AI Product Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nama Produk</label>
              <Input
                placeholder="Masukkan nama produk..."
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="border-2 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Kategori</label>
              <Input
                placeholder="e.g. Electronics, Fashion, Health..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border-2 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Target Audience</label>
              <Input
                placeholder="e.g. Young professionals, Parents..."
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="border-2 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">AI Optimized Prompt</label>
            <Textarea
              placeholder="Klik 'Generate AI Prompt' untuk mendapatkan prompt yang dioptimasi..."
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              rows={6}
              className="border-2 focus:border-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={generateAIPrompt}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Generate AI Prompt
            </Button>
            <Button 
              onClick={generateProduct}
              disabled={isGenerating || !aiPrompt}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 flex items-center gap-2"
            >
              <Image className="w-4 h-4" />
              {isGenerating ? 'Generating...' : 'Generate Product'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Generated Products */}
      {generatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Generated Products ({generatedProducts.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                      {product.price}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => copyAffiliateLink(product.affiliateLink)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Link
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGenerator;
