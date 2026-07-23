class GAM {

    constructor(){
        this.seed = Date.now() % 999999;
    }

    // γ∞ – Zufallsvektor
    gamma(){
        this.seed = (this.seed * 73 + 91) % 9973;
        return this.seed;
    }

    // GATE – Zustands-Tor
    gate(value){
        return {
            in: value,
            out: (value * 7 + this.gamma()) % 9999
        };
    }

    // GAMBLE – mathematische Variation (kein Glücksspiel)
    variation(x){
        return {
            base: x,
            delta: this.gamma() % 33,
            result: x + (this.gamma() % 33)
        };
    }
}

window.GAM = new GAM();
