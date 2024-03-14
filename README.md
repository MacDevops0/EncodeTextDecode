Este é um projeto simples sugerido pela Alura que consiste na criação de uma aplicação web para criptografar um texto original e em seguida poder descriptogra-lo de volta ao original.

Aqui está a lógica por trás das funções encodeText e decodeText:

    A função encodeText recebe o texto a ser codificado como entrada.
    É definido um deslocamento fixo de 3 posições no alfabeto (shift = 3).
    Um loop percorre cada caractere do texto.
    Para cada caractere, verificamos se é uma letra (maiúscula ou minúscula) usando uma expressão regular /[a-z]/i.

    Se for uma letra, obtemos o código ASCII do caractere usando charCodeAt.
    Dependendo se é uma letra maiúscula ou minúscula, aplicamos a fórmula da cifra de César para obter o novo código ASCII deslocado shift posições no alfabeto.
    Convertemos o novo código ASCII de volta para um caractere usando String.fromCharCode.
    O caractere codificado é adicionado à string encoded.
    Após o loop, a string encoded contém o texto codificado.
    A função decodeText segue a mesma lógica, mas com a fórmula de deslocamento invertida para decodificar o texto.

Com essa implementação, quando você digitar um texto no campo de entrada e clicar em "Codificar", o texto será codificado usando a cifra de César com um deslocamento de 3 posições no alfabeto.
Ao clicar em "Descodificar", o texto codificado será decodificado de volta ao texto original.

Observe que essa é apenas uma implementação simples da cifra de César para fins de exemplo. Em aplicações reais, você pode querer usar algoritmos de criptografia mais seguros e robustos.
