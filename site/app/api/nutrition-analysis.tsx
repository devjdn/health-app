'use client';

import { useState, useEffect } from 'react';
import Chart, { ChartConfiguration, TooltipItem } from 'chart.js/auto';

// Define the type for Chart.js instance
type barChartInstance = Chart<"bar", any[], string> | null;
type pieChartInstance = Chart<"pie", any[], string> | null;

// Functional component definition
const NutritionalAnalysis: React.FC = () => {
  // State variables
  const [searchTerm, setSearchTerm] = useState<string>(''); // State to hold user input
  const [nutritionData, setNutritionData] = useState<any>(null); // State to hold API response data
  const [error, setError] = useState<string>(''); // State to hold error message
  const [barChart, setbarChart] = useState<barChartInstance>(null); // State to hold Chart.js instance
  const [pieChart, setpieChart] = useState<pieChartInstance>(null); // State to hold Chart.js instance


  const APP_ID = 'bae44c85';
  const APP_KEY = 'd1603c32a821edea5a8bf66add055498';

  const fetchData = async () => {
    try {
      const response = await fetch(
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

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.trim() === '') {
      setError('Please enter a valid search term.');
      return;
    }

    fetchData();
  };


  useEffect(() => {
    if (nutritionData) {
      renderBarChart();
      renderPieChart();
    }
  }, [nutritionData]);

  const renderBarChart = () => {

    const nutrients = nutritionData.totalNutrients; // Extract total nutrients data

    const nutrientLabels = Object.keys(nutrients); // Get labels for nutrients

    const nutrientData = nutrientLabels.map((key) => nutrients[key].quantity.toFixed(2)); // Map nutrient quantities and format to 2 decimal places


    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    if (!ctx) return;

    if (barChart) {
      barChart.destroy();
    }

    // Configuration object for Chart.js pie chart
    const chartConfig: ChartConfiguration<'bar', any[], string> = {
      type: 'bar',
      data: {
        labels: nutrientLabels, // Labels for chart slices
        datasets: [{
          data: nutrientData,
          backgroundColor: [
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
            'rgba(0, 0, 0, 0.6)', 
            'rgba(128, 128, 128, 0.6)', 
            'rgba(255, 0, 0, 0.6)', 
            'rgba(0, 255, 0, 0.6)', 
          ],
          borderWidth: 0, 
        }],
      },
      options: { 
        responsive: true, 
        plugins: { 
          legend: { 
            display: false,
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

  const renderPieChart = () => {

    const nutrients = nutritionData.totalNutrients; // Extract total nutrients data

    const nutrientLabels = Object.keys(nutrients); // Get labels for nutrients

    const nutrientData = nutrientLabels.map((key) => nutrients[key].quantity.toFixed(2)); // Map nutrient quantities and format to 2 decimal places


    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    if (!ctx) return;

    if (pieChart) {
      pieChart.destroy();
    }

    const chartConfig: ChartConfiguration<'pie', any[], string> = {
      type: 'pie',
      data: {
        labels: nutrientLabels,
        datasets: [{
          data: nutrientData,
          backgroundColor: [
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
            'rgba(0, 0, 0, 0.6)', 
            'rgba(128, 128, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)', 
          ],
          borderWidth: 0, 
        }],
      },
      options: { 
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          tooltip: { // Tooltip plugin configuration
            callbacks: { // Callbacks for tooltip labels
              label: (tooltipItem: TooltipItem<'pie'>) => {
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

    setpieChart(chart); // Save chart instance to state

    };
  

  // JSX for component rendering
  return (
    <section className="nutritional-analysis">
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
          <div className="intro">
            <h3>Nutritional analysis data for {searchTerm}</h3>
          </div>
          <div className="data-canvas-container">
            <canvas id="barChart"></canvas>
            <canvas id="pieChart"></canvas>
          </div>
        </div>
      )}
    </section>
  );
};

export default NutritionalAnalysis; // Export component
