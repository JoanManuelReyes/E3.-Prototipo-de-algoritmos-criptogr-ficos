let publicKey, privateKey;

document.getElementById('btnGenerarClave').addEventListener('click', function() {
    const keys = forge.pki.rsa.generateKeyPair(2048);
    publicKey = forge.pki.publicKeyToPem(keys.publicKey);
    privateKey = forge.pki.privateKeyToPem(keys.privateKey);

    document.getElementById('clavePublica').value = publicKey;
    document.getElementById('clavePrivada').value = privateKey;
    document.getElementById('clavePublicaEncriptar').value = publicKey;
    document.getElementById('clavePrivadaDesencriptar').value = privateKey;
});

document.getElementById('btnEncriptar').addEventListener('click', function() {
    const mensajeAEncriptar = document.getElementById('mensajeAEncriptar').value;

    const encrypted = forge.pki.publicKeyFromPem(publicKey).encrypt(mensajeAEncriptar);
    const mensajeEncriptado = forge.util.encode64(encrypted);

    document.getElementById('mensajeEncriptado').value = mensajeEncriptado;
});

document.getElementById('btnDesencriptar').addEventListener('click', function() {
    const mensajeADesencriptar = document.getElementById('mensajeADesencriptar').value;
    const decoded = forge.util.decode64(mensajeADesencriptar);
    const decrypted = forge.pki.privateKeyFromPem(privateKey).decrypt(decoded);
    document.getElementById('mensajeDesencriptado').value = decrypted;
});
