let media = 5.2 , resultado

/*sem operador ternario
if(media >= 6){
    resultado='Aprovado'
}
else{
    resultado='Reprovado'
}*/

//operador ternario

resultado=media>=6?'Aprovado':'Reprovado'

console.log({media, resultado})

let user = 'admin', msg

/*sem operador ternario
if(user==='admin')msg='Bem vindo'
else msg='Sem permissão'*/

//operador ternario
msg= user==='admin'?'Bem-vindo':'Sem permissão'

console.log({user, msg})