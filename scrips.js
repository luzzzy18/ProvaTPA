
function calcular(){
    let nome = document.getElementById('nome').value
    let mensal = Number(document.getElementById('rmensal').value)
    let tjuros = Number(document.getElementById('txjuros').value)
    let meses = Number(document.getElementById('nprestacoes').value)
    let juros = tjuros/100
    
    var res = document.getElementById("resultado")
         
    

    // pmt = valor mensal a ser financiado
    var p = ((1+juros)**meses-1)/juros // vf = valor poupado no futuro
    var vf = mensal*p.toFixed(2)
  
        res.innerHTML = `${nome}, se você aplicar R $${mensal}, à taxa de juros de ${tjuros}% ao mês, durante ${meses} meses,
        acumulará uma poupança de R $${vf}`
    
    
}
