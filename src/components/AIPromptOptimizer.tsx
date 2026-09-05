
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Copy, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

const AIPromptOptimizer = () => {
  const [inputPrompt, setInputPrompt] = useState('');
  const [optimizedPrompt, setOptimizedPrompt] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const optimizePrompt = async () => {
    if (!inputPrompt.trim()) {
      toast.error('Masukkan prompt terlebih dahulu');
      return;
    }

    setIsOptimizing(true);

    // Simulasi AI optimization
    setTimeout(() => {
      const optimized = `OPTIMIZED: ${inputPrompt}

🎯 ENHANCED VERSION:
Buatkan konten marketing yang highly converting untuk produk "${inputPrompt}" dengan struktur:

📌 HEADLINE: Eye-catching dan benefit-focused
📌 PROBLEM: Identifikasi pain point target audience  
📌 SOLUTION: Positioning produk sebagai solusi utama
📌 BENEFITS: 5 keunggulan utama dengan emotional triggers
📌 SOCIAL PROOF: Testimoni dan kredibilitas
📌 URGENCY: Limited time offer atau scarcity
📌 CTA: Strong call-to-action yang action-oriented

KEYWORDS: [${inputPrompt.split(' ').slice(0, 3).join(', ')}]
TONE: Persuasive, trustworthy, exciting
FORMAT: Ready-to-use copy dengan section headers`;

      setOptimizedPrompt(optimized);
      setSuggestions([
        'Tambahkan emotional storytelling',
        'Sertakan benefit vs features comparison',
        'Gunakan power words yang converting',
        'Tambahkan guarantee atau risk reversal',
        'Include specific numbers dan statistics'
      ]);
      setIsOptimizing(false);
      toast.success('Prompt berhasil dioptimasi dengan AI!');
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Prompt berhasil dicopy!');
  };

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          <Zap className="w-5 h-5 text-purple-600" />
          AI Prompt Optimizer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Input Prompt Anda</label>
          <Textarea
            placeholder="Contoh: Smartwatch fitness tracker untuk orang sibuk..."
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            rows={4}
            className="border-2 focus:border-purple-500"
          />
        </div>

        <Button 
          onClick={optimizePrompt}
          disabled={isOptimizing}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center gap-2"
        >
          {isOptimizing ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <Zap className="w-4 h-4" />
          )}
          {isOptimizing ? 'Optimizing...' : 'Optimize with AI'}
        </Button>

        {optimizedPrompt && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Optimized Prompt</h3>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(optimizedPrompt)}
                className="flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy
              </Button>
            </div>
            <Textarea
              value={optimizedPrompt}
              readOnly
              rows={12}
              className="bg-white border-2 border-purple-200"
            />
            
            {suggestions.length > 0 && (
              <div>
                <h4 className="font-medium mb-3">AI Suggestions:</h4>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-purple-100 text-purple-700 hover:bg-purple-200 cursor-pointer"
                      onClick={() => toast.info(suggestion)}
                    >
                      {suggestion}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIPromptOptimizer;
