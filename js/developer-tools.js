document.addEventListener('DOMContentLoaded', function() {
    // HTML Formatter
    const formatHtmlBtn = document.getElementById('formatHtmlBtn');
    if (formatHtmlBtn) {
        formatHtmlBtn.addEventListener('click', function() {
            const htmlInput = document.getElementById('htmlInput').value;
            if (htmlInput.trim() === '') {
                alert('Please enter HTML code to format');
                return;
            }
            
            try {
                // In a real implementation, you would use a proper HTML formatter library
                // This is a simplified version for demonstration
                const formatted = htmlInput
                    .replace(/</g, '\n<')
                    .replace(/>/g, '>\n')
                    .replace(/\n+/g, '\n')
                    .trim();
                
                document.getElementById('htmlOutput').value = formatted;
            } catch (e) {
                alert('Error formatting HTML: ' + e.message);
            }
        });
    }
    
    const clearHtmlBtn = document.getElementById('clearHtmlBtn');
    if (clearHtmlBtn) {
        clearHtmlBtn.addEventListener('click', function() {
            document.getElementById('htmlInput').value = '';
            document.getElementById('htmlOutput').value = '';
        });
    }
    
    // JavaScript Validator (simplified)
    const validateJsBtn = document.getElementById('validateJsBtn');
    if (validateJsBtn) {
        validateJsBtn.addEventListener('click', function() {
            const jsInput = document.getElementById('jsInput').value;
            if (jsInput.trim() === '') {
                alert('Please enter JavaScript code to validate');
                return;
            }
            
            try {
                // In a real implementation, you would use a proper JS validator
                // This just checks for basic syntax errors
                new Function(jsInput);
                document.getElementById('jsValidationResult').innerHTML = 
                    '<div class="success">✓ Valid JavaScript code</div>';
            } catch (e) {
                document.getElementById('jsValidationResult').innerHTML = 
                    `<div class="error">✗ Error: ${e.message}</div>`;
            }
        });
    }
    
    const clearJsBtn = document.getElementById('clearJsBtn');
    if (clearJsBtn) {
        clearJsBtn.addEventListener('click', function() {
            document.getElementById('jsInput').value = '';
            document.getElementById('jsValidationResult').innerHTML = '';
        });
    }
    
    // Password Generator
    const generatePasswordBtn = document.getElementById('generatePasswordBtn');
    if (generatePasswordBtn) {
        generatePasswordBtn.addEventListener('click', function() {
            const length = parseInt(document.getElementById('passwordLength').value) || 12;
            const includeUppercase = document.getElementById('includeUppercase').checked;
            const includeLowercase = document.getElementById('includeLowercase').checked;
            const includeNumbers = document.getElementById('includeNumbers').checked;
            const includeSymbols = document.getElementById('includeSymbols').checked;
            
            let charset = '';
            if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
            if (includeNumbers) charset += '0123456789';
            if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
            
            if (charset === '') {
                alert('Please select at least one character set');
                return;
            }
            
            let password = '';
            for (let i = 0; i < length; i++) {
                password += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            
            document.getElementById('passwordOutput').value = password;
        });
    }
    
    const copyPasswordBtn = document.getElementById('copyPasswordBtn');
    if (copyPasswordBtn) {
        copyPasswordBtn.addEventListener('click', function() {
            const passwordOutput = document.getElementById('passwordOutput');
            if (passwordOutput.value.trim() === '') {
                alert('No password to copy');
                return;
            }
            
            passwordOutput.select();
            document.execCommand('copy');
            alert('Password copied to clipboard!');
        });
    }
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const container = this.closest('.tool-container');
            
            // Update active tab
            container.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Update input placeholder based on tab
            const input = container.querySelector('textarea');
            if (input) {
                input.placeholder = tabId === 'encode' ? 
                    'Enter text to encode or upload a file...' : 
                    'Enter Base64 to decode...';
            }
        });
    });
    
    // QR Size value display
    const qrSize = document.getElementById('qrSize');
    if (qrSize) {
        const qrSizeValue = document.getElementById('qrSizeValue');
        qrSizeValue.textContent = qrSize.value + 'px';
        
        qrSize.addEventListener('input', function() {
            qrSizeValue.textContent = this.value + 'px';
        });
    }
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
