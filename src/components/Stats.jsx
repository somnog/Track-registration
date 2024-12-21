const Stats = () => {
    const stats = [
      { id: 1, label: "Tracks", value: 10 },
      { id: 2, label: "Students", value: 500 },
      { id: 3, label: "Careers Launched", value: 200 },
    ];
  
    return (
      <div className="bg-white py-10">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="p-6">
                <h3 className="text-5xl font-bold text-primary">{stat.value}+</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Stats;
  