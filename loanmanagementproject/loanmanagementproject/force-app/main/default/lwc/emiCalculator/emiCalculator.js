import { LightningElement, track } from 'lwc';

export default class EmiCalculator extends LightningElement {
    @track loanAmount;
    @track interestRate;
    @track tenure;
    @track emi;

    handleAmount(event) {
        this.loanAmount = event.target.value;
    }
    handleRate(event) {
        this.interestRate = event.target.value;
    }
    handleTenure(event) {
        this.tenure = event.target.value;
    }

    calculateEMI() {
        const P = parseFloat(this.loanAmount);
        const R = parseFloat(this.interestRate) / 1200;
        const N = parseFloat(this.tenure);
        if (!P || !R || !N) {
            this.emi = 0;
            return;
        }
        const pow = Math.pow(1 + R, N);
        const emiVal = (P * R * pow) / (pow - 1);
        this.emi = emiVal.toFixed(2);
    }
}
