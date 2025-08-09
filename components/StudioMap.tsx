import { AnimatedSection } from "./AnimatedSection";

function StudioMap() {
  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-16 tracking-wide">Visit Our Studio</h2>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Coming Soon</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export { StudioMap }