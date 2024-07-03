// pages/NutritionalPage.tsx

import NutritionalAnalysis from '../api/nutrition-analysis';

const NutritionalPage: React.FC = () => {
  return (
    <div className="nutrition-page">
      <h2>Nutritional Analysis</h2>
      <NutritionalAnalysis />
    </div>
  );
};

export default NutritionalPage;
