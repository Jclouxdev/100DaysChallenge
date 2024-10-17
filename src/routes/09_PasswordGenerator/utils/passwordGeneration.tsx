enum Alphabet {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H",
    I = "I",
    J = "J",
    K = "K",
    L = "L",
    M = "M",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    R = "R",
    S = "S",
    T = "T",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z"
}
  

export const passwordGeneration = (size:number):string => {
    let str = ""
    for(let i = 0; i < size; i++) {
        str+=randomOneLetter()
    }
    return str
}

const randomOneLetter = ():Alphabet => {
    const randomIndex = Math.floor(Math.random() * 24) + 1

    const letters = Object.values(Alphabet)
    return letters[randomIndex - 1];
} 