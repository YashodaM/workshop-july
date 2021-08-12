document.getElementById('login').addEventListener('click', function(){

    let name= document.getElementById('exampleInputName1').value;
    let email= document.getElementById('exampleInputEmail1').value;
    let passwrd= document.getElementById('exampleInputPassword1').value;

    document.getElementById('name-error').innerText='';
    document.getElementById('email-error').innerText='';
    document.getElementById('password-error').innerText='';

    if(name ==''){
        document.getElementById('name-error').innerText='Name is required';
    } else if(email ==''){
        document.getElementById('email-error').innerText='Email is required';
    } else if(passwrd == ''){
        document.getElementById('password-error').innerText='Password is required';
    } else{
        alert('Logging in....');
    }
}); 