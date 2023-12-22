

const TargetAudience = () => {
  const audienceData = [
    {
      title: 'Developers',
      description: 'Enhance your project management and collaboration skills. Organize tasks efficiently and track your progress.',
    },
    {
      title: 'Corporate Professionals',
      description: 'Streamline your workflow, manage tasks effectively, and improve team collaboration for successful project outcomes.',
    },
    {
      title: 'Bankers',
      description: 'Keep track of financial tasks, deadlines, and priorities. Improve task management and boost productivity in your financial projects.',
    },
    // Add more audience data as needed
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Who Can Benefit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audienceData.map((audience, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
