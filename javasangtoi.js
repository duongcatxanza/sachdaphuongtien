
    const body = document.body;
    const switch_mode = document.querySelector('#darkmode i');
    const mau_xanh = document.querySelector('#bluemode i');
    const xanh_la = document.querySelector('#custommode1 i');
    xanh_la.addEventListener('click', () =>{
        body.classList.toggle('green');
        body.classList.remove('dark');
        body.classList.remove('blue');
    })
    mau_xanh.addEventListener('click', () =>{
        // alert('hi');
        body.classList.toggle('blue');
        body.classList.remove('green');
        body.classList.remove('dark');
    })
    switch_mode.addEventListener('click', () =>{
        // alert('Click');
        body.classList.toggle('dark');
        body.classList.remove('green');
        body.classList.remove('blue');
    })
