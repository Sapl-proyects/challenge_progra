// Función para validar que solo se acepten minúsculas, números y espacios usando la tabla Unicode
function validarInput(input) {
    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i);
        
        // Verifica si el carácter no es una letra minúscula (a-z), número (0-9) o espacio ( )
        if (
            !(charCode >= 97 && charCode <= 122) &&  // a-z
            !(charCode >= 48 && charCode <= 57) &&   // 0-9
            charCode !== 32                          // espacio
        ) {
            return false; // Si encuentra un carácter no permitido, retorna falso
        }
    }
    return true; // Si todos los caracteres son válidos, retorna verdadero
}

// Función para encriptar el texto (simplemente desplaza el código ASCII)
function encryptText() {
    const input = document.getElementById('inputText').value;

    // Verifica si el input contiene caracteres no permitidos
    if (!validarInput(input)) {
        alert('Mayúsculas y caracteres especiales no están permitidos');
        return; // Detiene el proceso de encriptado
    }

    let encrypted = '';
    for (let i = 0; i < input.length; i++) {
        encrypted += String.fromCharCode(input.charCodeAt(i) + 3);
    }
    document.getElementById('resultText').value = encrypted;
}

// Función para desencriptar el texto (reversa el desplazamiento)
function decryptText() {
    const input = document.getElementById('inputText').value;

    // Verifica si el input contiene caracteres no permitidos
    if (!validarInput(input)) {
        alert('Mayúsculas y caracteres especiales no están permitidos');
        return; // Detiene el proceso de desencriptado
    }

    let decrypted = '';
    for (let i = 0; i < input.length; i++) {
        decrypted += String.fromCharCode(input.charCodeAt(i) - 3);
    }
    document.getElementById('resultText').value = decrypted;
}

// Función para copiar el texto del área de resultado al portapapeles usando al API del portapales.
async function copyText() {
    const resultText = document.getElementById('resultText').value;

    try {
        await navigator.clipboard.writeText(resultText);
        alert('Texto copiado al portapapeles');
    } catch (err) {
        alert('No se pudo copiar el texto al portapapeles');
        console.error('Error al copiar al portapapeles:', err);
    }
}