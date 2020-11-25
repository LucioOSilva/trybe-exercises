/*
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto,
calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a
deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,00 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
*/

let salario, salarioInss, ir, salarioFinal, salarioBase;
salario = 3000; //alterar futuramente para console read

salarioInss = calculaInss(salario);
ir = calculaIr(salarioInss);
salarioFinal = salarioInss - ir;
console.log(salarioFinal);

//calcula inss
function calculaInss(salarioBase){
    if (salarioBase < 1556.94){
        return salarioBase -(salarioBase * 0.08);
        
    }
    else if (salarioBase < 2594.92){
        return salarioBase - (salarioBase * 0.09);
    }
    else if (salarioBase < 5189.82){
        return salarioBase - (salarioBase * 0.11);
    }
    else {
        return salarioBase - 570.88;
    }
}

function calculaIr(salarioBase){
    if (salarioBase < 1903.98){
        return 0;
    }
    else if (salarioBase <2826.65){
        return salarioBase * 0.075;
    }
    else if (salarioBase < 3751.05){
        return salarioBase * 0.150;
    }
    else if (salarioBase < 4664.68){
        return salarioBase * 0.225;
    }
    else {
        return salarioBase * 0.275;
    }
}