document.addEventListener('DOMContentLoaded', function() {
    // Color Picker functionality
    const colorSelector = document.getElementById('colorSelector');
    const hexValue = document.getElementById('hexValue');
    const rgbValue = document.getElementById('rgbValue');
    const hslValue = document.getElementById('hslValue');
    const colorPreview = document.getElementById('colorPreview');
    
    colorSelector.addEventListener('input', function() {
        const color = this.value;
        hexValue.value = color;
        
        // Convert HEX to RGB
        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);
        rgbValue.value = `rgb(${r}, ${g}, ${b})`;
        
        // Convert RGB to HSL
        const hsl = rgbToHsl(r, g, b);
        hslValue.value = `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;
        
        // Update preview
        colorPreview.style.backgroundColor = color;
    });
    
    // Gradient Generator functionality
    const gradientColor1 = document.getElementById('gradientColor1');
    const gradientColor2 = document.getElementById('gradientColor2');
    const gradientDirection = document.getElementById('gradientDirection');
    const gradientPreview = document.getElementById('gradientPreview');
    const gradientCss = document.getElementById('gradientCss');
    
    function updateGradient() {
        const direction = gradientDirection.value;
        const color1 = gradientColor1.value;
        const color2 = gradientColor2.value;
        
        let gradient;
        if (direction === 'circle') {
            gradient = `radial-gradient(circle, ${color1}, ${color2})`;
        } else {
            gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
        }
        
        gradientPreview.style.background = gradient;
        gradientCss.value = `background: ${gradient};`;
    }
    
    // Add event listeners for all gradient controls
    [gradientColor1, gradientColor2, gradientDirection].forEach(control => {
        control.addEventListener('input', updateGradient);
    });
    
    // Initialize
    updateGradient();
    
    // Helper function to convert RGB to HSL
    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
    
        if (max === min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
    
        return {
            h: h * 360,
            s: s * 100,
            l: l * 100
        };
    }
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
