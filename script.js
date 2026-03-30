

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();  
    
    // getting inputss
    const p0 = parseFloat(document.getElementById('p0').value);
    const q0 = parseFloat(document.getElementById('q0').value);
    const p1 = parseFloat(document.getElementById('p1').value);
    const q1 = parseFloat(document.getElementById('q1').value);
    
    
    const cp = ((p1 - p0) / p0) * 100;
    const cq = ((q1 - q0) / q0) * 100;
    
    if (cp === 0) {
        alert('Price change cannot be zero ');
        return;
    }
    
    const d = Math.abs(cq / cp);
    
    
    document.getElementById('ela').textContent = d.toFixed(2);

    //conditions for types of elasticity follow: 
    
    const typeEl = document.getElementById('type');
    if (d < 1) {
        typeEl.textContent = 'Inelastic demand';
    } 
    else if (d === 1) {
        typeEl.textContent = 'Unitary elastic demand';
    } 
    else {
        typeEl.textContent = 'Elastic demand';
    }
    
   
    document.getElementById('results').classList.remove('hidden');
});

