let passengers = Number(prompt('Insira o número de passageiros no vôo 70924(CHG-BSB) Azul Linhas Aéreas Inteligentes:  '))

let air74 = ('ATR-72')
let air144 = ('Embrear E-195 E2')
let air165 = ('Airbus A320 Neo')
let air220 = ('Airbus A321')
let air298 = ('Airbus A330-900 Neo')


if (passengers <= 74) {
    alert(`Número de passageiros: ${passengers}. Aeronave solicitada:${air74} `)
}else if (passengers > 75 && passengers <= 144) {
    alert(`Número de passageiros: ${passengers}. Aeronave solicitada:${air144} `)
}else if (passengers > 144 && passengers <= 165) {
    alert(`Número de passageiros: ${passengers}. Aeronave solicitada:${air165} `)
}else if (passengers > 165 && passengers <= 220) {
    alert(`Número de passageiros: ${passengers}. Aeronave solicitada:${air220} `)
}else if (passengers > 220 && passengers <= 298) {
    alert(`Número de passageiros: ${passengers}. Aeronave solicitada:${air298} `)
} else {
    alert(`Número de passageiros superior a capacidade máxima as das aeronaves disponíveis. Encaminhar para Departamento Autorizado.`)
}