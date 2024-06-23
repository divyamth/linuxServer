const button = document.getElementById('run-button');
const command = 'ipconfig';

button.addEventListener('click', async() =>{
    try{
        const reponse = await fetch('/run',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({command}),
        });

        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('stdout:', data.stdout);
        console.log('stderr:', data.stderr);
    }catch(error){
        console.error('Error running command:', error);
    }
})