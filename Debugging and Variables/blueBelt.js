document.getElementById('check').onclick = function(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let successBox = document.getElementById('successBox');
    successBox.style.display='none'
    let failureBox = document.getElementById('failureBox');
    failureBox.style.display='none'


    if (login == 'admin' && password == 'qwerty')
    successBox.style.display='block'
    else
    failureBox.style.display='block'
}
