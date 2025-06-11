import { jsPDF } from 'jspdf';
import { SoilData, NutrientLevels, FertilizerRecommendation } from "@/types/soil";

export const generatePDFReport = (
  soilData: SoilData,
  nutrientLevels: NutrientLevels,
  recommendations: FertilizerRecommendation[]
) => {
  // Create new PDF document
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let yPos = 20;

  // Add header
  doc.setFontSize(24);
  doc.setTextColor(76, 175, 80); // Green color
  doc.text('Fertile Farms Insights Hub', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 15;
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text('Soil Analysis Report', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 20;

  // Farm Information Section
  doc.setFontSize(16);
  doc.setTextColor(76, 175, 80);
  doc.text('Farm Information', margin, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  const farmInfo = [
    `Farm Name: ${soilData.farmName}`,
    `Field Location: ${soilData.fieldLocation}`,
    `Sample Date: ${new Date(soilData.sampleDate).toLocaleDateString()}`,
    `Crop Type: ${soilData.cropType}`,
    `Soil Type: ${soilData.soilType}`,
    `Testing Method: ${soilData.testingMethod}`
  ];

  farmInfo.forEach(info => {
    doc.text(info, margin, yPos);
    yPos += 8;
  });

  yPos += 10;

  // Nutrient Analysis Section
  doc.setFontSize(16);
  doc.setTextColor(76, 175, 80);
  doc.text('Nutrient Analysis Results', margin, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  const nutrientInfo = [
    `Nitrogen: ${nutrientLevels.nitrogen} mg/kg (${nutrientLevels.status.nitrogen})`,
    `Phosphorus: ${nutrientLevels.phosphorus} mg/kg (${nutrientLevels.status.phosphorus})`,
    `Potassium: ${nutrientLevels.potassium} mg/kg (${nutrientLevels.status.potassium})`,
    `pH Level: ${nutrientLevels.ph} (${nutrientLevels.status.ph})`,
    `Organic Matter: ${nutrientLevels.organicMatter}%`
  ];

  nutrientInfo.forEach(info => {
    doc.text(info, margin, yPos);
    yPos += 8;
  });

  yPos += 10;

  // Recommendations Section
  doc.setFontSize(16);
  doc.setTextColor(76, 175, 80);
  doc.text('Fertilizer Recommendations', margin, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  recommendations.forEach(rec => {
    // Check if we need a new page
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFont(undefined, 'bold');
    doc.text(`${rec.type} (${rec.priority} Priority)`, margin, yPos);
    yPos += 8;
    
    doc.setFont(undefined, 'normal');
    doc.text(`Amount: ${rec.amount}`, margin + 5, yPos);
    yPos += 8;
    doc.text(`Description: ${rec.description}`, margin + 5, yPos);
    yPos += 12;
  });

  // Footer
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Page ${i} of ${totalPages} • Generated on ${new Date().toLocaleDateString()}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }

  // Save the PDF
  doc.save(`soil-analysis-report-${soilData.farmName}-${new Date().toISOString().split('T')[0]}.pdf`);
};
