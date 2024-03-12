// Home.tsx
import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-center">Soy Felipe</h1>
        <h2 className="text-center">TI03SM-22</h2>
        <Image
          src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/11/last-us-parte-ii-arte-conceptual_1.jpg?tf=1200x"
          alt="The Last of Us"
          width={1200}
          height={800}
        />
        <p className="text-center">The Last of Us - Bosque</p>
      </div>
    </main>
  );
};

export default Home;
