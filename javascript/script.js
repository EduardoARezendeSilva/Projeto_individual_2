function calcular() 
{
    const nome = document.getElementById('nome').value;
    const produto = document.getElementById('produto').value;
    const salario = document.getElementById('salario').value;
    const entrada = document.getElementById('entrada').value;
    const juros = document.getElementById('juros').value;
    const prestacao = document.getElementById('prestacao').value;
    const resulatdo = document.getElementById('resultado');

    if (nome !== "" || produto !== "" || salario !== "" || entrada !== "" || juros !== "" || prestacao !== "")
    {
        
        const valor_max = salario * 0.3;
        
        const porcentagem = juros/100;

        const financiado = produto - entrada;

        const pmt = (financiado * ((((1 + porcentagem) ** prestacao) * (porcentagem)) / (((1 + porcentagem) ** prestacao) - (1)))).toFixed(2);

        if(pmt > valor_max)
        {       
            
            var i = Number.parseInt(prestacao) + 1

            for(; ; i++)
            {
                

                pmt_novo = (financiado * ((((1 + porcentagem) ** i) * (porcentagem)) / (((1 + porcentagem) ** i) - (1)))).toFixed(2);

                resulatdo.textContent = "Carregando...";

                if(pmt_novo > valor_max)
                { 

                }
                else 
                {
                    resulatdo.textContent = "O cliente " + nome + " teve seu credito recusado para aduirir o produto de valor R$" + produto + " tendo um salario R$" + salario + " com uma entrada de R$" + entrada + "assim ele precisara financiar em " + i + " parcelas de R$" + pmt_novo + " invez de " + prestacao + " parcelas de R$" + pmt;
                    break;
                }
            }
        }
        else
        {
            resulatdo.textContent = "O cliente " + nome + " teve seu credito aprovado para aduirir o produto de valor R$" + produto + " tendo um salario R$" + salario + " com uma entrada de R$" + entrada + " parcelando em " + prestacao + " parcelas de R$" + pmt;
        }
    }
    else
    {
        window.alert("Preencha todos os campos");
    }
}