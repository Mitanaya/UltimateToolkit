document.addEventListener('DOMContentLoaded', function() {
    // BMI Calculator functionality
    const calculateBmiBtn = document.getElementById('calculateBmiBtn');
    const metricSystem = document.getElementById('metricSystem');
    const imperialSystem = document.getElementById('imperialSystem');
    
    // Toggle between metric and imperial inputs
    [metricSystem, imperialSystem].forEach(radio => {
        radio.addEventListener('change', function() {
            document.querySelectorAll('.metric-inputs').forEach(el => {
                el.style.display = this.value === 'metric' ? 'block' : 'none';
            });
            document.querySelectorAll('.imperial-inputs').forEach(el => {
                el.style.display = this.value === 'imperial' ? 'block' : 'none';
            });
        });
    });
    
    calculateBmiBtn.addEventListener('click', function() {
        let height, weight, bmi;
        
        if (metricSystem.checked) {
            height = parseFloat(document.getElementById('heightCm').value) / 100; // Convert cm to m
            weight = parseFloat(document.getElementById('weightKg').value);
        } else {
            const feet = parseFloat(document.getElementById('heightFt').value);
            const inches = parseFloat(document.getElementById('heightIn').value);
            height = (feet * 12 + inches) * 0.0254; // Convert to meters
            weight = parseFloat(document.getElementById('weightLbs').value) * 0.453592; // Convert to kg
        }
        
        if (height > 0 && weight > 0) {
            bmi = weight / (height * height);
            document.getElementById('bmiResult').textContent = bmi.toFixed(1);
            
            // Determine category
            let category;
            if (bmi < 18.5) category = 'Underweight';
            else if (bmi < 25) category = 'Normal weight';
            else if (bmi < 30) category = 'Overweight';
            else category = 'Obesity';
            
            document.getElementById('bmiCategory').textContent = category;
        }
    });
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
