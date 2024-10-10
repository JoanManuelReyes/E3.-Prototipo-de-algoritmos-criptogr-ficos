document.getElementById('btnCifrar').addEventListener('click', function() {
    const clave = document.getElementById('claveCifrado').value;
    const mensaje = document.getElementById('mensajeCifrado').value;
    const mensajeCifrado = CryptoJS.AES.encrypt(mensaje, clave).toString();
    document.getElementById('mensajeCifradoResultado').value = mensajeCifrado;
});

document.getElementById('btnDescifrar').addEventListener('click', function() {
    const clave = document.getElementById('claveDescifrado').value;
    const mensajeCifrado = document.getElementById('mensajeDescifrado').value;
    const bytes = CryptoJS.AES.decrypt(mensajeCifrado, clave);
    const mensajeDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById('mensajeDescifradoResultado').value = mensajeDescifrado;
});
