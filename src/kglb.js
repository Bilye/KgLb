
export function KgtoLb (kg) {
    const lb = 2.205
    let resultado = kg*lb
    return parseFloat(resultado.toFixed(1))
}

export function LbtoKg (lb) {
    const kg = 0.454
    let resultado = lb*kg
    return parseFloat(resultado.toFixed(1))
}