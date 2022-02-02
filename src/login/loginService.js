function validateEmailPassword(email, password){
    console.log(`email:${email}, password:${password}`);
    if(email === "tyler" && password === "test"){
        return true;
    }
    throw("password username mismatch");
}

export {validateEmailPassword};