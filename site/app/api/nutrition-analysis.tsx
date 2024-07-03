'use client';

// Import necessary hooks and components from React and Chart.js
import { useState, useEffect } from 'react';
import Chart, { ChartConfiguration, TooltipItem } from 'chart.js/auto';

// Define the type for Chart.js instance
type barChartInstance = Chart<"bar", any[], string> | null;

// Functional component definition
const NutritionalAnalysis: React.FC = () => {
  // State variables
  const [searchTerm, setSearchTerm] = useState<string>(''); // State to hold user input
  const [nutritionData, setNutritionData] = useState<any>(null); // State to hold API response data
  const [error, setError] = useState<string>(''); // State to hold error message
  const [barChart, setbarChart] = useState<barChartInstance>(null); // State to hold Chart.js instance

  // API credentials
  const APP_ID = 'bae44c85';
  const APP_KEY = 'd1603c32a821edea5a8bf66add055498';

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(
        // Construct API endpoint with search term
        `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=logging&ingr=${encodeURIComponent(searchTerm)}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse response JSON and update state variables
      const data = await response.json();
      setNutritionData(data);
      setError('');
    } catch (error) {
      // Handle errors from API fetch
      setError('There was a problem fetching data from the API.');
      console.error('Fetch Error:', error);
    }
  };

  // Function to handle form submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (searchTerm.trim() === '') {
      setError('Please enter a valid search term.');
      return;
    }

    fetchData(); // Call fetchData function to fetch data from API
  };

  // Effect hook to render pie chart when nutritionData changes
  useEffect(() => {
    if (nutritionData) {
      renderBarChart(); // Render pie chart when nutritionData is updated
    }
  }, [nutritionData]);

  // Function to render or update pie chart
  const renderBarChart = () => {
    const nutrients = nutritionData.totalNutrients; // Extract total nutrients data
    const nutrientLabels = Object.keys(nutrients); // Get labels for nutrients
    const nutrientData = nutrientLabels.map((key) => nutrients[key].quantity.toFixed(2)); // Map nutrient quantities and format to 2 decimal places

    const ctx = document.getElementById('barChart') as HTMLCanvasElement; // Get canvas element for chart
    if (!ctx) return; // Return if canvas element not found

    if (barChart) {
      barChart.destroy(); // Destroy previous chart instance if exists
    }

    // Configuration object for Chart.js pie chart
    const chartConfig: ChartConfiguration<'bar', any[], string> = {
      type: 'bar',
      data: {
        labels: nutrientLabels, // Labels for chart slices
        datasets: [{
          label: 'Nutritional Analysis', // Dataset label
          data: nutrientData, // Data values for chart slices
          backgroundColor: [ // Background colors for chart slices
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 0.6)', // Black with 60% opacity
            'rgba(128, 128, 128, 0.6)', // Gray with 60% opacity
            'rgba(255, 0, 0, 0.6)', // Red with 60% opacity
            'rgba(0, 255, 0, 0.6)', // Green with 60% opacity
          ],
          borderWidth: 0, // Border width for chart slices
        }],
      },
      options: { // Configuration options for Chart.js
        responsive: true, // Make chart responsive
        plugins: { // Chart plugins
          legend: { // Legend plugin configuration
            position: 'top', // Position legend on top
          },
          tooltip: { // Tooltip plugin configuration
            callbacks: { // Callbacks for tooltip labels
              label: (tooltipItem: TooltipItem<'bar'>) => {
                // Format tooltip label with nutrient name and quantity
                const label = tooltipItem.label || '';
                const value = (tooltipItem.raw as number); // Explicitly cast tooltipItem.raw to number and format to 2 decimal places
                return `${label}: ${value}`;
              }
            }
          }
        }
      },
    };

    const chart = new Chart(ctx, chartConfig); // Create new Chart.js instance

    setbarChart(chart); // Save chart instance to state
  };

  // JSX for component rendering
  return (
    <div>
      <form onSubmit={handleSearch}> {/* Form for user input and submission */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a food item"
        />
        <button type="submit">Search</button> {/* Submit button */}
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if error exists */}

      {nutritionData && (
        <div>
          <h2>Nutritional Analysis for {searchTerm}</h2> {/* Title with search term */}
          <div style={{ maxWidth: '100%', margin: '0 auto' }}>
            <canvas id="barChart"></canvas> {/* Canvas element for Chart.js pie chart */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionalAnalysis; // Export component
