const API_BASE_URL = 'http://localhost:8081/api';

// DOM Elements
const soilAnalysisForm = document.getElementById('soilAnalysisForm');
const analysisTableBody = document.getElementById('analysisTableBody');
const searchFarm = document.getElementById('searchFarm');
const searchLocation = document.getElementById('searchLocation');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadAnalyses();
    setupEventListeners();
});

function setupEventListeners() {
    soilAnalysisForm.addEventListener('submit', handleFormSubmit);
    searchFarm.addEventListener('input', filterAnalyses);
    searchLocation.addEventListener('input', filterAnalyses);
}

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const analysisData = {
        farmName: formData.get('farmName'),
        location: formData.get('location'),
        soilType: formData.get('soilType'),
        cropType: formData.get('cropType'),
        nitrogen: parseFloat(formData.get('nitrogen')),
        phosphorus: parseFloat(formData.get('phosphorus')),
        potassium: parseFloat(formData.get('potassium')),
        ph: parseFloat(formData.get('ph')),
        testingMethod: formData.get('testingMethod'),
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch(`${API_BASE_URL}/analyses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(analysisData)
        });

        if (!response.ok) {
            throw new Error('Failed to submit analysis');
        }

        showNotification('Analysis submitted successfully!', 'success');
        event.target.reset();
        loadAnalyses();
    } catch (error) {
        console.error('Error submitting analysis:', error);
        showNotification('Failed to submit analysis. Please try again.', 'error');
    }
}

async function loadAnalyses() {
    try {
        const response = await fetch(`${API_BASE_URL}/analyses`);
        if (!response.ok) {
            throw new Error('Failed to fetch analyses');
        }

        const analyses = await response.json();
        displayAnalyses(analyses);
    } catch (error) {
        console.error('Error loading analyses:', error);
        showNotification('Failed to load analyses. Please refresh the page.', 'error');
    }
}

function displayAnalyses(analyses) {
    analysisTableBody.innerHTML = '';
    
    analyses.forEach(analysis => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${escapeHtml(analysis.farmName)}</td>
            <td>${escapeHtml(analysis.location)}</td>
            <td>${escapeHtml(analysis.soilType)}</td>
            <td>${analysis.nitrogen}-${analysis.phosphorus}-${analysis.potassium}</td>
            <td>${analysis.ph}</td>
            <td>${formatDate(analysis.timestamp)}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editAnalysis('${analysis.id}')">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteAnalysis('${analysis.id}')">Delete</button>
            </td>
        `;
        analysisTableBody.appendChild(row);
    });
}

function filterAnalyses() {
    const farmFilter = searchFarm.value.toLowerCase();
    const locationFilter = searchLocation.value.toLowerCase();
    
    const rows = analysisTableBody.getElementsByTagName('tr');
    
    Array.from(rows).forEach(row => {
        const farmName = row.cells[0].textContent.toLowerCase();
        const location = row.cells[1].textContent.toLowerCase();
        
        const matchesFarm = farmName.includes(farmFilter);
        const matchesLocation = location.includes(locationFilter);
        
        row.style.display = matchesFarm && matchesLocation ? '' : 'none';
    });
}

async function deleteAnalysis(id) {
    if (!confirm('Are you sure you want to delete this analysis?')) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/analyses/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete analysis');
        }

        showNotification('Analysis deleted successfully!', 'success');
        loadAnalyses();
    } catch (error) {
        console.error('Error deleting analysis:', error);
        showNotification('Failed to delete analysis. Please try again.', 'error');
    }
}

async function editAnalysis(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/analyses/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch analysis details');
        }

        const analysis = await response.json();
        populateForm(analysis);
    } catch (error) {
        console.error('Error fetching analysis details:', error);
        showNotification('Failed to load analysis details. Please try again.', 'error');
    }
}

function populateForm(analysis) {
    const form = document.getElementById('soilAnalysisForm');
    form.farmName.value = analysis.farmName;
    form.location.value = analysis.location;
    form.soilType.value = analysis.soilType;
    form.cropType.value = analysis.cropType;
    form.nitrogen.value = analysis.nitrogen;
    form.phosphorus.value = analysis.phosphorus;
    form.potassium.value = analysis.potassium;
    form.ph.value = analysis.ph;
    form.testingMethod.value = analysis.testingMethod;
    
    // Scroll to form
    form.scrollIntoView({ behavior: 'smooth' });
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
} 