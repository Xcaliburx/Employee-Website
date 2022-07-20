function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let error = document.getElementById('errorMsg');
    let valid = true;
    let msg = '';
    
    if(email == '') {
        valid = false;
        msg += 'Email cannot be empty, \n';
    }
    
    if(password == '') {
        valid = false;
        msg += 'Password cannot be empty\n';
    }
    else if(password.length < 8){
        valid = false;
        msg += 'Password must be more than 8 characters\n';
    }

    error.innerHTML = msg;

    if(valid == true){
        let alert = document.getElementById('login');
        alert.style.display = 'block';
    }
}

function register() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confpassword = document.getElementById('confpassword').value;
    let error = document.getElementById('errorMsg');
    let valid = true;
    let msg = '';

    if(name == '') {
        valid = false;
        msg += 'Name cannot be empty, \n'
    }

    if(email == '') {
        valid = false;
        msg += 'Email cannot be empty, \n';
    }
    
    if(password == '') {
        valid = false;
        msg += ', Password cannot be empty\n';
    }
    else if(password.length < 8){
        valid = false;
        msg += ', Password must be more than 8 characters\n';
    }
    else if(confpassword != password){
        valid = false;
        msg += 'Password must be the same with confirm password\n';
    }

    error.innerHTML = msg;

    if(valid == true){
        let alert = document.getElementById('register');
        alert.style.display = 'block';
    }
}

function generateDate() {
    let dates = document.getElementById('about');
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    
    dates.innerHTML = 'Last viewed ' + days[date.getDay()] +
                    ', ' + date.getDate() + 
                    '-' + date.getMonth() + 
                    '-' + date.getFullYear() +
                    ' at ' + date.getHours() +
                    ':' + date.getMinutes();
}