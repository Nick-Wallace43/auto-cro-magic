import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, ExternalLink, Download, Mail, PlusCircle, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { analysisTypes } from '@/lib/analysis-types';
import { Skeleton } from '@/components/ui/skeleton';
import SEOResults from './results/SEOResults';
import CROResults from './results/CROResults';
import PerformanceResults from './results/PerformanceResults';
import CopywritingResults from './results/CopywritingResults';
import CompetitiveResults from './results/CompetitiveResults';
import QuickWinsResults from './results/QuickWinsResults';
import DeeperImprovementsResults from './results/DeeperImprovementsResults';
import ImpactResults from './results/ImpactResults';
import ResourcesResults from './results/ResourcesResults';

interface ResultsDisplayProps {
  analysisResult: string;
  analysisType: string;
  onReset: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ 
  analysisResult, 
  analysisType,
  onReset 
}) => {
  const [activeTab, setActiveTab] = useState("cro");
  const [emailInput, setEmailInput] = useState("");
  
  const currentAnalysisType = analysisTypes.find(type => type.id === analysisType) || analysisTypes[0];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <Button
            variant="outline"
            onClick={onReset}
            className="text-lg py-6 px-6 border-[#4A5568] text-[#E2E8F0] hover:bg-[#1E293B] mb-4 md:mb-0"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Analyze Another Page
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter email to save report"
              className="text-lg py-6 px-4 bg-[#1E293B] border-[#4A5568] text-[#E2E8F0] placeholder:text-[#94A3B8] pr-12"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
          </div>
          
          <Button className="text-lg py-6 px-4 bg-[#1E293B] hover:bg-[#2D3748] text-[#E2E8F0] border border-[#4A5568]">
            <Download className="mr-2 h-5 w-5" /> Download PDF
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-4">
          {currentAnalysisType.label} Analysis Results
        </h1>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
          <span className="text-xl text-[#94A3B8]">Analysis completed successfully</span>
        </div>
      </div>
      
      <Tabs defaultValue="cro" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="flex flex-wrap gap-2 bg-transparent mb-6 overflow-x-auto scrollbar-none">
          <TabsTrigger value="cro" className="text-lg border border-[#4A5568] bg-[#1E293B] data-[state=active]:bg-primary data-[state=active]:border-primary">
            CRO Feedback
          </TabsTrigger>
          <TabsTrigger value="seo" className="text-lg border border-[#4A5568] bg-[#1E293B] data-[state=active]:bg-primary data-[state=active]:border-primary">
            SEO Audit
          </TabsTrigger>
          <TabsTrigger value="performance" className="text-lg border border-[#4A5568] bg-[#1E293B] data-[state=active]:bg-primary data-[state=active]:border-primary">
            Performance
          </TabsTrigger>
          <TabsTrigger value="copywriting" className="text-lg border border-[#4A5568] bg-[#1E293B] data-[state=active]:bg-primary data-[state=active]:border-primary">
            Copywriting
          </TabsTrigger>
          <TabsTrigger value="competitive" className="text-lg border border-[#4A5568] bg-[#1E293B] data-[state=active]:bg-primary data-[state=active]:border-primary">
            Competitive
          </TabsTrigger>
          <TabsTrigger value="quickWins" className="text-lg border border-[#4A5568] bg-[#1E293B] data-[state=active]:bg-primary data-[state=active]:border-primary">
            Quick Wins
          </TabsTrigger>
          <TabsTrigger value="deeperImprovements" className="text-lg border border-[#4A5568] bg-[#1E293B] data-[state=active]:bg-primary data-[state=active]:border-primary">
            Deeper Improvements
          </TabsTrigger>
          <TabsTrigger value="impact" className="text-lg border border-[#4A5568] bg-[#1E293B] data-[state=active]:bg-primary data-[state=active]:border-primary">
            CRO Impact
          </TabsTrigger>
          <TabsTrigger value="resources" className="text-lg border border-[#4A5568] bg-[#1E293B] data-[state=active]:bg-primary data-[state=active]:border-primary">
            Resources
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="cro">
          <CROResults analysisType={analysisType} />
        </TabsContent>
        
        <TabsContent value="seo">
          <SEOResults analysisType={analysisType} />
        </TabsContent>
        
        <TabsContent value="performance">
          <PerformanceResults analysisType={analysisType} />
        </TabsContent>
        
        <TabsContent value="copywriting">
          <CopywritingResults />
        </TabsContent>
        
        <TabsContent value="competitive">
          <CompetitiveResults analysisType={analysisType} />
        </TabsContent>
        
        <TabsContent value="quickWins">
          <QuickWinsResults analysisType={analysisType} />
        </TabsContent>
        
        <TabsContent value="deeperImprovements">
          <DeeperImprovementsResults analysisType={analysisType} />
        </TabsContent>
        
        <TabsContent value="impact">
          <ImpactResults analysisType={analysisType} />
        </TabsContent>
        
        <TabsContent value="resources">
          <ResourcesResults analysisType={analysisType} />
        </TabsContent>
      </Tabs>

      <Card className="bg-gradient-to-br from-[#1E293B] to-[#2D3748] border-[#4A5568] shadow-xl mt-8">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0] flex items-center">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            AutoCRO Pro
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-[#E2E8F0] mb-2">Unlock all premium features</h3>
              <p className="text-lg text-[#94A3B8]">See all recommendations, get weekly reports, and access our AI-powered optimization suite.</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-8">
              Upgrade to Pro
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 border-t border-[#4A5568] pt-8">
        <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Coming Soon</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-[#4A5568] rounded-lg bg-[#1E293B]/50 flex items-center">
            <PlusCircle className="h-5 w-5 text-[#94A3B8] mr-3" />
            <span className="text-lg text-[#94A3B8]">Compare multiple pages side-by-side</span>
          </div>
          <div className="p-4 border border-[#4A5568] rounded-lg bg-[#1E293B]/50 flex items-center">
            <PlusCircle className="h-5 w-5 text-[#94A3B8] mr-3" />
            <span className="text-lg text-[#94A3B8]">Weekly summary email reports</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
