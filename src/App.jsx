import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechGrid from './components/TechGrid';
import StackSidebar from './components/StackSidebar';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load technology data');
        }
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        toast.error('Could not load technologies data');
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const alreadyExists = stack.some((item) => item.id === tech.id);

    if (alreadyExists) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'bottom-right',
      });
      return;
    }

    setStack((prevStack) => [...prevStack, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: 'bottom-right',
    });
  };

  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prevStack) => prevStack.filter((item) => item.id !== id));
    
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from your stack`, {
        position: 'bottom-right',
      });
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('Cleared all technologies from your stack', {
      position: 'bottom-right',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      <ToastContainer autoClose={2500} hideProgressBar={false} />

      <Navbar />

      <main className="flex-grow">

        <Banner />

        <section id="technologies" className="max-w-7xl mx-auto px-4 lg:px-12 py-8">
          {loading ? (

            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Explore Technologies
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Choose technologies to add to your custom stack.
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
                    {technologies.length} Items Available
                  </span>
                </div>

                <TechGrid
                  technologies={technologies}
                  stack={stack}
                  onAddToStack={handleAddToStack}
                />
              </div>

              <div className="lg:col-span-1 lg:sticky lg:top-24">

                <StackSidebar
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;