export const HeroBanner = () => {
  return (
    <div className="bg-[#EFF2F6] dark:bg-black py-16 px-8 rounded-3xl mb-12 relative overflow-hidden">
      <div className="flex items-center justify-between max-w-6xl mx-auto gap-16">
        <div className="flex-1 max-w-lg">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 leading-tight">Get started with Contentful</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Learn the basics and get up and running with Contentful across a variety of 
            common frameworks. Our docs will help you set up your first project in no time.
          </p>
          <button className="block w-fit bg-transparent text-gray-700 dark:text-gray-300 px-6 py-3 border-2 border-gray-700 dark:border-gray-300 rounded-full text-base font-medium cursor-pointer transition-all duration-200 mt-4 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:-translate-y-px">Start building</button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img 
            src="/images/hero.png" 
            alt="Hero visual showing code snippets and UI elements" 
            className="max-w-full h-auto max-h-80"
          />
        </div>
      </div>
    </div>
  );
};
