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
  

export const passwordGeneration = (size:number, upper:boolean, lower:boolean, numb:boolean, symbol:boolean):string => {
    let str:string[] = []
    for(let i = 0; i < size; i++) {
        if(upper) str.push(randomOneLetterUppercase())
        if(lower) str.push(randomOneLetterLowercase())
        if(numb) str.push(randomOneToNine().toString())
        if(symbol) str.push(getRandomSymbol())
    }
    return shuffleArray(str).slice(0, size).join("")
}

const randomOneLetterUppercase = ():Alphabet => {
    const randomIndex = Math.floor(Math.random() * 24) + 1
    const letters = Object.values(Alphabet)
    return letters[randomIndex - 1];
}

const randomOneLetterLowercase = ():string => {
    const randomIndex = Math.floor(Math.random() * 24) + 1
    const letters = Object.values(Alphabet)
    return letters[randomIndex - 1].toLocaleLowerCase();
}

const randomOneToNine = ():number => {
    return Math.floor(Math.random() * 9) + 1;
}

const getRandomSymbol = (): string => {
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

const shuffleArray = (array: any[]): any[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}