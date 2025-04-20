document.addEventListener('DOMContentLoaded', function() {
    // Unit Converter functionality
    const unitValue = document.getElementById('unitValue');
    const unitFrom = document.getElementById('unitFrom');
    const unitTo = document.getElementById('unitTo');
    const convertedUnit = document.getElementById('convertedUnit');
    const convertUnitBtn = document.getElementById('convertUnitBtn');
    
    // Conversion factors for length
    const lengthFactors = {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        inch: 0.0254,
        foot: 0.3048,
        yard: 0.9144,
        mile: 1609.344
    };
    
    convertUnitBtn.addEventListener('click', function() {
        const value = parseFloat(unitValue.value) || 0;
        const fromUnit = unitFrom.value;
        const toUnit = unitTo.value;
        
        // Convert to meters first
        const meters = value * lengthFactors[fromUnit];
        // Convert to target unit
        const result = meters / lengthFactors[toUnit];
        
        convertedUnit.value = result.toFixed(6);
    });
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
