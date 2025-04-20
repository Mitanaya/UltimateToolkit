document.addEventListener('DOMContentLoaded', function() {
    // Mortgage Calculator functionality
    const calculateMortgageBtn = document.getElementById('calculateMortgageBtn');
    if (calculateMortgageBtn) {
        calculateMortgageBtn.addEventListener('click', function() {
            const loanAmount = parseFloat(document.getElementById('loanAmount').value) || 0;
            const downPayment = parseFloat(document.getElementById('downPayment').value) || 0;
            const interestRate = parseFloat(document.getElementById('interestRate').value) || 0;
            const loanTerm = parseFloat(document.getElementById('loanTerm').value) || 0;
            
            const principal = loanAmount - downPayment;
            const monthlyRate = interestRate / 100 / 12;
            const payments = loanTerm * 12;
            
            // Calculate monthly payment
            const x = Math.pow(1 + monthlyRate, payments);
            const monthly = (principal * x * monthlyRate) / (x - 1);
            
            // Calculate totals
            const totalPayment = monthly * payments;
            const totalInterest = totalPayment - principal;
            
            // Display results
            document.getElementById('monthlyPayment').textContent = formatCurrency(monthly);
            document.getElementById('totalInterest').textContent = formatCurrency(totalInterest);
            document.getElementById('totalPayment').textContent = formatCurrency(totalPayment);
        });
    }
    
    // Currency formatter
    function formatCurrency(amount) {
        return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
